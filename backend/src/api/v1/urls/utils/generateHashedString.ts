import { createHash } from "node:crypto";

export function generateHashedString(str : string) {
    const buffer = createHash('sha256').update(str).digest();
    const hash = BigInt('0x' + buffer.toString('hex'));
    return hash;
}