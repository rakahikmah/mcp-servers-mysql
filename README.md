# MySQL MCP Server Wrapper

A lightweight, configurable wrapper for the Model Context Protocol (MCP) MySQL server. This project allows AI assistants and MCP clients to securely connect to and interact with your MySQL database. It is designed to be a starting point for exposing your local or remote database to MCP-compliant tools.

## 🌟 Features

*   **Easy Setup**: Wraps the standard `mcp-server-mysql` package.
*   **Connection Testing**: Includes a built-in diagnostic script (`test-connection.js`) to verify database connectivity before you start.
*   **Flexible Configuration**: Choose between individual environment variables or a connection string to configure your database access.
*   **Agent-Ready**: Ready to be used by AI agents for reading schema and querying data.

## 📋 Prerequisites

*   [Node.js](https://nodejs.org/) (Version 14 or higher is recommended)
*   A MySQL Database

## 🚀 Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd <project-folder>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## ⚙️ Configuration

There are two ways to configure your database connection. You only need to choose one.

### Option 1: Edit `index-mcp.js` (Recommended for clarity)
Open `index-mcp.js` and update the values to match your database credentials:

```javascript
process.env.MYSQL_HOST = "127.0.0.1"; // Your database host
process.env.MYSQL_PORT = "3306";      // Your database port
process.env.MYSQL_USER = "your_user"; // Your database username
process.env.MYSQL_PASS = "your_pass"; // Your database password
process.env.MYSQL_DB = "your_db_name"; // Your database name
```

### Option 2: Edit `start-mcp.js` (Compact)
Open `start-mcp.js` and update the connection URL:

```javascript
// Format: mysql://user:password@host:port/database_name
process.env.DATABASE_URL = "mysql://your_user:your_pass@127.0.0.1:3306/your_db_name";
```

> **🔒 Security Tip**: It is highly recommended to create a specific database user with **READ-ONLY** (SELECT) permissions for this purpose. This prevents the MCP agent from accidentally modifying or deleting your data.

## 🛠️ Usage

### 1. Verify Connection
Before running the server, check if your credentials are correct by running the test script:

```bash
node test-connection.js
```
*   If successful, you will see a `✅ SUCCESS!` message.
*   If it fails, the script will output detailed error messages to help you debug.

### 2. Start the Server
Run the method you configured in the previous step.

**If you configured Option 1:**
```bash
node index-mcp.js
```

**If you configured Option 2:**
```bash
node start-mcp.js
```

## 📂 Project Structure

*   `index-mcp.js`: Main server entry point using individual configuration variables.
*   `start-mcp.js`: Alternative entry point using a single connection URL.
*   `test-connection.js`: Utility script to test the database connection independently of the MCP server.
*   `package.json`: Project dependencies.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests if you have improvements or bug fixes.
