import client from '../connect';
import uuidv4 from 'uuid/v4';


class dbController {

  static async postQuestion( req, res ) {
    try {
      const sql = `INSERT INTO questions(questionId,
        authorId,authorName,subject,description,catId,
        category,tags,createdAt)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`;

      const values = [
        uuidv4(),
        req.params.authorId,
        req.body.authorName,
        req.body.subject,
        req.body.description,
        req.body.catId,
        req.body.category,
        req.body.tags,
        new Date()
      ];

      await client.query(sql, values);
      const newQuestion = await client.query(`SELECT * FROM questions`);

      const question = newQuestion.rows;

      return res.status(200).json({
        question
      });

    } catch (error) {
      res.status(500).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }
  static async postUser( req, res ) {
    try {
      const sql = `INSERT INTO users(firstName,lastName,userName,email,bio,stack,
        title,quote,phoneNumber,profileImage,profileImageId, password, createdAt,
        updatedAt )
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;

      const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.userName,
        req.body.email,
        req.body.bio,
        req.body.stack,
        req.body.title,
        req.body.quote,
        req.body.phoneNumber,
        req.body.profileImage,
        req.body.profileImageId,
        req.body.password,
        new Date(),
        new Date(),
      ];

      await client.query(sql, values);
      const newUser = await client.query(`SELECT * FROM users`);

      const user = newUser.rows;

      return res.status(200).json({
        user
      });

    } catch (error) {
      res.status(500).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }

  static async postAnswer( req, res ) {
    try {
      const sql = `INSERT INTO answers(questionId,authorId,answerAuthor,description,upvotes,downvotes,preferred,
        createdAt,updatedAt)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`;

      const values = [
        req.params.questionId,
        req.body.authorId,
        req.body.answerAuthor,
        req.body.description,
        req.body.upvotes,
        req.body.downvotes,
        req.body.preffered,
        new Date(),
        new Date(),
      ];

      await client.query(sql, values);
      const newUser = await client.query(`SELECT * FROM answers`);

      const user = newUser.rows;

      return res.status(200).json({
        user
      });

    } catch (error) {
      res.status(500).json({
        status: 'FAILED',
        message: error.toString()
      });
    }
  }


};

export default dbController;