# Professional ReadME Generator
A node and inquirer command-line application that dynamically generates a professional ReadME from the users input.
## Built With
- JavaScript
- Node.js
- Markdown
- Inquirer
## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation Proccess
1. Clone the repository onto your local machinge using the ```git clone``` command.
2. Navigate into the root directory of the application on your terminal.
3. Run ```npm install -y``` on your command line to install necessary packages.
4. Once installed, run ```node index.js``` on your command line.
5. Answer the following prompts.
6. After the prompts have been answered, your ReadMe file will be located in the ```dist/``` folder.

## Demo
https://drive.google.com/file/d/1F45l2L2zc7sGA0ZmXazg4MkO2lRxbQzT/view
