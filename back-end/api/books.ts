import { Response, Request } from "express";
import express from 'express';
import { ParamsDictionary } from "express-serve-static-core";
import booksData from './__mock__/books.json';
import Book from "./models/Book";


interface BookParam extends ParamsDictionary {
    bookId: string;
}

const books = express.Router();

books.get('/', (req: Request, res: Response) => {
    res.send(booksData);
});

books.get('/:bookId', (req: Request<BookParam>, res: Response) => {
    const book: Book = booksData.find((item: Book) => {
        return item._id == req.params.bookId
    });

    if (book !== undefined) {
        res.send(book);
    } else {
        res.sendStatus(404);
    } 
})

export default books;
