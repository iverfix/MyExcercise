const express = require('express');
const { Client } = require('pg');


const app = express();

const connectDB = async () => {
    try {
        const client = new Client({
            user: process.env.DATABASE_USER,
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            password: process.env.DATABASE_PASSWORD,
            port: 5432
        });
        await client.connect();
        const res = await client.query('SELECT NOW()');
        console.log(res)
         await client.end();
    } catch (error){
        console.log(error)
    }
}


console.log(process.env.DATABASE_USER)
connectDB()

app.get('/', (req, res) => {

    res.send('Successful response.');
});

app.listen(3030, () => console.log('Example app is listening on port 3030.'));
