// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project? (Required)',
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log('Please enter your project name.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project. (Required)',
    validate: (projectDescriptionInput) => {
      if (projectDescriptionInput) {
        return true;
      } else {
        console.log('Please enter a description for your project');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmContents',
    message: 'Would you like to include a table of contents for your README? (Recommended if you\'re README is very long)',
    default: true
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. (Required)',
    validate: (usage) => {
        if (usage) {
            return true;
        } else {
            console.log('Please provide instructions and examples for use.')
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Please provide a relative filepath for your screenshot.',
    validate: (screenshot) => {
        if (screenshot) {
            return true;
        } else {
            console.log('Please provide a relative filepath for your screenshot.')
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'altText',
    message: 'Please provide alt text that describes your screenshot.',
    validate: (altText) => {
        if (altText) {
            return true;
        } else {
            console.log('Please provide some alt text to describe your screenshot.')
        }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please list any collabotors, or third party assets that assisted with your project\'s development.'
  },
  {
    type: 'list',
    name: 'licsence',
    message: 'Select what lisence you would like to use to protect your project:',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0','The Unlicense']
  },
  {
    type: 'input',
    name: 'licenseLink',
    message: 'Please provide a link for the license you have chosen.'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
