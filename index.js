// import required packages 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// user prompt for questions 
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your project's name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GNU GPL v3', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What should the user know about making contributions to the repository?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide instructions for testing.'
        }
    ]);
};

// function that writes README file
function writeToFile(data) {
    return fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
        if (err) throw new Eror(err);

        console.log("README successfully generated!");
    })
};

// triggers questions and then sends the data to the appropriate place
questions().then(readmeData => {
    console.log("Generating README...");
    return writeToFile(readmeData);
}).catch(err => {
    console.log(err);
});
