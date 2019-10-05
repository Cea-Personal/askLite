import dotenv from 'dotenv';
import express from 'express'
dotenv.config();

import dsController from './DS/Controllers/dsController' ;
import dbController from './DB/Controllers/dbController' ;
import Auth from './DB/auth/auth';


const Controller = dbController || dsController
const router = express.Router();
//admin routes
router.get('/admin/users/all',Auth.checkToken,Controller.getAllUsers);
router.put('/admin/:userId/makeadmin',Auth.checkToken,Controller.makeAdmin)

// user routes
router.post('/users/signup',Controller.createUser);
router.post('/users/login', Controller.login);
router.post('/users/logout',Controller.logout);
router.put('/users/me',Auth.checkToken , Controller.editProfile);
router.delete('/users/:userId',Auth.checkToken , Controller.deleteUser);


// general view routes
router.get('/questions', Controller.getQuestions);
router.get('/questions/filter', Controller.getQuestionsByFilter);
router.get('/questions/search',Controller.search)
router.get('/questions/:questionId', Controller.getQuestion);
// user view routes for questions
router.post('/questions', Auth.checkToken , Controller.postQuestion);
router.get('/questions/me/all',Auth.checkToken , Controller.getQuestionsByUser);
//router.get('/questions/me/:questionId',Auth.checkToken , Controller.getQuestionByUser);
router.delete('/questions/:questionId', Auth.checkToken, Controller.deleteQuestion);
// user view routes for answers
router.post('/questions/:questionId/answers', Auth.checkToken , Controller.postAnswer);
router.put('/questions/:questionId/answers/:answerId',Auth.checkToken , Controller.updateAnswer);
router.delete('/questions/:questionId/answers/:answerId', Auth.checkToken , Controller.deleteAnswer);
// user view routes for comments
router.put('/answers/:answerId/comments/:commentId',Auth.checkToken , Controller.updateComment);
router.delete('/answers/:answerId/comments/:commentId', Auth.checkToken , Controller.deleteComment);



export default router;