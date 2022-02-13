// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    license,
    description,
    installation,
    usage,
    contribution,
    test,
    github,
    email,
  } = data;

  return `# ${title}
  
  ![License](https://img.shields.io/badge/License-${license}-blue)

 ## Description  
 ${description}
 
 ## Built With

 ${technologies}
 
  |  Table of Contents |
  | ----------- |
  | [I Installation.](#installation) |
  | [II Usage.](#usage)|
  | [III License.](#licenses)|
  | [IV Contributing.](#contributing)|
  | [V Tests.](#tests)|
  | [VI Questions.](#questions)|


  ## Installation
  
  ${installation}

  
  ## Usage

  ${usage}

  
  ## Contributions

  ${contribution}


  ## Tests
  
  ${test}

  
  ## License
  
  This project is using the ${license} license.


  ## Questions
  If you have any questions about this repo please feel free to reach out to me through [GitHub](${github}) or [Email](mailto:${email})

`;
}

// export the function to be used in index.js
module.exports = {
  generateMarkdown,
};
