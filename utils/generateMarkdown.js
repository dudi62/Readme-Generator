// function to generate markdown for README
generateMarkdown = (data) => {
  return `[![License](https://img.shields.io/badge/License-${
    data.license
  }-blue.svg)](https://opensource.org/licenses/${data.license})
  # ${data.title}
  ## Description
  ${data.description}
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
  ${data.bash === "Yes" ? ` \`\`\`bash\n${data.installSc}\n\`\`\`` : ""}

  ## Usage
  ${data.usage}
  ${data.usageBash === "Yes" ? ` \`\`\`bash\n${data.usageSc}\n\`\`\`` : ""}  
 
  ## License
  This project is licensed under the [${
    data.license
  }](https://opensource.org/licenses/${data.license}) license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions
  Feel free to explore my other projects on my [GitHub profile](https://github.com/${
    data.github
  }/). If you have any questions, you can reach out to me via email at [${
    data.email
  }](mailto:${data.email}).
`;
};

// Export module
module.exports = generateMarkdown;