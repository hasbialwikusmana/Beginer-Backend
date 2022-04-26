const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "hasbi123",
  host: "localhost",
  port: 5432,
  database: "web2",
});

module.exports = pool;
