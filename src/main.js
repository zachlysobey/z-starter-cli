const chalk = require('chalk')
const inquirer = require('inquirer')
const figlet = require('figlet')

const packageJson = require('../package.json')

const questions = [
    // @see https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples
    {
        type: 'input',
        name: 'name',
        message: 'Who should I say hello to?',
        default: 'World!',
    },
]

;(async function main() {
    try {
        printAsciiArt(packageJson.name)
        const answers = await inquirer.prompt(questions)
        console.log(`Hello, ${chalk.green(answers.name)}`)
    } catch (e) {
        console.error('Fatal Error', e)
        process.exit(1)
    }
})()

function printAsciiArt(content) {
    console.log(chalk.cyan(figlet.textSync(content)))
}
