import {Router} from "express";
import { urlsController } from "../controllers/urls.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUrlSchema } from "../validators/urls.validator.js";

export const urlsRouter = Router();

urlsRouter.post("/",  validate(createUrlSchema), urlsController);
