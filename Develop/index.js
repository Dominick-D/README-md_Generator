const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'Apache', 'GPL', 'ISC', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines for your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the testing instructions for your project?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:'
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file has been generated successfully.');
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('GeneratedREADME.md', markdownContent);
  });
}
init();
