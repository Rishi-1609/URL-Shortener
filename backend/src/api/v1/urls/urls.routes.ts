import {Router} from "express";
import { urlsController } from "./urls.controller.js";
import { validateBody, validatePath } from "../../../middlewares/validate.js";
import { createUrlSchema, getShortCodeParamsSchema } from "./urls.validator.js";

export const urlsRouter = Router();

urlsRouter.post("/",  validateBody(createUrlSchema), urlsController.CreateShortUrl);
