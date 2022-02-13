// Include packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project",
  },
  {
    type: "input",
    name: "technologies",
    message: "What technologies were used in building this project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information for your project",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines for your project",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter the test instructions for your project",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: ["MIT", "Apache", "Mozilla", "Eclipse", "Unlicensed"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github profile link",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
];

// function to prompt the questions
const promptQuestions = () => {
  return inquirer.prompt(questions);
};

// function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", fileName, (data) => {});
    resolve({
      ok: true,
      message: "File created successfully",
    });
    reject({
      ok: false,
      message: "Error with write to file function",
    });
  });
}

// function to initialize app
function init() {
  promptQuestions()
    .then((data) => {
      return generateMarkdown.generateMarkdown(data);
    })
    .then((generateContent) => {
      return writeToFile(generateContent);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
