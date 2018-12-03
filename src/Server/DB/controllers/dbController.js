import client from '../connect';
import uuidv4 from 'uuid/v4';
import helper from './helper'
import {redisClient} from '../connect';
import 'dotenv'

class dbController {
  /*---------------- User methods ---------------------------*/

  // create User
  static async createUser( req, res ) {
    const createUser = `INSERT INTO users(userId, firstName, lastName, userName, email, bio, stack, 
      quote,profileImage, profileImageId, password,password2, isAdmin, userSecret, userCreated)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 ,$14 , $15)`;
    const hashPassword = helper.hashPassword(req.body.password);
    const hashPassword2 = helper.hashPassword(req.body.password2);
    const getUser =`SELECT username from users`;
    const users= await client.query(getUser);  
    const getEmail=`SELECT email from users`;
    const email= await client.query(getEmail);
    const values = [
        uuidv4(),
        req.body.firstName,
        req.body.lastName,
        req.body.userName,
        req.body.email,
        req.body.bio,
        req.body.stack,
        req.body.quote,
        req.body.profileImage,
        req.body.profileImageId,
        hashPassword,
        hashPassword2,
        false,
        uuidv4(),
        new Date(),
      ];

    // check if email and password is inputted  
    if (!req.body.userName) {
      return res.status(400).json({'message': 'User name is required'});
    }
    if(helper.isUniqueUserName(req.body.userName,users.rows[0]) !== null){
      return res.status(404).json({'message':'User name already exists'
      })
    }
    if (!req.body.email) {
      return res.status(400).json({'message': 'Email is required'});
    }
  
    if(helper.isUniqueEmail(req.body.email,email.rows[0]) !== null){
     return res.status(404).json({'message':'Email already exists'
     })
    }
    if (!helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }
    if (!req.body.password) {
      return res.status(400).json({'message': 'Password is required'});
    }
    if (!helper.isValidPassword(req.body.password)) {
      return res.status(400).send({ 'message': 'Please enter a valid password',
    'Hint': 'Password must be between 6 and 15 characters long and must contain digits and letters' });
    }
    if (!req.body.password2) {
      return res.status(400).json({'message': 'Please confirm password'});
    }
    if (req.body.password !== req.body.password2) {
      return res.status(400).json({'message':'Passwords does not match!'})
    }
    // hash the password inputted
  
    // insert user details into the database
    try {
      await client.query(createUser, values);
      // generate a user token for that user id
      const token = helper.generateToken(uuidv4(),false)
      return res.status(201).json({
        status: "SIGN UP SUCCESFUL",
        token,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  // login user
  static async login( req, res ) {
    // login user similar to get user
    // check if email and password is inputted
 
    if (!req.body.email) {
      return res.status(400).json({'message': 'Email is required'});
    }
    if (!req.body.password) {
      return res.status(400).json({'message': 'Password is required'});
    }
    // check if the email is valid
    if (!helper.isValidEmail(req.body.email)) {
      return res.status(400).json({ 'message': 'Please enter a valid email address' });
    }
    const getUser = 'SELECT * FROM users WHERE email = $1';
    try {
      //
      const { rows } = await client.query(getUser, [req.body.email]);
      if (!rows[0]) {
        return res.status(400).json({'message': 'Incorrect email'});
      }
      // check if the inputted password is the same password created
      if(!helper.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).json({ 'message': 'Incorrect password' });
      }
      // generate a token for the user
      const token = helper.generateToken(rows[0].userid, rows[0].isadmin, rows[0].username);
      // check if token
      return res.status(200).json({ Message:'login successful',
      token});
      // yet to implement validation for already login in
    } catch(error) {
      return res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      })
    }
  }
  static async logout( req, res ) {
    // check if user is logged in
    // logout user
    // save token in redis
  const token = req.headers['x-access-token']
  
  
  try{
    // rewrite this in async await
    const invalid = (callback) => {
      redisClient.lrange('token', 0,100, (err,result)=> {
          return callback(result)
      });
   }
    // up to this point
  invalid((result)=>{
      if (result.indexOf(token) > -1){
          return res.status(400).json({'Message':'You are already logged out'})
      }
      redisClient.LPUSH('token',token);
      return res.status(400).json({'Message':'You are logged out'})
  })
  }catch(error){
    res.status(400).json(error)
  }
  
  }
// edit  user
  static async editProfile (req, res){
      const getUser =`SELECT * from users where userId = $1`
      const {rows} = await client.query(getUser, [req.user.userId]);
      const updateUser =`UPDATE users
      SET firstName =$1, lastName =$2, userName =$3, bio =$4, stack=$5, quote =$6, 
      profileImage =$7, profileImageId = $8, password = $9 ,userUpdated =$10,
      WHERE userId = $11 returning *`
    try{
      const values =[
        req.body.firstName || rows[0].firstname,
        req.body.lastName ||rows[0].lastname,
        req.body.userName || rows[0].username,
        req.body.bio || rows[0].bio,
        req.body.stack|| rows[0].stack,
        req.body.quote||rows[0].quote ,
        req.body.profileImage||rows[0].profileimage,
        req.body.profileImageId|| rows[0].profileimageid,
        helper.hashPassword(req.body.password)|| hashPassword,
        new Date(),
        req.user.userId
      ]
      const response = await client.query(updateUser, values);
      return res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(400).json({
      status: 'FAILED',
      message: error.toString()
    });
  }

  }
  static async getAllUsers (req, res){
    const getUsers =`SELECT * FROM users`
    try {
      if(req.user.isAdmin === true){
        const {rows, rowCount} = await client.query(getUsers);
        return res.status(200).json({ rows, rowCount });
      }
      return res.status(400).json({
        status: 'FAILED',
        message: 'Not Authorized'
      })
      
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }

  static async makeAdmin (req, res){
    const updateUser =`UPDATE users SET isAdmin =$1 WHERE userId = $2  returning userName,userId, isAdmin`
  try{
    if(req.user.isAdmin === true){
    const response = await client.query(updateUser, [req.body.isAdmin, req.params.userId]);
    return res.status(200).json({
      status:response.rows[0],
      'message': 'Login again to use updated status'

    });
  }
  return res.status(400).json({
    status: 'FAILED',
    message: 'Not Authorized'
  })
} catch (error) {
  res.status(400).json({
    status: 'FAILED',
    message: error.toString()
  });
}

}
// delete user
  static async deleteUser(req, res) {
    const getUser = `SELECT userId FROM users WHERE userId=$1`
    
    const deleteUser = `DELETE FROM users where userId=$1 returning *`;
    try {
      const { rows } = await client.query(getUser, [req.params.userId]);
      if(!rows[0]) {
        return res.status(404).json({'message': 'user not found'});
      }
      if(req.user.isAdmin === true||req.user.userId === rows[0] ) {
        await client.query(deleteUser,[req.params.userId] )
        return res.status(200).json({ 'message': 'deleted' });
      } 
      return res.status(401).json({ 'message': 'Not Authorized' });
  } catch(error) {
      return res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  
  /*----------------Question Methods--------------------------------- */
  static async postQuestion( req, res ) {
    try {
      const getUser = 'SELECT * FROM users WHERE userId = $1';
      const { rows } = await client.query(getUser, [req.user.userId]);
      
      const createQuestion = `INSERT INTO questions(authorId,subject,question,authorName,category,tags,questionCreated)
                   VALUES($1,$2,$3,$4,$5,$6,$7)`;
      const values = [
        req.user.userId,
        req.body.subject,
        req.body.question,
        rows[0].username,
        req.body.category,
        req.body.tags,
        new Date()
      ];
      await client.query(createQuestion, values);
      return res.status(201).json({
        status: 'SUCCESS',
        message: 'Question added successfully.'
      });
    } catch (error) {
      res.status(405).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  
  static async getQuestions( req, res ) {
    
    try {
      const getAllQuestions =`SELECT * from questions`;
      const {rows, rowCount} = await client.query(getAllQuestions);
      return res.status(200).json({ rows, rowCount });
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  static async getQuestionsByFilter( req, res ) {
    
    try {
      const getByFiltering = 'SELECT * from questions WHERE tags=$1 OR category=$2';
      const {rows, rowCount} = await client.query(getByFiltering, [req.query.tags, req.query.category]);
      return res.status(200).json({rows, rowCount});
      if (!rows[0]) {
        return res.status(404).json({'message': 'question not found'});
      }
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  static async getQuestion (req, res ) {
    const getQuestionById =`SELECT * from questions WHERE questionId=$1`
    const getAnswers =`SELECT * from answers WHERE questionId=$1`
    try {
        const {rows} = await client.query(getQuestionById,[req.params.questionId])
      if (!rows[0]) {
        return res.status(404).json({'message': 'question not found'});
      }
      const answers = await client.query(getAnswers,[req.params.questionId])
      if(!answers.rows){
       return res.status(404).json({
        'question': rows[0],
         'message': 'No answer found'})
       }      
      return res.status(200).json(
        { 'question':rows[0],
          'answers':answers.rows,
          'No of Answers': answers.rowCount
        });
      
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  static async getQuestionsByUser( req, res ) {
    
    try {
      const getAllQuestions =`SELECT * from questions WHERE authorId =$1`;
      const {rows, rowCount} = await client.query(getAllQuestions,[req.user.userId]);
      return res.status(200).json({ 
        'No of Questions': rowCount,
       'Questions':rows });
    } catch (error) {
      res.status(400).json({
        status: 'No question Found',
        message: error.toString()
      });
    }
  }
 
  static async deleteQuestion ( req, res ) {
    try {
      const getQuestionById =`SELECT * from questions WHERE questionId=$1`
      const {rows} = await client.query(getQuestionById,[req.params.questionId])
      if(!rows[0]){
        return res.status(404).json({
          status: 'Failed',
          message: 'No question found.'})
        } 
      const deleteById =`DELETE from questions WHERE questionId=$1`;
      if (req.user.isAdmin === true || req.user.userId === rows[0].authorid) {
        await client.query(deleteById, [req.params.questionId]);
         return res.status(200).json({
           status: 'SUCCESS',
           message: 'Question deleted successfully.'})
    }
    return res.status(404).json({
      status: 'FAILED',
      message: 'Cannot delete questions.'})

    
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  
 /*--------------------------Answers Method-------------------------*/ 

  static async postAnswer( req, res ) {
    try {
      const getUser = 'SELECT * FROM users WHERE userId = $1';
      const { rows } = await client.query(getUser, [req.user.userId]);
      const sql = `INSERT INTO answers(questionId,authorId, answerAuthor ,answer,answerCreated)
        VALUES($1,$2,$3,$4,$5)`;

      const values = [
        req.params.questionId,
        req.user.userId,
        rows[0].username,
        req.body.answer,
        new Date()
      ];

      await client.query(sql, values);
      const newAnswer = await client.query(`SELECT * FROM answers`);

      const Answers = newAnswer.rows;

      return res.status(200).json({
        Answers
      });

    } catch (error) {
      res.status(500).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  static async updateAnswer ( req, res ) {
    try {
      const findAnswer =`SELECT * from answers WHERE questionId=$1 and authorId=2`
      const updateAnswer =`UPDATE answers
      SET answer =$1, answerUpdated = $2
      WHERE answerId = $3 returning *`
      
      const {rows} = await client.query(findAnswer,[req.params.questionId, req.user.userId])
        if (!rows[0]) {
          return res.status(404).json({'message': 'Answer not found'});
        }
        const values = [
          req.body.answer || rows[0].answer,
          new Date(),
          req.params.answerId
        ];
        const response = await client.query(updateAnswer, values);
        return res.status(200).json(response.rows[0]);
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  static async deleteAnswer ( req, res ) {
    try {
      const getAnswerById =`SELECT * from answers WHERE questionId=$1 AND answerId =$2`
      const {rows} = await client.query(getAnswerById,[req.params.questionId, req.params.answerId])
      if(!rows[0]){
        return res.status(404).json({
          status: 'Failed',
          message: 'No Answer found.'})
        } 
      if(req.user.isAdmin === true || req.user.userId === rows[0].authorid ) {
        const deleteById =`DELETE from answers WHERE questionId=$1 AND answerId =$2`
        await client.query(deleteById,[req.params.questionId , req.params.answerId])
        return res.status(200).json({'message' : 'Answer deleted'});
      }
      return res.status(404).json({
        status: 'FAILED',
        message: 'Cannot delete answer.'})
      
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }3
  }

  /*------------------------------Comment Answers-----------------------------------------*/
  static async updateComment ( req, res){
    try {
   
      const getUser = 'SELECT * FROM users WHERE userId = $1';
      const author = await client.query(getUser,[req.user.userId])
   
      const comments =`SELECT * from comments WHERE answerId=$1`
      const getComments = await client.query(comments,[req.params.answerId])

      const insertComment =`INSERT INTO comments(answerId, authorId, commentAuthor,description,commentCreated)
      Values($1 , $2 , $3, $4 ,$5)`
      const updateComment =`UPDATE comments
      SET authorId =$1, commentAuthor= $2 , description = $3, commentUpdated = $4
      WHERE answerId = $5 returning *`
      const values =[
        req.params.answerId,
        author.rows[0].userid,
        author.rows[0].username,
        req.body.description,
        new Date() 
      ]
      
      if(req.user.userId){
        if(!getComments.rows[0]){
          const inserted = await client.query(insertComment, values)
          return res.status(200).json({
            Message:'Comment added',
            details:inserted.rows[0]
          })
        }
        if(req.user.userId === getComments.rows[0].authorid){ 
          const updatedValues = [
            req.body.authorId || getComments.rows[0].authorid,
            req.body.commentAuthor || getComments.rows[0].commentauthor,
            req.body.description || getComments.rows[0].description,
            new Date(),
            req.params.answerId
          ];
          
          const response = await client.query(updateComment, updatedValues);
          return res.status(200).json(response.rows[0]);
        } 
        return res.status(400).json({
          Status : 'Not authorized',
          message: 'Cannot update this answer'
        })
      }
      
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }

  }
 
  static async deleteComment ( req, res ) {
    try {
      const getCommentById =`SELECT * from comments WHERE answerId=$1 AND commentId =$2`
      const {rows} = await client.query(getCommentById,[req.params.answerId, req.params.commentId])
      if(!rows[0]){
        return res.status(404).json({
          status: 'Failed',
          message: 'No Comments found.'})
        }
      
        if(req.user.isAdmin === true || req.user.userId === rows[0].authorid ) {
          const deleteById =`DELETE from comments WHERE answerId=$1 AND commentId =$2`
          await client.query(deleteById,[req.params.answerId , req.params.commentId])
          return res.status(200).json({message : 'Comment deleted'});
        }
        return res.status(404).json({
          status: 'FAILED',
          message: 'Cannot delete comment.'})
      
    } catch (error) {
      res.status(400).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }

};

export default dbController;