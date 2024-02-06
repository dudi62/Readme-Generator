const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile); // Convert fs.writeFile into a promise-based function


// Function to prompt user with questions about their project
const questions = () => {
  return inquirer.prompt([
    // Each object in this array is a question for the user
    {
      type: "input",
      message: "Could you please provide the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Could you please provide a short description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "Could you please provide the installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Could you please provide usage information for your project?",
      name: "usage",
    },
    {
      type: "list",
      message: "Could you please choose a license for your project?",
      choices: ["MIT", "ISC", "GPL", "0BSD"],
      name: "license",
    },
    {
      type: "input",
      message: "Could you please provide contribution guidelines?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Could you please provide testing instructions?",
      name: "testing",
    },
    {
      type: "input",
      message: "Could you please provide your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "Could you please provide your email address?",
      name: "email",
    },
  ]);
};
// Async function to fetch answers and after create a readme file with generated data
async function init() {
  try {
    const data = await questions();
    const markdown = generateMarkdown(data);
    await writeToFile("README_generated.md", markdown);
  } catch (err) {
    console.log(err);
  }
}

// Run async function
init();