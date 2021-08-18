import { Router } from "express";
import { ActivityRoute } from "./activity.routes";
const routes = Router();

routes.use("/activity", ActivityRoute);

export default routes;
