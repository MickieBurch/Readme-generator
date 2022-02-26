const licenseArr
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    if (license===licenseArr[0]){
      return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
    } else if (license===licenseArr[1]){
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
    } else if (license===licenseArr[2]){
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }
    else{
      return ""
    }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/AFL-3.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/Artistic-2.0)`
  }
    else {
      return ""
    }
  }

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else {
      return ""
    }

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}




  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Questions?](#questions)
  * [License](#license)

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## License 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}



  module.exports = generateMarkdown;