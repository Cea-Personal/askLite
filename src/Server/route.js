import dotenv from 'dotenv';
import express from 'express'
dotenv.config();



import dsController from './DS/controllers/dsController' ;
import dbController from './DB/controllers/dbController' ;

const Controller = dbController || dsController
const router = express.Router();


router.post('/questions', Controller.postQuestion);
router.post('/users',Controller.postUser);
router.post('/questions/:questionId/answers', Controller.postAnswer);
/*router.get('/questions', Controller.getQuestions);
router.get('/questions/:id', Controller.getQuestion);
router.get('/users', Controller.getUsers);
router.get('/users/:id', Controller.getUser);
router.put('/questions/:id/answers/:ansid',Controller.updateAnswer);
router.put('/questions/:id/answers/:ansid/comments/:commid',Controller.updateComment)
router.delete('/questions/:id',Controller.deleteQuestion);
router.delete('/questions/:id/answers/:ansid', Controller.deleteAnswer);
router.delete('/questions/:id/answers/:ansid/comments/:commid', Controller.deleteComment);
router.delete('/users/:id',Controller.deleteUser);*/


export default router;