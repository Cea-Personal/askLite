import questions from '../models/question';
import {category,tags} from '../models/sort';

//--------- Methods for questions---------------

// working

export const getQuestions = (req, res) =>{
  const tag =req.query.tags;
  const cat =req.query.category;
  if(tag){
    questions.filter((question) =>{

    for (let i=0;i<question.tags.length;i++){

      if(question.tags[i] === tag){
         console.log(question,'logged');
          res.status(200).send({
          success:'true',
          message: 'Questions with this tag',
          //question
        })
      }

    }

  })
  res.status(404).send({
      success:'false',
      message: 'Tag not found'
    })
}
if(cat){
  questions.filter((question) => {
    if(question.category === cat){
      res.status(200).send({
        success: 'true',
        message: 'Questions in this category',
        question
      })
    }
  })
  res.status(404).send({
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
          author: req.body.author
        };
        question.answers.push(answer);
        return res.status(201).send({
          success:'true',
          message:'You added an answer',
          answer
        });
    }
      return res.status(404).send({
        success:'false',
        message:'question does not exist'

      });

  });
}


export const updateAnswer =(req,res) =>{
  let answerFound;
  let answerIndex;
  const id = parseInt(req.params.id, 10);
  questions.filter((question) => {
    if (question.id === id) {
      question.answers.filter((answer,index) => {
        if (answer.id ===id ){
          answerFound = answer;
          answerIndex = index;
        };
      })
    }
    if (!answerFound){
      return res.status(404).send({
        success:'false',
        message: 'answer not found',
      })
    }
    if(!req.body.description){
      return res.status(400).send({
        success:'false',
        message:'answer is required',
      })
    }
    if(!req.body.author){
      return res.status(400).send({
        success:'false',
        message:'author is required',
      });
    }
    const updatedAnswer ={
      id:answerFound.id,
      author: req.body.author || answerFound.author,
      description: req.body.description || todoFound.description,
      created: req.params.created,
      updated: Date().now,
      comments:req.body.comments
    }
    question.answers.splice(answerIndex,1,updatedAnswer);
    return res.status(201).send({
      success: 'true',
      message: 'answer updated',
      questions,
    })

  });
}
export const deleteAnswer =(req,res) =>{
  // delete an Answer
  const id = parseInt(req.params.id, 10);
  questions.filter((question) =>{
    if(question.id === id){
      question.answers.filter((answer, index) => {
        if (answer.id === id) {
          question.answers.splice(index,1);
          res.status(200).send({
            success: 'true',
            message: 'answer deleted successfully',
            questions,
          });
        }
      });
    }
    return res.status(404).send({
      success:  'false',
      message : 'answer does not exist',
    });
  })
  }

//-----------Methods for comments --------------
// put or edit a comment

export const updateComment = (req,res) =>{
  let commentFound;
  let commentIndex;
  const id = parseInt(req.params.id, 10);
  questions.answers.filter((answer,index) => {
    if (answer.id === id ){
      answerFound = answer;
      answerIndex = index;
    }
  })
  if (!answerFound){

    return res.status(404).send({
      success:'false',
      message: 'answer not found',
    })
  }
  if(!req.body.comments){
    return res.status(204).send({
      success:'true',
      message:'No comments',
    })
  }

  const updatedComment ={
    author: req.body.author || answerFound.author,
    description: req.body.description || todoFound.description,
    comments:req.body.comments,
    created: Date.now(),
  }
  questions.answers.splice(answerIndex,1,updatedAnswer);
  return res.status(201).send({
    success: 'true',
    message: 'answer updated',
    updatedAnswer,
  })

}
 export const deleteComment =(req,res) =>{
    // delete an comment

    const id = parseInt(req.params.id, 10);

    questions.answers.comments.filter((comments, index) => {
    if (comments.id === id) {
        questions.splice(index,1);
        res.status(200).send({
        success: 'true',
        message: 'comment deleted successfully',
        comments,
      });
    }
    });
      return res.status(404).send({
      success:  'false',
      message : 'comment does not exist',
    });


}



