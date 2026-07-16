import env from "../../../../config/env.js";

export function generateShortUrl(code : string) {
    const shortUrl = `${env.BASE_URL}/${code}`;
    return shortUrl;
}