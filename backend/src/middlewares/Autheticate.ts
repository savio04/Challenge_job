import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function Autheticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("token not exist", 401);
  }

  const [, token] = authorization.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      String(process.env.TOKEN_AUTH)
    ) as IPayload;

    request.user = {
      id: user_id,
    };
    next();
  } catch (err) {
    throw new AppError(`${err.message}`, 401);
  }
}
