import { Request, Response } from "express";
import { DeleteActrivityService } from "../services/DeleteAcitvityService";

export async function DeleteActivityController(
  request: Request,
  response: Response
) {
  const { id } = request.query;
  await DeleteActrivityService(id as string);

  return response.status(204).send();
}
