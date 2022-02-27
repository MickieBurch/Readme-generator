// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project.(Required)',
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
        name: 'Contributing',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        
      },

      {
        type: 'input',
        name: 'Tests',
        message: 'How do you test your application?',
        
      },

      {
        type: 'list',
        name: 'license',
        message: 'If you are using a license enter it here. ',

        choices: ["N/A","AFL 3.0", "Apache 2.0","Artistic 2.0"]
        
      },

      {
        type: 'input',
        name: 'QA',
        message: 'What is your github username?',
        
      },
      
      {
        type: 'input',
        name: 'emmailQA',
        message: 'What is your email address?',
        
      },
      
    ]).then(function(answers){
      console.log(answers)
      writeToFile(answers.title,generateMarkdown(answers))
    })
  };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}



// Function call to initialize app
promptUser();
