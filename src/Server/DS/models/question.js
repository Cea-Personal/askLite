import user from './user'
import {category,tags} from './sort'
let date = new Date();

const questions =[
    {
        questionId:1,
        author: user[0].userName,
        subject:"Is it possible to implement modular css without webpack",
        question:" i have been seeing write up and tutorials on implementing css modules.Most tutorial go through the process of bundling and using a framework .I just want to know if it possible to implement it with vanilla javascript and no webpack, if yes how.",
        tags:[tags[1],tags[2],tags[4]],
        category:category[1],
        questionCreated:date.toDateString(),
        answers:[
            {
            answerId:1,
            author : user[3].userName,
            answer :'well i know that is possible to implement modular css with webpack and vanilla javascript but without webpack, i only know of using BEM approach',
            answerCreated:date.toDateString(),
            comments:[
                {
                commentId:1,
                author:user[1].name,
                description:'Yes you can',
                commentCreated:date.toDateString(),
            }],
            upvotes:6,
            downvotes: 10,
            prefered:'No'
        },
        {
            answerId:2,
            author : user[4].userName,
            answer:'it is possible',
            answerCreated:date.toDateString(),
            comments:[{}],
            upvotes:38,
            downvotes: 2,
            prefered:'Yes'

        }]
    },
    {
        questionId:2,
        author:user[4].userName,
        subject:"How do i create an MVP in Ruby",
        question:" I am trying to implement an MVP architecture in Ruby, i know how to use MVC but fairly new to MVP",
        tags:[tags[3],tags[5],tags[6]],
        category:category[7],
        questionCreated:date.toDateString(),
        answers:[{}],
        upvotes:60,
        downvotes: 2,
        prefered:'Yes'
    },
    {
        questionId:3,
        author:user[4].userName,
        subject:"How to become a GDE",
        question:"Hey guys, i've been a solution architect for a year now,my next goal is to become a google developer expert in a bid to give back to the community.What steps can be taken to become one?",
        tags:[tags[7],tags[9]],
        category:category[8],
        questionCreated:date.toDateString(),
        answers:[{
            answerId:1,
            author : user[2].userName,
            description :"You can always give back to the community whether youre a GDE or not. Becoming a GDE is by nomination from other GDE's",
            created:date.toDateString(),
            comments:[{}],
            upvotes:60,
            downvotes:52,
            prefered:'No'
        }]
    },
    {
        questionId:4,
        author:user[2].userName,
        subject:"Is it possible to build PWA with React",
        question:"I have being building web apps with react but i want to incorporate the best features of mobile apps into my web apps.How do i implement progressive web apps?",
        tags:[tags[0],tags[10],tags[11]],
        category:category[4],
        questionCreated:date.toDateString(),
        answers:[{
            answerId:1,
            author :user[3].userName,
            answer :'it is possible to build PWA with react',
            answerCreated:date.toDateString(),
            comments:[{
                commentId:1,
                author:user[2].userName,
                description:'Thanks, i will google the rest out',
                commentCreated:date.toDateString(),

            }],
            upvotes:70,
            downvotes:5,
            prefered:'Yes'
        },
        {
            answerid:2,
            author: user[1].userName,
            answer :'it is possible to build web apps with react and mobile apps with react so building PWA with react is possible',
            answerCreated:date.toDateString(),
        }]
    },
    {
        questionId:5,
        author:user[3].userName,
        subject:"Is it possible to implement modular css without webpack",
        question:" i have been seeing write up and tutorials on implementing css modules.Most tutorial go through the process of bundling and using a framework .I just want to know if it possible to implement it with vanilla javascript and no webpack, if yes how.",
        tags:[tags[1],tags[2],tags[4]],
        category:category[1],
        questionCreated:date.toDateString(),
        answers:[{

        }]
    }

]
export default questions

