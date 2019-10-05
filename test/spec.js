import chai from 'chai';
import assert, { doesNotReject } from 'assert';
import chaiHttp from 'chai-http';
import chaiUUID from 'chai-uuid'
import '@babel/polyfill';
import * as method from '../src/Server/DB/models/dbModel';
import app from '../src/Server/server'
import auth from'../src/Server/DB/auth/auth'
import helper from '../src/Server/DB/controllers/helper'

chai.use(chaiHttp)
chai.use(chaiUUID)

/*----------- Test that Mocha chai is working -----------------*/
const assertion = chai.assert
const expect = chai.expect;
const should = chai.should();


describe('Test Setup', function(){
  // check if inbuilt assertions is working
  describe('check inbuilt assertion module', function(){
  it('should return Ok', function(){
      assert.ok(true);
    });
  });
  describe('check  chai assertion module', function(){
    it('should return Ok', function(){
      assertion.isOk(true)

    });
  });
  describe('check  chai expect module  for TDD', function(){
    it('should return Ok', function(){
      const ok = true
      expect(ok).to.be.true

    });
  });
  describe('check  chai should module for BDD', function(){
    it('should return Ok', function(){
      const ok = true
      ok.should.be.true
    });
  });
});

/*---------------------Test for Database --------------------*/

