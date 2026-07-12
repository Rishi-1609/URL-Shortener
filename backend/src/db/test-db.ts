import { Client } from "pg";
import env from "../config/env.js";

const client = new Client({
  connectionString: env.DATABASE_URL,
});

try {
  await client.connect();
  console.log("Connected!");

  const result = await client.query(`
  SELECT table_name
  FROM information_schema.tables
  WHERE table_schema='public';
  `);
  
  console.log(result.rows);

  await client.end();
} catch (err) {
  console.error(err);
}