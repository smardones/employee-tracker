const mysql = require('mysql2');
const express = require('express');
const app = express();
const router = express.Router();
const runProgram = require('./lib/index');
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", router);


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ThorLoki11!99',
})

createDatabase = () => {
    connection.query('SOURCE db/schema.sql', () => {
        console.log('Database generated');
    })
}

connection.connect(err => {
    if (err) throw err;
    console.log('Connected!');
    connectServer();
    createDatabase();
})

function connectServer() {
    app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            runProgram();
            });
};


module.exports = { app, connection, router };
