import { Router } from "express";
import { Autheticate } from "../middlewares/Autheticate";
import { ActivityRoute } from "./activity.routes";
import { UserRoute } from "./user.routes";
const routes = Router();

routes.use("/activity", ActivityRoute);
routes.use("/user", UserRoute);

export default routes;
