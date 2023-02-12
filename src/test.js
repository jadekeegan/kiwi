const { Client } = require("pg");

(async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    application_name: "$ docs_quickstart_node"
  });

  const statements = [
    // Clear any existing data
    "DROP TABLE IF EXISTS profiles",
    // CREATE the messages table
    "CREATE TABLE IF NOT EXISTS profiles (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), email STRING, password STRING)",
    // INSERT a row into the messages table
    //"INSERT INTO profiles (email, password) VALUES ('test', 'test123') RETURNING id",
  ];

  try {
    // Connect to CockroachDB
    await client.connect();
    for (let n = 0; n < statements.length; n++) {
      let result = await client.query(statements[n]);
      if (result.rows[0]) { console.log(result.rows[0]); }
    }
    await client.end();
  } catch (err) {
    console.log(`error connecting: ${err}`);
  }

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));