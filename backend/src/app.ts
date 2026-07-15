import express from "express";
import healthRouter from "./routes/health.routes.js";
import { urlsRouter } from "./routes/urls.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/health");
})

app.use("/api/v1/urls", urlsRouter);

app.use("/health", healthRouter);

export default app;
