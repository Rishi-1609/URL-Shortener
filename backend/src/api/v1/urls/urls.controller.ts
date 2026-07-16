import { Request, Response } from "express";
import { createShortUrl, getOriginalUrl } from "./urls.services.js";
import { GetShortCodeRequest } from "./urls.validator.js";

export const urlsController = {
    CreateShortUrl : async (req : Request, res : Response) => {
        try {
            const result = await createShortUrl(req.body);
            return res.status(201).json({
                success : true,
                data : result,
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success : false,
                error : "Cannot create shorUrl",
            });
        }
    },

    GetOriginalUrl : async (req : Request<GetShortCodeRequest>, res : Response) => {
        try {
            const redirectUrl = await getOriginalUrl(req.params.shortCode);
            if (!redirectUrl) {
                return res.status(404).json({message : "Cannot Redirect. Invalid url"});
            }
            return res.status(302).redirect(redirectUrl);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success : false,
                error : "Internal Server Error"
            })
        }
    }
}