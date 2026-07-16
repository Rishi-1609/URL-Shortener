import { ulid } from "ulidx";

export function generateId() {
    const id = ulid();
    return id;
}