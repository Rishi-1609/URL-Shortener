import { eq } from "drizzle-orm";
import { db } from "../../../db/index.js";
import { urls } from "../../../db/schema/url.schema.js";

export async function dbInsert(id : string, originalUrl : string, shortCode : string) {
    const [result] = await db.insert(urls).values({
        id : id,
        originalUrl : originalUrl,
        shortCode : shortCode,
    }).returning();

    return result;
}

export async function dbFind(shortCode : string) {
    const result = await db.select().from(urls).where(eq(urls.shortCode, shortCode));
    return result.length !== 0;
}

export async function dbGetOriginalUrl(shortCode : string) {
    const result = await db.select().from(urls).where(eq(urls.shortCode, shortCode));
    if (result.length === 0) return null;
    const [data] = result;
    return data
}