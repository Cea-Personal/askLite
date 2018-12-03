import chai from 'chai';
import assert from 'assert';
import chaiHttp from 'chai-http';
//import app from '../src/Server/server'

chai.use(chaiHttp)

/*----------- Test that Mocha chai is working -----------------*/
const assertion = chai.assert
const expect = chai.expect;
const should = chai.should();
describe('Test Setup', () => {
  // check if inbuilt assertions is working
  describe('check inbuilt assertion module', () =>{
  it('should return Ok', () =>{
      assert.ok(true);
    });
  });
  describe('check  chai assertion module', () =>{
    it('should return Ok', ()=>{
      assertion.isOk(true)

    });
  });
  describe('check  chai expect module', () =>{
    it('should return Ok', ()=>{
      const ok = true
      expect(ok).to.be.true

    });
  });
  describe('check  chai should module', () =>{
    it('should return Ok', ()=>{
      const ok = true
      ok.should.be.true
    });
  });
});

/*---------------------Test for Database --------------------*/

describe ('Test Endpionts for database',() => {
    describe('Test Questions endpionts', ()=>{
        it('Post a questions',(done)=>{
          chai.request('http://localhost:3000')
          .post('/api/v1/question')
          .auth('userId')
          .end((err,res) =>{
            expect(err).to.have.status(405)
            expect(res.status).to.equal(201)
          })
          done();

        });
        it('Get all questions',()=>{

        });
        it('Get all questions in a category or with a tag',()=>{

        });
        it('Get a question with all it answers',()=>{

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
      it('update an comment',()=>{

      });
      it('Delete an comment',()=>{

      });

    })
    describe('Test User Endpionts', ()=>{
      it('Create user',()=>{

      });
      it('Login user',()=>{

      });
      it('Edit user profile',()=>{

      });
      it('Logout user',()=>{

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