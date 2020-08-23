const inquirer = require('inquirer');
const readDepartments = require('../routes/department');
const express = require('express');
const router = express.Router();

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

            } else if (answer.action === 'View all Employees') {

            }
        
        });
    };



module.exports = { runProgram, router };

