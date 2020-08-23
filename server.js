const mysql = require('mysql2');
const express = require('express');
const app = express();
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ThorLoki11!99',
})

connection.connect(err => {
    if (err) throw err;
    console.log('Connected!');
    connectServer()
    runProgram();
})

function runProgram() {

inquirer 
    .prompt(
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role'
            ]
        },
        
    )
}

function connectServer() {
    app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            });
        };

module.exports = app;
