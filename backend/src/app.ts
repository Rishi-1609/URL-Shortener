import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.redirect("/health");
})

app.get("/health", (req, res) => {
    res.status(200).json({message : "Server running properly"});
});

export default app;
