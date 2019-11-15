import express, { Request, Response, NextFunction, Router } from "express";
import books from "./books";
const router: Router = express.Router();

export default (startTime: number, version: string): Router => {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send(JSON.stringify({
            uptime: new Date().getTime() - startTime,
            version
        }));
        next();
    });

    router.use('/books', books);

    return router;
};