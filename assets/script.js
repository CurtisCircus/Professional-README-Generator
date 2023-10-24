// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
    const licenseBadges = {
        'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      };
    
      if (licenseBadges[license]) {
        return `![License Badge](${licenseBadges[license]})`;
      } else {
        return ''; // Return an empty string if the license is not recognized.
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (!license) {
    return ''; // Return an empty string if no license is provided.
  }

  // Assuming you have a mapping of license names to their official URLs.
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
  };

  if (licenseLinks[license]) {
    return `[License Link](${licenseLinks[license]})`;
  } else {
    return ''; // Return an empty string if the license is not recognized.
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
      return ''; // Return an empty string if no license is provided.
    }
  
    // Create a relative link to the license file
    const licenseFilePath = 'LICENSE'; // Relative path to your license file
  
    return `This project is licensed under the [${license}](${licenseFilePath}) License.`;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);

    return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}
${licenseLink}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;