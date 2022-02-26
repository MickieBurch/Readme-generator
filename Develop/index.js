// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'project title',
        message: 'What is your project title? (Required)',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project.(Required)',
      },
  
      
      {
        type: 'checkbox',
        name: 'contents',
        message: 'If your README is long, add a table of contents to make it easy for users to find what they need." section?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        
      },

      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        
      },

      {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        
      },

      {
        type: 'input',
        name: 'license',
        message: 'If you are using a license enter it here. ',
        
      },

      {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features list them here.',
        
      },
      
    ]);
  };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
