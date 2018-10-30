import client from '../connect';

(async () => {
    try {
      await client.query( `DROP TABLE IF EXISTS users CASCADE`);
      await client.query(`
        CREATE TABLE IF NOT EXISTS users(
          userId SERIAL PRIMARY KEY,
          firstName VARCHAR(20) not null,
          lastName VARCHAR(20) not null,
          userName VARCHAR(30) not null,
          email VARCHAR(40) not null,
          bio VARCHAR(250),
          stack VARCHAR(250),
          title VARCHAR(250) not null,
          quote TEXT,
          phoneNumber VARCHAR(250),
          profileImage VARCHAR(255),
          profileImageId VARCHAR(255),
          password VARCHAR(255) not null,
          createdAt timestamp not null,
          updatedAt timestamp
        )`);

      await client.query(`DROP TABLE IF EXISTS category CASCADE`);
      await client.query(`
          CREATE TABLE IF NOT EXISTS category(
            categoryId SERIAL PRIMARY KEY,
            category VARCHAR(100) not null
          )`);


      await client.query(`DROP TABLE IF EXISTS questions CASCADE`);
      await client.query(`
          CREATE TABLE IF NOT EXISTS questions(
            questionId uuid PRIMARY KEY,
            authorId integer References users(userId),
            authorName VARCHAR(50),
            subject VARCHAR(400) not null,
            description text not null,
            catId integer References category(categoryId),
            category VARCHAR(100) not null,
            tags VARCHAR(250),
            createdAt timestamp not null
          )`);

      await client.query(`DROP TABLE IF EXISTS answers CASCADE`);
      await client.query(`
          CREATE TABLE IF NOT EXISTS answers(
            answerId serial PRIMARY KEY,
            questionId UUID references questions(questionId),
            authorId integer References users(userId),
            answerAuthor  VARCHAR(100),
            description text not null,
            upvotes integer,
            downvotes integer,
            preferred char(1),
            createdAt timestamp not null,
            updatedAt timestamp
          )`);

      await client.query(`DROP TABLE IF EXISTS comments`);
      await client.query(`
          CREATE TABLE IF NOT EXISTS comments(
            commentId UUID PRIMARY KEY,
            answerId integer references answers(answerId),
            authorId integer References users(userId),
            commentAuthor VARCHAR(100),
            description text not null,
            createdAt timestamp not null,
            updatedAt timestamp
          )`);


      client.end();

      console.log("Tables successfully created!");
    } catch (error) {
      console.log(error);
    }
  }
)();