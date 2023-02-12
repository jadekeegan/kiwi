const express = require('express');
const cors = require('cors');
const { Client } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/login", async (req, res) => {
    const user = req.body;
    email = user.email;

    let result = await loginUser(email);
    res.send({express: result});
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
            res.send({express : result.rows[0]})
            await client.end();
        } catch (err) {
            console.log(`error connecting: ${err}`);
        }
    
        })().catch((err) => console.log(err.stack));
}

registerUser = async (email, password) => {
    (async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        application_name: "$ kiwi"
    });

    try {
        await client.connect();
        let result = await client.query("INSERT INTO profiles (email, password) VALUES ('" + email + "', '" + password + "')");
        await client.end();
    } catch (err) {
        console.log(`error connecting: ${err}`);
    }

    })().catch((err) => console.log(err.stack));
}

app.post("/register", async (req, res) => {
    const user = req.body;
    email = user.email;
    password = user.password;

    await registerUser(email, password);
    res.send({express: "success!!!"});
});

app.listen(port, console.log(`Server is starting at ${port}`));