import { RE2 } from "re2";
import {z} from "zod";

const urlRegex = new RE2(/^(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/);

export const createUrlSchema = z.object({
    originalUrl : z.string().trim().refine((val) => urlRegex.test(val), {message : "Invalid Url format"}),
})

export type CreateUrlRequest = z.infer<typeof createUrlSchema>;


export const getShortCodeParamsSchema = z.object({
    shortCode : z.string().trim().min(1),
});

export type GetShortCodeRequest = z.infer<typeof getShortCodeParamsSchema>;