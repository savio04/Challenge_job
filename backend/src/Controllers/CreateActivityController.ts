import { Request, Response } from "express";
import { CreateActivityService } from "../services/CreateActivityService";

export async function CreateActivityController(
  request: Request,
  response: Response
) {
  const { name, description } = request.body;
  await CreateActivityService({
    name,
    description,
  });

  return response.status(201).send();
}
