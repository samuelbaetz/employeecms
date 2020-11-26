const mysql = require('mysql');
var figlet = require('figlet');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rootroot1?',
    database: 'employcms',
  });
  connection.connect((err) => {
    if (err) throw err;
    start()
  });


  const insertdept = [
    {
      type: 'input',
      message: 'What is the name of the Department?',
      name: 'insertdept'
    }
  ]

  const insertRoles = [
    {
      type: 'input',
      message: 'What is the title of the role?',
      name: 'inserttitle'
    },
    {
        type: 'input',
        message: 'What is the salary of this role?',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'Provide the department ID',
        name: 'departid'
    }
  ]

function start () {

   
 
    figlet('EmployCMS PLUS', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        questions()
    });


  }

  function questions() {
   
    inquirer.prompt({
        name: 'options',
        type: 'list',
        message: 'Welcome to Employee CMS Plus',
        choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments','View Roles','View Employees','Update Employee Roles','Update Employee Managers','View Employees by Manager','Delete Managers','Delete Roles','Delete Employees','View Total Payroll', 'EXIT'],
      })
      .then((answer) => {
        if (answer.options === 'Add Department') {
          addDepartment()
        } 
        if (answer.options === 'Add Role') {
        addRoles()
        } 
        if (answer.options === 'Add Employee'){
          addEmployee()
        }
        if (answer.options === 'View Departments') {
          viewDepartments()
        }
        if (answer.options === 'View Roles') {
            viewRoles()
          }
          if (answer.options === 'View Employees') {
            viewEmployees()
          }
          if (answer.options === 'Update Employee Roles') {
           updateRoles()
          }
          if (answer.options === 'Update Employee Managers') {
            updateManagers()
          }
          if (answer.options === 'View Employees by Manager') {
            viewByManagers()
          }
          if (answer.options === 'Delete Managers') {
            deleteManagers()
          }
          if (answer.options === 'Delete Roles') {
           deleteRoles()
          }
          if (answer.options === 'Delete Employees') {
           deleteEmployees()
          }
          if (answer.options === 'View Total Payroll') {
          viewPayroll()
          }
        

      if (answer.options === 'EXIT') {
            connection.end()
      }
    
  })
  }
  function addDepartment(){
    inquirer.prompt(insertdept)
    .then((answer) => {
      connection.query(`INSERT INTO department (name) VALUES ('${answer.insertdept}') `, function(err, res) {
        if (err) throw err;
       
        console.log('Department Added...')
        
      });
      connection.query(`SELECT * FROM department; `, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        questions()
      });
    })
  }

  function addRoles(){
  
    inquirer.prompt(insertRoles)
    .then((answer) => {
        
      connection.query(`INSERT INTO roles (title,salary,department_id) VALUES ('${answer.inserttitle}', '${answer.salary}', '${answer.departid}') `, function(err, res) {
        if (err) throw err;
       
        console.log('Role Added...')
        
      });
      connection.query(`SELECT * FROM roles; `, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        questions()
      });
     
    })
  }

  function addEmployee(){
    console.log('beans')
  }

  function viewDepartments(){
    connection.query(`SELECT * FROM department; `, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        
      });
      start()
  }

  function viewRoles(){
    connection.query(`SELECT * FROM roles; `, function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        questions()
      });
  }

  function updateManagers(){
    console.log('beans')
  }

  function updateRoles(){
    console.log('beans')
  }

  function viewByManagers(){
    console.log('beans')
  }

  function deleteManagers(){
    console.log('beans')
  }
  function deleteRoles(){
    console.log('beans')
  }
  function deleteEmployees(){
    console.log('beans')
  }
  function viewPayroll(){
    console.log('beans')
  }
  function viewEmployees(){
      console.log("egg")
  }

