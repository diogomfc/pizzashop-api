import postgres from "postgres";

// Connect to the database
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator' 

const connection = postgres('postgresql://docker:docker@localhost:5432/pizzashop', {max: 1});
const db = drizzle(connection);

await migrate(db, {migrationsFolder: 'drizzle'});
await connection.end();

process.exit();