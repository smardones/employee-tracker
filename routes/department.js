
const router = require('./index');
const connection = require('../server');

readDepartments = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
        console.table(results);
        connection.end();
    })
}

module.exports = readDepartments;