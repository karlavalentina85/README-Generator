//brings in inquirer for prompting user and brings in fs package for dealing with writing out to files
var inquirer = require("inquirer");
const fs = require("fs");

const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

//puts questions into an array of objects that can be used within inquirer module
const questions = [
        {
        type: "input",
        message: "GitHub username?",
        name: "username"
        },
        {
        type: "input",
        message: "Project Title?",
        name: "title",
        default: "Enter your project title here."
        },
        {
        type: "input",
        message: "Project Description?",
        name: "description",
        default: "Enter your project description here."
        },
        {
        type: "input",
        message: "Project Installation Instructions?",
        name: "installation",
        default: "Enter your installation instructions here."
        },
        {
        type: "input",
        message: "Project Usage Instructions?",
        name: "usage",
        default: "Enter your usage instructions here."
        },
        {
        type: "input",
        message: "Project Contribution Guidelines?",
        name: "contributing",
        default: "Enter your project contribution guidelines here."
        },
        {
        type: "input",
        message: "Project Testing Instructions?",
        name: "testing",
        default: "Enter your testing instructions here."
        },
        {
        type: "list",
        message: "Project License?",
        choices: ["GPL v3", "MIT", "Mozilla", "Unilicense", "WTFPL"],
        name: "license",
        default: "GPL v3"
        },
        {
        type: "input",
        message: "Your Email Address?",
        name: "questions",
        default: "Enter your email address here."
        },
];

//Prompts user for answers and returns key value pairs for the answers
function promptUser() {
        return inquirer.prompt(questions)
};


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
