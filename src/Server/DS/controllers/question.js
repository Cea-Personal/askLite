import questions from '../models/question';
import {category,tags} from '../models/sort';


//--------- Methods for questions---------------

export const getQuestions = (req, res) =>{
  const tag =req.query.tags;
  const cat =req.query.category;
if (tag) {
    // the filter function only checks for a condition that evaluates to either true of false. And then automatically returns a new array, once it checks all the values in the array. You need to store that in a variable, filteredQuestions
    const taggedQuestions = questions.filter(
      question => question.tags.indexOf(tag) > -1
    );
    res.status(200).send({
      success: "true",
      message: "Questions with this tag",
      question: taggedQuestions
    });
   return res.status(404).send({
     success: "false",
     message: "Tag not found"
    });
}
if(cat){
  const categoryQuestions = questions.filter(question =>
    question.category.indexOf(cat) >-1
    )
      res.status(200).send({
        success: 'true',
        message: 'Questions in this category',
        question:categoryQuestions
      })
     return res.status(404).send({
       success:'false',
       message: 'Category not found'
    })
}
 res.status(200).send({
    success: 'true',
    message: 'questions retrieved successfully',
    questions
  });

   res.status(404).send({
    success:'false',
    message: 'questions not found',
  });
  res.status(500).send({
    success:'false',
    message:"question can not be gotten, Try again",
  })
}

// working */
export const getQuestion = (req, res) => {
   //force all id string to integer
  const id = parseInt(req.params.id, 10);
   //create a new array for each element of the questions array and apply the function question to it

  questions.filter((question) => {
    if (question.id === id) {
        res.status(200).send({
          success: 'true',
          message: 'question retrieved successfully',
          question,
        });
    }
  });
    return res.status(404).send({
    success:  'false',
    message : 'question does not exist',
  });
};
//

export const postQuestion=(req,res)=>{
   //post a question
    if (!req.body.subject) {
      return res.status(400).send({
      success:'false',
      message: 'subject is required',
      });
    }
    if (!req.body.description){
      return res.status(400).send({
      success: 'false',
      message: 'description is required',
      });
    }
    const question = {
      id: questions.length + 1,
      author: req.body.author,
      subject : req.body.subject,
      description: req.body.description,
      category: req.body.category,
      tags:req.body.tags,
      created:new Date().toDateString(),
    };
    questions.push(question);
    return res.status(201).send({
      success: 'true',
      message : 'You have asked a question',
      question
    });
}

export const deleteQuestion =(req,res) =>{

  const id = parseInt(req.params.id, 10);

  questions.filter((question, index) => {
    if (question.id === id) {
        questions.splice(index,1);
        res.status(200).send({
        success: 'true',
        message: 'question deleted successfully',
        questions
      });
    }
    });
      return res.status(404).send({
      success:  'false',
      message : 'question does not exist',
    });
};


// -------------Methods for Answers------------------

 export const postAnswer = (req,res) => {
    // post an answer to a question
    const id = parseInt(req.params.id, 10);
    questions.filter((question) => {
      if (question.id === id){

        if (!req.body.description) {
          res.status(400).send({
            success: 'false',
            message: 'question is required',
          });
        } if (!req.body.author) {
          res.status(400).send({
            success: 'false',
            message: 'author is required',
          });
        }
        if(!req.body.comments){
          res.status(204).send({
            success:'true',
            message:'No comments'
          })

        }
        const answer = {
          id: question.answers.length + 1,
          description: req.body.description,
          comments: req.body.comments,
          author: req.body.author
        };
        question.answers.push(answer);
        return res.status(201).send({
          success:'true',
          message:'You added an answer',
          question
        });
    }
  });
  return res.status(404).send({
        success:'false',
        message:'question does not exist'

      });
}


export const updateAnswer =(req,res) =>{
  const id = parseInt(req.params.id,10);
  const answerId = parseInt(req.params.ansid,10);
  questions.filter(question => {
    if (question.id === id){
        if(answerId <= question.answers.length){
        if(!req.body.description){
          return res.status(400).send({
            success:'false',
            message:'answer is required',
          })
        }
         const updatedAnswer = {
          ansid:answerId,
          author: req.body.author,
          description: req.body.description,
          created: questions[id -1].answers[answerId-1].created,
          updated: new Date().toDateString(),
          comments:req.body.comments,
          upvotes:req.body.upvotes,
          downvotes: req.body.downvotes,
          prefered: req.body.prefered,
        }
        question.answers.splice(answerId-1,1,updatedAnswer);
        return res.status(201).send({
          success: 'true',
          message: 'answer updated',
          question
        })
    }
    return res.status(404).send({
      success: 'false',
      message: 'answer not found'
    })
    }
    return res.status(404).send({
      success: 'false',
      message: 'question not found'
    })


  })
}
export const deleteAnswer =(req,res) =>{
  // delete an Answer
  const id = parseInt(req.params.id, 10);
  const answerId = parseInt( req.params.ansid,10)
  questions.filter(question =>{
    if(question.id ===id){
          question.answers.splice(answerId-1,1);
          res.status(200).send({
            success: 'true',
            message: 'answer deleted successfully',
            question,
          });
        }
      });
    return res.status(404).send({
      success:  'false',
      message : 'answer does not exist',
    });
  }

//-----------Methods for comments --------------
// put or edit a comment

export const updateComment = (req,res) => {
  const id = parseInt(req.params.id, 10);
  const answerId = parseInt(req.params.ansid ,10);
  const commentId = parseInt( req.params.commid ,10)
  questions.filter(question => {
    if (question.id ===id ){
      question.answers.filter(answer =>{
        if(answer.ansid === answerId){
          if(!req.body.description){
              return res.status(400).send({
                success:'false',
                message:'comment is required',
              })
            }
          if(commentId <= answer.comments.length){
            const updatedComment = {
              commid : commentId,
              author: req.body.author,
              description: req.body.description,
              comments:req.body.comments,
              created: questions[id -1].answers[answerId-1].comments[commentId-1].created,
              updated: new Date().toDateString(),
            };
            answer.comments.splice(commentId-1,1,updatedComment);
            return res.status(201).send({
              success: 'true',
              message: 'comment updated',
              question
            })
          }else{
             const newComment = {
              commid : answer.comments.length + 1,
              author: req.body.author,
              description: req.body.description,
              comments:req.body.comments,
              created:new Date().toDateString(),
            };
            answer.comments.push(newComment);
            return res.status(201).send({
              success: 'true',
              message: 'comment added',
              question
            })
          }
      }
      })
      } return res.status(404).send({
        success: 'false',
        message: 'Answer not found',
      })
  })
}
 export const deleteComment =(req,res) =>{
    const id = parseInt(req.params.id, 10);
    const answerId = parseInt(req.params.ansid ,10);
    const commentId = parseInt( req.params.commid ,10)
    questions.filter(question => {
      if (question.id ===id ){
        question.answers.filter(answer =>{
          if(answer.ansid === answerId){
            answer.comments.splice(commentId-1,1);
            return res.status(200).send({
              success: 'true',
              message: 'comment deleted successfully',
              question
            });
          }
          return res.status(404).send({
            success:  'false',
            message : 'comment does not exist',
          });
        })
      }
    })
}



