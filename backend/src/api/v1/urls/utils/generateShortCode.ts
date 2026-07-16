import { generateHashedString } from "./generateHashedString.js";

export function generateShortCode(url : string, salt : number = 0) {
    const val = url + ":" + salt;
    const hash = generateHashedString(val);
    const base62Val = toBase62(hash).substring(0, 8);   
    return base62Val;
}

export function toBase62(hash : bigint) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    let num = hash;
    while (num > 0n) {
        result = chars[Number(num % 62n)] + result;
        num /= 62n;
    }
    return result;
}