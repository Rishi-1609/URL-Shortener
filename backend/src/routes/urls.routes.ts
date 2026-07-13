import {Router} from "express";
import { urlsController } from "../controllers/urls.controller.js";

const urlsRouter = Router();
urlsRouter.post("/", urlsController);
