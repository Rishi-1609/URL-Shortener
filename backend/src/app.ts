import express from "express";
import healthRouter from "./api/v1/health/health.routes.js";
import { urlsRouter } from "./api/v1/urls/urls.routes.js";
import { validatePath } from "./middlewares/validate.js";
import { getShortCodeParamsSchema } from "./api/v1/urls/urls.validator.js";
import { urlsController } from "./api/v1/urls/urls.controller.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/health");
});

app.use("/health", healthRouter);

app.get("/:shortCode", validatePath(getShortCodeParamsSchema), urlsController.GetOriginalUrl)

app.use("/api/v1/urls", urlsRouter);

export default app;