describe ('Test Endpionts for database',function(){
  
  before(async function(){
    try{
      const empty = await method.dropAllTables();
      await method.createAllTables(empty)
    }catch(err){

    }  
  })
  describe('Authentication',function(){
    describe('token ()', function(){
      const token = helper.generateToken({
        userId:'0ce529f4-8854-41ec-b67c-fbcb4e716e42',
        isAdmin:false,
        userName:'basilcea'});
      it('should generate token', function(done){
        should.exist(token)
        token.should.be.a('string')
        console.log(token)
        done()
      })
    })
  })
  describe('Authenticated view routes', function(){
    describe('Test User Endpionts', function(){
      let token =''
      it('Create user',function(done){
        let signUpDetails={
          userName:'basilcea',
          email:'basilcea@gmail.com',
          password:'passWord1',
          password2:'passWord1'
        }
        chai.request(app)
        .post('/api/v1/users/signup')
        .send(signUpDetails)
        .end(function(err,res){
          res.status.should.eql(201)
          res.type.should.eql('application/json');
          res.body.should.include.keys('status', 'token');
          res.body.status.should.eql('SIGN UP SUCCESFUL');
          token = res.body.token
          console.log(res.body)
        })
        done()
      });
      it('Logout user',function(){
        chai.request(app)
        .post('/api/v1/users/logout')
        .send()
        .then(function(res){
          console.log(res.body)
          res.body.status.should.eql(200)
        })
        .catch(function(err){

        })

      });
      it('Login user',function(done){
        let loginDetails={
          email:'basilcea@gmail.com',
          password:'passWord1'
        }
        chai.request(app)
        .post('/api/v1/users/login')
        .send(loginDetails)
        .then(function(res){
          res.body.should.be.an('object')
          console.log(res.body.Message)
          console.log(res.body)
          if((res.body.status)===undefined){
            res.status.should.be.eql(400)
          }else{
            res.status.should.eql(201)
            res.type.should.eql('application/json');
            res.body.should.include.keys('status', 'token');
            res.body.status.should.eql('login succesful');
            
          }
          
        })
       .catch(function(err){
         throw err
       })

      });
      it('Edit user profile',()=>{

      });
      

    })
    describe('Test questions endpionts', function(){
      it('Post a question',function(){
        let question ={
          subject: 'subject of question',
          question: 'question description',
          category: 'category1',
          tags:['testQuestion','mochaTest']
        }
        chai.request(app)
        .post('/api/v1/questions')
        .auth('basilcea','passWord1')
        .send(question)
        .then(function(res){
          console.log(res.body)
          expect(res.body).to.be.an('object')
          expect(res.status).to.equal(201)
          expect(err).to.be.null
        })
        .catch(function(err){
          throw err
        })

      });      
      
      it('Get all questions by a user',()=>{

      });
      it('Delete a question',()=>{

      });

    })
    describe('Test Answers Endpionts', ()=>{
      it('Post an Answer',()=>{

      });
      it('update an answer',()=>{

      });
      it('Delete an answer',()=>{

      });


    })
    describe('Test Comments Endpionts', ()=>{
      it('update a comment',()=>{

      });
      it('Delete a comment',()=>{

      });

    })

    describe('Test Admin Endpionts', ()=>{
      it('Get all users',()=>{

      });
      it('Make user Admin',()=>{

      });
      it('Delete a user',()=>{

      });

    })
  })
  describe('General view routes', function(){
    describe('Test questions endpionts', function(){
      it('Get all questions',function(){
        chai.request(app)
        .get('/api/v1/questions')
        .then(function(res){
          expect(res.body).to.be.an('object')
          if((res.body.rows)!==undefined){
            expect(res.status).to.equal(200)
            expect(res.body).to.have.all.keys('rows','rowCount')
          }
          else{
            expect(res.status).to.equal(404)
          }
          
        })
        .catch(function(err){
          throw err
        })
      })
      it('Get all questions in a category or with a tag',function(){
        chai.request(app)
        .get('/api/v1/questions/filter')
        .query({tags:['bootstrap','frameworks'], category:'css'})
        .then(function(res){
          expect(res.body).to.be.an('object')
          if((res.body.rows)!==undefined){
            expect(res.body.rows).to.have.property('authorName')
            expect(res.body.rows).to.have.property('subject')
            expect(res.body.rows).to.have.property('question')
            expect(res.body.rows).to.have.property('category')
            expect(res.body).to.have.keys('rows','rowCount')
            expect(res.status).to.equal(200)  
          }
          else{
            expect(res.status).to.equal(404)
          }
        })
        .catch( function(err){
          throw err
        })
      });
      it('Get a question with all it answers',function(){
        chai.request(app)
        .get('/api/v1/questions/0ce529f4-8854-41ec-b67c-fbcb4e716e42')
        .then(function(res){
          expect('0ce529f4-8854-41ec-b67c-fbcb4e716e42').to.be.a.uuid()
          if((res.body.rows)!==undefined){
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.any.key('questions')
            expect(res.body.questions).to.have.property('authorName')
            expect(res.body.questions).to.have.property('subject')
            expect(res.body.questions).to.have.property('question')
            expect(res.body.questions).to.have.property('category')
            if((res.body.answer.rows)!==undefined){
              expect(res.status).to.equal(200)
              expect(res.body).to.have.all.keys('questions','answers','No of Answers')
              expect(res.body.answers).to.have.property('answerAuthor')
              expect(res.body.answers).to.have.property('answer')
              expect(res.body.answers).to.have.property('answerCreated')
            }else{
              expect(res.status).to.equal(404)
              expect(res.body).to.not.have.any.keys('answers','No of Answers')
            }
          }else{
            expect(res.status).to.equal(404)
          }

        })
        .catch(function(err){
          throw err
        }) 
      });
      it('Search for a question',()=>{
        chai.request(app)
        .get('/api/v1/questions/search')
        .query({searchString:'question'})
        .then( function (res){
          expect(res.body).to.be.an('object')
          if((res.body.rows)!==undefined){
            expect(res.body.rows).to.be.an('array')
            expect(res.body.rows).to.have.property('authorName')
            expect(res.body.rows).to.have.property('subject')
            expect(res.body.rows).to.have.property('question')
            expect(res.body.rows).to.have.property('category')
            expect(res.body).to.have.keys('Matches','rows')
            expect(res.status).to.equal(200)  
          }
          else{
            expect(res.status).to.equal(404)
          }
        })
        .catch(function(err){
          throw err
        })
      
      })
    });
  })
  
  
})