import { NextFunction, Request, Response } from "express";
import z from "zod";


const createParser = <T extends z.ZodType>(schema : T) => {
    return (input : unknown) : z.ZodSafeParseResult<z.infer<T>> => {
        return schema.safeParse(input);
    }
}


export function validate <T extends z.ZodType>(schema : T) {
    const parser = createParser(schema);
    return (req : Request, res : Response, next : NextFunction) => {
        const parsed = parser(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed);
        }
        req.body = parsed.data;
        next();
    };
}