// TODO: Include packages needed for this application
const inquirer = require('Inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of the project?'
    },
    {
        type: 'list',
        choices: ['Apache 2.0', 'Eclipse 1.0', 'MIT', 'Perl', 'None'],
        name: 'License',
        message: 'Which license badge do you want to use for the project?'
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
        name: 'Tests',
        message: 'What are the instructions to test the project?'
    },
    {
        type: 'input',
        name: 'Username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
    fs.writeFile(`./generated-readme/${fileName}.md`, markdown, err => {
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
        .then(answers => {
            const markdown = generateMarkdown(answers);
            writeToFile(answers.Title, markdown);
        });
    }

// Function call to initialize app
init();
