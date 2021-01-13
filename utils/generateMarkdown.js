//function to render the licence link:
function renderLicenseLink(lisence) {
   switch(lisence) {
     case "GNU AGPLv3":
       return `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
       break;
      case "GNU GPLv3":
       return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
       break;
      case "GNU LGPLv3":
        return `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`;
       break;
      case "Mozilla Public License 2.0":
        return `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
       break;
      case "Apache License 2.0":
        return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
       break;
      case "MIT License":
        return `[MIT License](https://choosealicense.com/licenses/mit/)`;
       break;
      case "Boost Software License 1.0":
        return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
       break;
      case "The Unlicense":
        return `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`;
       break;
   }
}
//function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.projectName}**
  
  ## **Description**
  ${data.description}
  ## **Table of Contents**
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}
  #### **Screenshot**
  ![${data.altText}](${data.screenshot})

  ## **Credits**
  ${data.credits}

  ## **Tests**
  ${data.tests}

  ## **Questions**
  If you have any questions, feel free to reach out by email or GitHub: <br/>
  * [Email](mailto:${data.email})
  * [GitHub](www.github.com/${data.github})
  
  ## **License**
  Made with ❤️ by ${data.name}\  

  This software is protected under the [${data.license}](${renderLicenseLink()}).
`;
}

module.exports = generateMarkdown;
