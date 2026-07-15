import { Request, Response } from "express";
import { createShortUrl } from "../services/urls.services.js";

export const urlsController = async (req : Request, res : Response) => {
    try {
        const result = await createShortUrl(req.body);
        return res.status(201).json({
            success : true,
            data : result,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success : false,
            error : "Cannot create shorUrl",
        });
    }
}