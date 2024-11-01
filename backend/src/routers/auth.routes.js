import { Router } from "express";
import { login, register, session } from "../controllers/controller.js";
import { validatorJwt } from "../middlewares/validatorjwt.js";
const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/session", validatorJwt, session);
export default authRouter;
