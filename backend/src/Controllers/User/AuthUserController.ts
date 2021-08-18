import { Request, Response } from "express";
import { AuthUserService } from "../../services/User/AuthUserService";

export async function AuthUserController(request: Request, response: Response) {
  const { email, password } = request.body;

  const data = await AuthUserService({
    email,
    password,
  });

  return response.status(200).json(data);
}
