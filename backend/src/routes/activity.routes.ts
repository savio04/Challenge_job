import { Router } from "express";
import { CreateActivityController } from "../Controllers/CreateActivityController";
import { DeleteActivityController } from "../Controllers/DeleteAcitvityConroller";
import { ListActivitiesController } from "../Controllers/ListActivitiesController";
import { UpdateStatusActivityController } from "../Controllers/UpdateStatusActivityController";
export const ActivityRoute = Router();

ActivityRoute.post("/", CreateActivityController);
ActivityRoute.get("/", ListActivitiesController);
ActivityRoute.patch("/status", UpdateStatusActivityController);
ActivityRoute.delete("/", DeleteActivityController);
