import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, ()=> {
    console.log(`Server listening at http://localhost:${env.PORT}`);
})

interface reqBody {
    originalUrl : string;
    expiresAt? : Date;
}

interface successResponse {
    success : boolean;
    data : {
        shortCode : string;
        shortUrl : string;
        expiresAt : Date;
        createdAt : Date;
    }
}

interface validationError {
    success : boolean;
    error : {
        msg : string;
        issues : {}
    }
}

interface urlDbSchema {
    id : string;
    userId : string;
    originalUrl : string;
    shortUrl : string;
    expiresAt : Date;
    createdAt : Date;
    updatedAt : Date;
    clickCount : Number;
}