import users from '../models/user';

export const getUsers =(req,res)=>{
    res.status(200).send({
    success: 'true',
    message: 'users retrieved successfully',
    users
  });
  res.status(404).send({
    success:'false',
    message: 'user not found',
  });
  res.status(501).send({
    success:'false',
    message:"users can not be gotten, Try again",
  })
};

export const getUser =(req,res) =>{
    // force all id string to integer
  const id = parseInt(req.params.id, 10);
  // create a new array for each element of the userss array and apply the function user to it

  users.filter((user) => {
    if (user.id === id) {
        res.status(200).send({
        success: 'true',
        message: 'user retrieved successfully',
        user
      });
    }
    });
      return res.status(404).send({
      success:  'false',
      message : 'user does not exist',
    });
}
export const postUser =(req,res) =>{

    if (!req.body.fullName) {
      return res.status(400).send({
      success:'false',
      message: 'fullname is required',
      });
    } if (!req.body.userName) {
      return res.status(400).send({
      success: 'false',
      message: 'username is required',
      });
    }
    if (!req.body.email) {
      return res.status(400).send({
      success: 'false',
      message: 'email is required',
      });
    }
    if (!req.body.password) {
      return res.status(400).send({
      success: 'false',
      message: 'password is required',
      });
    }
    const user = {
      id: users.length + 1,
      fullName: req.body.fullName,
      userName : req.body.userName,
      email: req.body.email,
      sex: req.body.sex,
      password:req.body.password,
      title:req.body.title,
      stack:req.body.stack,
      bio:req.body.bio,
      quote:req.body.quote,
    };
    users.push(user);
    return res.status(201).send({
      success: 'true',
      message : 'You have been added as a user',
      user
    });
  };

export const deleteUser =(req,res)=>{
    const id = parseInt(req.params.id, 10);

    users.filter((user, index) => {
    if (user.id === id) {
        users.splice(index,1);
        res.status(200).send({
        success: 'true',
        message: 'question deleted successfully',
        users,
      });
    }
    });
      return res.status(404).send({
      success:  'false',
      message : 'question does not exist',
    });
}