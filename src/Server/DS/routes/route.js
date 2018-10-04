import express from 'express';
import {
    getQuestions,
    getQuestion,
    postQuestion,
    deleteQuestion,
    postAnswer,
    updateAnswer,
    deleteAnswer,
    updateComment,
    deleteComment

    }  from '../controllers/question';
import {
    getUsers,
    getUser,
    postUser,
    deleteUser
} from '../controllers/users';
 import {
    setCookie,
    clearCookie,
} from '../controllers/cookies';

const router = express.Router();

router.get('/cookie', setCookie)
router.get('/clearCookie', clearCookie)
router.get('/questions', getQuestions);
router.get('/questions/:id', getQuestion);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/questions', postQuestion);
router.post('/questions/:id/answers', postAnswer);
router.post('/users',postUser);
router.put('/questions/:id/answers/:id',updateAnswer);
router.put('/questions/:id/answers/:id/comments/:id',updateComment)//yet to work on the controller for this
router.delete('/questions/:id',deleteQuestion);
router.delete('/questions/:id/answers/:id',deleteAnswer);
router.delete('/questions/:id/answers/:id/comments/:id',deleteComment);
router.delete('/users/:id',deleteUser);


export default router;