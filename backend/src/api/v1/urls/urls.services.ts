import { dbFind, dbGetOriginalUrl, dbInsert } from "./urls.repository.js";
import { generateId } from "./utils/generateId.js";
import { generateShortCode } from "./utils/generateShortCode.js";
import { generateShortUrl } from "./utils/generateShortUrl.js";
import { CreateUrlRequest } from "./urls.validator.js";


export async function getOriginalUrl(shortCode : string) : Promise<string | null> {
    const data = await dbGetOriginalUrl(shortCode);
    if (!data) return null;
    return data.originalUrl;
}


export async function createShortUrl(data : CreateUrlRequest) {
    
    try {
        let shortCode;
        let shortUrl;
        let id;
        let salt = 0;
        while(true) {
            id = generateId();
            shortCode = generateShortCode(data.originalUrl, salt);
            shortUrl = generateShortUrl(shortCode);
            const exists = await dbFind(shortCode);
            if (!exists)  {
                break;
            }
            ++salt;
        }
        const dbOperation = await dbInsert(id, data.originalUrl, shortCode);
        const result = {
            originalUrl : data.originalUrl,
            shortCode,
            shortUrl,
        };
        return result;
    } catch (error) {
        console.error(error);
    }
}