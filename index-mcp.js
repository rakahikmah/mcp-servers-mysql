// Forcibly setting environment variables before the server starts
// The mysql MCP server reads from individual environment variables, not MYSQL_URL
process.env.MYSQL_HOST = "127.0.0.1";
process.env.MYSQL_PORT = "3306";
process.env.MYSQL_USER = "mcp_read";
process.env.MYSQL_PASS = "passwordku";
process.env.MYSQL_DB = "pos_hw";

// Calling the installed MCP package
// We point directly to its main file
require("./node_modules/mcp-server-mysql/index.js");
