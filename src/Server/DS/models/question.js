import user from './user'
import {category,tags} from './sort'
let date = new Date();

const questions =[
    {
        id:1,
        author: user[0].userName,
        subject:"Is it possible to implement modular css without webpack",
        description:" i have been seeing write up and tutorials on implementing css modules.Most tutorial go through the process of bundling and using a framework .I just want to know if it possible to implement it with vanilla javascript and no webpack, if yes how.",
        tags:[tags[1],tags[2],tags[4]],
        category:category[1],
        created:date.toDateString(),
        answers:[
            {
            ansid:1,
            author : user[3].userName,
            description :'well i know that is possible to implement modular css with webpack and vanilla javascript but without webpack, i only know of using BEM approach',
            created:date.toDateString(),
            comments:[
                {
                commid:1,
                author:user[1].name,
                description:'Yes you can',
                created:date.toDateString(),
            }],
            upvotes:6,
            downvotes: 10,
            prefered:'No'
        },
        {
            ansid:2,
            author : user[4].userName,
            description :'it is possible',
            created:date.toDateString(),
            comments:[{}],
            upvotes:38,
            downvotes: 2,
            prefered:'Yes'

        }]
    },
    {
        id:2,
        author:user[4].userName,
        subject:"How do i create an MVP in Ruby",
        description:" I am trying to implement an MVP architecture in Ruby, i know how to use MVC but fairly new to MVP",
        tags:[tags[3],tags[5],tags[6]],
        category:category[7],
        created:date.toDateString(),
        answers:[{}],
        upvotes:60,
        downvotes: 2,
        prefered:'Yes'
    },
    {
        id:3,
        author:user[4].userName,
        subject:"How to become a GDE",
        description:"Hey guys, i've been a solution architect for a year now,my next goal is to become a google developer expert in a bid to give back to the community.What steps can be taken to become one?",
        tags:[tags[7],tags[9]],
        category:category[8],
        created:date.toDateString(),
        answers:[{
            ansid:1,
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
        id:4,
        author:user[2].userName,
        subject:"Is it possible to build PWA with React",
        description:"I have being building web apps with react but i want to incorporate the best features of mobile apps into my web apps.How do i implement progressive web apps?",
        tags:[tags[0],tags[10],tags[11]],
        category:category[4],
        created:date.toDateString(),
        answers:[{
            ansid:1,
            author :user[3].userName,
            description :'it is possible to build PWA with react',
            created:date.toDateString(),
            comments:[{
                commid:1,
                author:user[2].userName,
                description:'Thanks, i will google the rest out',
                created:date.toDateString(),

            }],
            upvotes:70,
            downvotes:5,
            prefered:'Yes'
        },
        {
            ansid:2,
            author: user[1].userName,
            description :'it is possible to build web apps with react and mobile apps with react so building PWA with react is possible',
            created:date.toDateString(),
        }]
    },
    {
        id:5,
        author:user[3].userName,
        subject:"Is it possible to implement modular css without webpack",
        description:" i have been seeing write up and tutorials on implementing css modules.Most tutorial go through the process of bundling and using a framework .I just want to know if it possible to implement it with vanilla javascript and no webpack, if yes how.",
        tags:[tags[1],tags[2],tags[4]],
        category:category[1],
        created:date.toDateString(),
        answers:[{

        }]
    }

]
export default questions;