//brings in inquirer for prompting user and brings in fs package for dealing with writing out to files
var inquirer = require("inquirer");
const fs = require("fs");

//puts questions into an array of objects that can be used within inquirer module
const questions = [
        {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
        },
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
        default: "Enter project description."
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
        default: "Enter usage instructions here."
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
        default: "Enter testing instructions."
        },
        {
        type: "list",
        message: "License Type?",
        choices: ["GPL v3", "MIT", "Unilicense","Mozilla", "WTFPL"],
        name: "license",
        default: "MIT"
        },
        {
        type: "input",
        message: "What is your e-mail address?",
        name: "questions",
        default: "Please enter your e-mail address"
        },
];

//Prompts user for answers and returns key value pairs for the answers
function promptUser() {
    return inquirer.prompt(questions)
};
