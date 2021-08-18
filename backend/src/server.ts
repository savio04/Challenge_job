import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import AppError from "./errors/AppError";
import Routes from "./routes/routes";
import cors from "cors";
const app = express();

app.use(cors({
  origin: "https://challenge-e6sxs7mow-savio04.vercel.app"
}));
app.use(express.json());
app.use(Routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        error: `${err.message}`,
      });
    }

    return response.status(500).json({
      error: `${err.message}`,
    });
  }
);

app.listen(1212, () => {
  console.log("Api iniciada!");
  console.log("url: http://localhost:1212/");
});
