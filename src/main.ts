import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'

interface Answers {
    name: string
}

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
        const answers: Answers = await inquirer.prompt(questions)
        console.log(`Hello, ${chalk.green(answers.name)}`)
    } catch (e) {
        console.error('Fatal Error', e)
        process.exit(1)
    }
})()

function printAsciiArt(content: string) {
    console.log(chalk.cyan(figlet.textSync(content)))
}
