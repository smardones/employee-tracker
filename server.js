const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;



const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ThorLoki11!99',
    database: 'roster'
})

connection.connect(err => {
    if (err) throw err;
    console.log('Connected!');
    runProgram();
});

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
            
        ).then((answer) => {
            console.log(answer);
            if (answer.action === 'View All Departments') {
                readDepartments();
            } else if (answer.action === 'View All Roles') {
                readRoles();
            } else if (answer.action === 'View All Employees') {
                readEmployees();
            } else if (answer.action === 'Add a Department') {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'name',
                        message: 'Enter the name of the new department'
                    })
                    .then((newDepartment) => {
                        connection.query('INSERT INTO department SET ?', newDepartment, function(err, res) {
                            if (err) throw err;
                            console.log('Department has been created!');
                        })
                    })
            }
        
        });
    };


function readDepartments()  {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
};

function readRoles()  {
    connection.query('SELECT * FROM role LEFT JOIN department ON department_id = department.id', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
};

function readEmployees()  {
    connection.query('SELECT * FROM employee LEFT JOIN role ON role_id = role.id LEFT JOIN department ON department_id = department.id', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
};