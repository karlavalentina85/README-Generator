//brings in inquirer for prompting user and brings in fs package for dealing with writing out to files
var inquirer = require("inquirer");
const fs = require("fs");

//puts questions into an array of objects that can be used within inquirer module
const questions = [
      
        {
        type: "input",
        message: "What is the Project Title?",
        name: "title",
        default: "Please, enter project title."
        },
        {
        type: "input",
        message: "Describe your project.",
        name: "description",
        default: "Please, give a description for your project."
        },
        {
        type: "input",
        message: "What are the installation instructions",
        name: "installation",
        default: "Enter installation instructions."
        },
        {
        type: "input",
        message: "What are the usage instructions for your project?",
        name: "usage",
        default: "Enter usage instructions."
        },
        {
        type: "input",
        message: "Contribution guidelines?",
        name: "contributing",
        default: "Enter contribution guidelines."
        },
        {
        type: "input",
        message: "How do you test your project?",
        name: "testing",
        default: "Please add the testing instructions."
        },
        {
        type: "list",
        message: "License Type?",
        choices: ["GPL v3", "MIT", "Unilicense","Apache 2.0", "WTFPL"],
        name: "license",
        default: "MIT"
        },
        {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
        },
        {
        type: "input",
        message: "In case of additional questions; What's your E-mail address?",
        name: "questions",
        },
];

//Prompts user for answers and returns key value pairs for the answers
function promptUser() {
    return inquirer.prompt(questions)
};
//function that generates and returns the markdown to be written into readMe file
function generateMarkdown(data) {
    var licenseBadge =""
    
    if (data.license === 'GPL v3') {
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
    else if (data.license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (data.license === 'Unilicense') {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
    else if (data.license === 'Apache 2.0') {
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (data.license === 'WTFPL') {
    licenseBadge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    }    
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}

## Contributing
${data.contributing}

## Tests
${data.testing}

## Questions 
GitHub Profile: [${data.username}](http://github.com/${data.username})
You may email me at ${data.questions} with additional questions.
`
;
}
//function that controls what happens in this readMe generator
async function init() {
    try {
      const answers = await promptUser();
    
      const readMe = await generateMarkdown(answers);
    
      fs.writeFile('ReadMe.md', readMe, function(err, result) {
        if(err) console.log('error', err);
      });
    
      console.log("Successfully wrote to ReadMe.md");
    } catch(err) {
      console.log(err);
    }
    }
    
    // function call to initialize program
    init();
    