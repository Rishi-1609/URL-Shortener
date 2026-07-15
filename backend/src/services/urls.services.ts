import { dbFind, dbInsert } from "../repository/urls.repository.js";
import { generateId } from "../utils/generateId.js";
import { generateShortCode } from "../utils/generateShortCode.js";
import { generateShortUrl } from "../utils/generateShortUrl.js";
import { CreateUrlRequest } from "../validators/urls.validator.js";


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