// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage of this project?'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'Test Instructions',
        message: 'What are the instructions to test the project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
if(err) {
    console.log(err);
    return;
}
    console.log('README.md has been generated');

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile(answers);
        });
}

// Function call to initialize app
init();
