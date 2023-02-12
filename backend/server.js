const express = require('express');
const cors = require('cors');
const { Client } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/login/:email/", async (req, res) => {
    const email = req.params.email;

    //res.send(await registerUser(email, password, res));

    (async () => {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            application_name: "$ kiwi"
        });
    
        try {
            await client.connect();
            let result = await client.query("SELECT * FROM profiles WHERE email IN ('" + email + "')");
            await client.end();
            res.send(result.rows[0]);
        } catch (err) {
            console.log(`error connecting: ${err}`);
        }
    
        })().catch((err) => console.log(err.stack));
});

loginUser = async (email) => {
    (async () => {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            application_name: "$ kiwi"
        });
    
        try {
            await client.connect();
            let result = await client.query("SELECT * FROM profiles WHERE email=" + email);
            // res.send(result.rows[0])
            await client.end();
        } catch (err) {
            console.log(`error connecting: ${err}`);
        }
    
        })().catch((err) => console.log(err.stack));
}

registerUser = async (email, password, res) => {
    
}

app.post("/register", async (req, res) => {
    const user = req.body;
    email = user.email;
    password = user.password;

    //res.send(await registerUser(email, password, res));

    (async () => {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            application_name: "$ kiwi"
        });
    
        try {
            await client.connect();
            let result = await client.query("INSERT INTO profiles (email, password) VALUES ('" + email + "', '" + password + "') RETURNING id");
            await client.end();
            res.send(result.rows[0]);
        } catch (err) {
            console.log(`error connecting: ${err}`);
        }
    
        })().catch((err) => console.log(err.stack));
});

app.listen(port, console.log(`Server is starting at ${port}`));