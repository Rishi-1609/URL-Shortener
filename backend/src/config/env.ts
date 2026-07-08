import dotenv from "dotenv";
import {z} from "zod";
dotenv.config();

const envSchema = z.object({
    PORT : z.coerce.number().min(1).max(65535),
    NODE_ENV : z.enum(["development", "test", "production"]),
});

export const env = envSchema.parse(process.env);