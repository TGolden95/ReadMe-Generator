// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
  },
  {
    type: "input",
    message:
      "What is the project about? Give a detailed despcription of your project",
    name: "Description",
  },
  {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
  },
  {
    type: "input",
    message:
      "What does the user need to install in order to run the application?",
    name: "Installation",
  },
  {
    type: "input",
    message: "How is the app used?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What liscence is being used?",
    name: "License",
  },
  {
    type: "input",
    message: "Who contributed to the project?",
    name: "Contributions",
  },
  {
    type: "input",
    message: "What commands are needed to test the application?",
    name: "Tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
  },
  {
    type: "input",
    message: "Contact info for inquiries?",
    name: "Questions",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//   //   return fs.writFileSync(filename, data, function (err) {
//   //     console.log(fileName);
//   //     console.log(data);
//   //     if (err) {
//   //       return console.log(err);
//   //     } else {
//   //       console.log("success");
//   //     }
//   //   });
// }

// // TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((responses) => {
//     console.log("generateReadme");
//     console.log(responses);
//     writeToFile("READme.md", generateMarkdown({ ...responses }));
//   });
//   //   inquirer.prompt(questions).then(function (data) {
//   //     writeToFile("README.md", generatorMarkdown(data));
//   //     console.llog(data);
//   //   });
// }

// // Function call to initialize app
// init();

// Imported required packages

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("generateReadme");
    console.log(responses);
    writeToFile("READme.md", generateMarkdown({ ...responses }));
  });
}

init();
