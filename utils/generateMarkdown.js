// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === 'APACHE 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === 'GNU GPL v3') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === 'BSD 3') {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return '';
  }
};

// function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://opensource.org/licenses/MIT";
  } else if (license === 'APACHE 2.0') {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === 'GNU GPL v3') {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === 'BSD 3') {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return '';
  }
};

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation} 
  ## Usage
  ${data.usage}
  ## License 
  ${renderLicenseSection(data.license)} 
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions, please feel free to contact me anytime! <br />
  Github: [${data.github}](https://github.com/${data.github}) <br />
  Email: [${data.email}](mailto:${data.email})

  `;
};

module.exports = generateMarkdown;
