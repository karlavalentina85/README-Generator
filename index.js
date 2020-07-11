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
        message: "What is the title of your project?",
        name: "title",
        default: "Enter project title here."
        },
        {
        type: "input",
        message: "Describe your project.",
        name: "description",
        default: "Enter project description here."
        },
        {
        type: "input",
        message: "How do users install your project?",
        name: "installation",
        default: "Enter installation instructions here."
        },
        {
        type: "input",
        message: "What are the usage instructions for your project?",
        name: "usage",
        default: "Enter usage instructions here."
        },
        {
        type: "input",
        message: "What are the guidelines for contributing to your project?",
        name: "contributing",
        default: "Enter contribution guidelines here."
        },
        {
        type: "input",
        message: "How should tests be run on your project?",
        name: "testing",
        default: "Enter testing instructions here."
        },
        {
        type: "list",
        message: "What type of license is this project covered under?",
        choices: ["MIT", "GPL v3", "Mozilla", "Unilicense", "WTFPL"],
        name: "license",
        default: "MIT"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "questions",
        default: "ENTER EMAIL ADDRESS HERE"
        },
];

