import express, { Response, Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { connect } from '../db';

interface BookParam extends ParamsDictionary {
  bookId: string;
}

const books = express.Router();

books.get('/', async (req: Request, res: Response) => {
  const connection = await connect();
  connection.query('SELECT * FROM Book LIMIT 100', (error, results) => {
    res.send(results).status(results.length > 0 ? 200 : 404);
  });
});

books.get('/:bookId', async (req: Request<BookParam>, res: Response) => {
  const bookId = parseInt(req.params.bookId, 10);
  const connection = await connect();
  connection.query(
    `SELECT * FROM Book WHERE id = ${bookId} LIMIT 1`,
    (error, results) => {
      if (results.length > 0) {
        res.send(results[0]);
      } else {
        res.status(404).send();
      }
    },
  );
});

export default books;
