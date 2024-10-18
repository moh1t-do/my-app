import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();
const DB_URL = process.env.DB_URL;

const client = new Client({
    connectionString: DB_URL,
});

client.connect();

async function creatUserTable() {
    try {
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name TEXT,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            );
        `);

    } catch (error) {
        console.log(error);

    }
}

async function insertUser() {
    try {
        const values: string[] = ['Alice', 'aa@gmail.com', '1234'];
        const insertQuery = "INSERT INTO users(name, email, password) VALUES($1, $2, $3);"
        const result = await client.query(insertQuery, values);
        console.log(result.rows);

    } catch (error) {
        console.log(error);
    }
}

async function getUsers() {
    try {
        const result = await client.query(`
            SELECT * FROM users;`);
        console.log(result.rows);
    } catch (error) {
        console.log(error);
    }
}

// creatUserTable();
insertUser();
getUsers();