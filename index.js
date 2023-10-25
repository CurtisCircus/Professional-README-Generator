const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/script.js');

const question = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project. What motivated you to make this project? What problem(s) does it solve?',
      },
  {
    type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['MIT', 'GNU', 'Apache', 'None'],
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter instructions on how to use your project:',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing instructions:',
},
{
    type: 'input',
    name: 'test',
    message: 'Enter testing instructions:',
},
{
    type: 'input',
    name: 'questions',
    message: 'Explain how people can contact you if they have questions:',
},
];

inquirer.prompt(question).then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error('Error writing README.md:', err);
        } else {
            console.log('README.md successfully generated.');
        }
    });
});
function init() {}

init();