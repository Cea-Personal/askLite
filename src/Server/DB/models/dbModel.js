import {client} from '../connect';

(async function(){
    try {
      const dropUsersTable = await client.query( `DROP TABLE IF EXISTS users CASCADE`);
      const createUsersTable =await client.query(`
        CREATE TABLE IF NOT EXISTS users(
          userId UUID PRIMARY KEY,
          firstName VARCHAR(20),
          lastName VARCHAR(20),
          userName VARCHAR(30) UNIQUE not null,
          email VARCHAR(40) UNIQUE not null,
          bio VARCHAR(250),
          stack VARCHAR(250),
          quote TEXT,
          profileImage VARCHAR(255),
          profileImageId VARCHAR(255),
          password VARCHAR(255) UNIQUE not null,
          password2 VARCHAR(255) UNIQUE not null,
          userCreated timestamp not null,
          userUpdated timestamp,
          isAdmin BOOLEAN,
          userSecret UUID
        )`);


      const dropQuestionsTable =await client.query(`DROP TABLE IF EXISTS questions CASCADE`);
      const createQuestionsTable =await client.query(`
          CREATE TABLE IF NOT EXISTS questions(
            questionId serial PRIMARY KEY,
            authorId UUID References users(userId) ON DELETE CASCADE,
            authorName VARCHAR(50),
            subject VARCHAR(400) not null,
            question text not null,
            category VARCHAR(100) not null,
            tags VARCHAR(250),
            Questioncreated timestamp not null
          )`);

       const dropAnswersTable =await client.query(`DROP TABLE IF EXISTS answers CASCADE`);
       const createAnswersTable =await client.query(`
          CREATE TABLE IF NOT EXISTS answers(
            answerId serial PRIMARY KEY,
            questionId integer references questions(questionId) ON DELETE CASCADE,
            authorId UUID References users(userId) ON DELETE CASCADE,
            answerAuthor  VARCHAR(100),
            answer text not null,
            upvotes integer, 
            downvotes integer,
            isPreferred BOOLEAN,
            answerCreated timestamp not null,
            answerUpdated timestamp
          )`);

       const dropCommentsTable = await client.query(`DROP TABLE IF EXISTS comments`);
       const createCommentsTable =await client.query(`
          CREATE TABLE IF NOT EXISTS comments(
            commentId serial PRIMARY KEY,
            answerId integer references answers(answerId) ON DELETE CASCADE,
            authorId UUID References users(userId) ON DELETE CASCADE,
            commentAuthor VARCHAR(100),
            description text not null,
            commentCreated timestamp not null,
            commentUpdated timestamp
          )`);

      client.end();

      console.log("TABLES CREATED SUCCESSFULLY!");
    } catch (error) {
      console.log(error);
    }
  
  }

)()


