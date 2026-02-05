const mysql = require('mysql2');

// Configuration based on your data
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'mcp_read',
  password: 'passwordku',
  database: 'pos_hw',
  port: 3306
});

console.log("Attempting to connect to MySQL...");

connection.connect((err) => {
  if (err) {
    console.error("❌ CONNECTION FAILED!");
    console.error("Error Message:", err.message);
    console.error("Error Code:", err.code);
    process.exit(1);
  }

  console.log("✅ SUCCESS! Node.js can read your database.");
  
  // Try to fetch simple data
  connection.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      console.error("Failed to execute query:", err.message);
    } else {
      console.log("Test query result (1+1):", results[0].result);
    }
    connection.end();
    process.exit(0);
  });
});
