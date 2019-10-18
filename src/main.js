const chalk = require('chalk')
const inquirer = require('inquirer')

const questions = [
    // @see https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples
    {
        type: 'input',
        name: 'firstName',
        message: "What's your first name",
    },
]

inquirer.prompt(questions).then(function main(answers) {
    console.log(`Hello, ${chalk.green(answers.firstName)}`)
})
