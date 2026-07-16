import { dbFind, dbInsert } from "../api/v1/urls/urls.repository.js";

const exist = await dbFind("ABCDEFGH");
console.log(exist);

// const result = await dbInsert("01HVY9B41VJ3E4PK5E1J5A0R0Z", "https://google.com", "ABCDEFGH");

// console.log(result);
// console.log(await dbFind("ABCDEFGH"));