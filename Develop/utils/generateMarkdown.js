
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

  function renderLicenseBadge(license) {
    if (license==="AFL 3.0"){
      return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
    } else if (license=== "Apache 2.0"){
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
    } else if (license==="Artistic 2.0"){
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }
    else{
      return ""
    }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="N/A"){
    return ""
  }
    else {
      return '* [License](#license)'
    }
  }

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="N/A"){
    return ""
  }
    else {
      return `## License 
The license used by this application is ${license}`

    }
  }
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}



  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions?](#questions)
  ${renderLicenseLink(data.license)}


  ## Description
  ${data.Description}
  
  ## Installation 
  ${data.installation}

  ## Contributing
  ${data.Contributing}

  ## Usage
  ${data.Usage}

  ## Tests 
  ${data.Tests}

  ## Questions
  ${data.QA}
  ${data.emmailQA}

  ${renderLicenseSection(data.license)}


`}
  module.exports = generateMarkdown