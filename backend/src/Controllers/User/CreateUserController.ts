import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

export async function CreateUserController(
  request: Request,
  response: Response
) {
  const { name, email, password } = request.body;

  await CreateUserService({
    name,
    email,
    password,
  });

  return response.status(201).send();
}
