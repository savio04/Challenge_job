import { Request, Response } from "express";
import { UpdateStatusActivityService } from "../../services/Activity/UpdateStatusActivityService";

export async function UpdateStatusActivityController(
  request: Request,
  response: Response
) {
  const { id } = request.query;
  const { status } = request.body;

  await UpdateStatusActivityService(status, id as string);

  return response.status(204).send();
}
