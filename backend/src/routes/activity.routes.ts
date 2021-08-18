import { Router } from "express";
import { CreateActivityController } from "../Controllers/Activity/CreateActivityController";
import { DeleteActivityController } from "../Controllers/Activity/DeleteAcitvityConroller";
import { ListActivitiesController } from "../Controllers/Activity/ListActivitiesController";
import { UpdateStatusActivityController } from "../Controllers/Activity/UpdateStatusActivityController";
export const ActivityRoute = Router();

ActivityRoute.post("/", CreateActivityController);
ActivityRoute.get("/", ListActivitiesController);
ActivityRoute.patch("/status", UpdateStatusActivityController);
ActivityRoute.delete("/", DeleteActivityController);
