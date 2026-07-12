import {drizzle} from "drizzle-orm/node-postgres";
import {migrate} from "drizzle-orm/node-postgres/migrator";
import {Pool, Client} from "pg";
import env from "./src/config/env";

const client = new Client({
    connectionString: env.DATABASE_URL,
});

await client.connect();

const db = drizzle(client);


try {
    console.log("Applying migrations");
    await migrate(db, {migrationsFolder : "./src/db/migrations"});
    console.log("Migrations applied successfully");
} catch (error) {
    console.error(error);
} finally {
    await client.end();
}