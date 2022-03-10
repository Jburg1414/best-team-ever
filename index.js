// necessary packages for the application
const inquire = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createTeamProfile = require('./src/html-template.js');
let employees = [];

// list of questions for the team builder
const questions = () => {
    return inquire.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name? (Required)',
            validate: (managerName) => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter your name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your ID? (Required)',
            validate: (managerID) => {
                if (managerID) {
                    return true;
                } else {
                    console.log("Please enter your ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email address? (Required)',
            validate: (managerEmail) => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter your email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: (officeNumber) => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your office number!")
                    return false;
                }
            }
        }

    ]) .then ((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);

        employees.push(manager);
        addEmployees();
    })
}; 

// function to ask about adding additional teammates
const addEmployees = () => {
    return inquire.prompt([
        {
            type: 'list',
            name: 'additionalEmployee',
            message: 'Do you want to add an additional employee?',
            choices: ["Engineer", "Intern", "Build My Team Profile"],
        }
    ]) .then ((answers) => {
        if (answers.additionalEmployee == "Engineer"){
            createEngineer();
        } else if (answers.additionalEmployee == "Intern"){
            createIntern();
        } else if (answers.additionalEmployee == "Build My Team Profile"){
            buildTeam();
        }
    })
};

// function to create an engineer
const createEngineer = () => {
    return inquire.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer name? (Required)',
            validate: (engineerName) => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter the engineer name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineer ID? (Required)',
            validate: (engineerID) => {
                if (engineerID) {
                    return true;
                } else {
                    console.log("Please enter the engineer ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer email address? (Required)',
            validate: (engineerEmail) => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log("Please enter the engineer email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer Github Username? (Required)',
            validate: (engineerGithub) => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer Github username!")
                    return false;
                }
            }
        }

    ]) .then ((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);

        employees.push(engineer);
        addEmployees();
    })
};

// function to create an intern
const createIntern = () => {
    return inquire.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the Intern name? (Required)',
            validate: (internName) => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the intern name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the intern ID? (Required)',
            validate: (internID) => {
                if (internID) {
                    return true;
                } else {
                    console.log("Please enter the intern ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern email address? (Required)',
            validate: (internEmail) => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the intern email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern attend? (Required)',
            validate: (internSchool) => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter the school the intern!")
                    return false;
                }
            }
        }

    ]) .then ((answers) => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

        employees.push(intern);
        addEmployees();
    })
};

function buildTeam () {
    let data = createTeamProfile(employees);
      writeToFile("./dist/index.html", data);
  }

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Success!")
    });
};

function init() {
    questions()
};

init();