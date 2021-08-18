import { Request, Response } from "express";
import { ListActivitiesService } from "../../services/Activity/ListActivitiesService";

export async function ListActivitiesController(
  request: Request,
  response: Response
) {
  const { status } = request.query;
  const acitivities = await ListActivitiesService(status as string);

  return response.json(acitivities);
}
