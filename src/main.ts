#!/usr/bin/env node

import process from 'process'
import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'
import simpleGit from 'simple-git'

interface Answers {
    name: string
}

const packageJson = require('../package.json')

const git = simpleGit(process.cwd())

const buildQuestions = (starterBranches: string[]) => [
    // @see https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples
    {
        type: 'list',
        name: 'z-starter-branch',
        message: 'What type of project do you need?',
        choices: starterBranches
    }
]


;(async function main() {
    try {
        printAsciiArt(packageJson.name)
        await ensureStarterAsRemote()
        const starterBranches = await getStarterBranches()
        const questions = buildQuestions(starterBranches)
        const answers: Answers = await inquirer.prompt(questions)
        await applyStarterBranch(answers['z-starter-branch'])
    } catch (e) {
        console.error('Fatal Error', e)
        process.exit(1)
    }
})()

function printAsciiArt(content: string) {
    console.log(chalk.cyan(figlet.textSync(content)))
    console.log(
        '                                    ',
        chalk.green(`v${packageJson.version}`),
        '\n',
    )
}


async function ensureStarterAsRemote () {
    console.log(chalk.gray('ensuring z-starter is loaded as a remote...'))
    const remotes = await getRemotes()
    const hasStarter = remotes.some(r => r.name === 'starter')
    if (!hasStarter) {
        await addStarterAsRemoteGitRepo()
    }
    await fetchStarter()
    return
}

async function applyStarterBranch (branchName) {
    console.log(
        chalk.cyan('creating'),
        chalk.green(branchName),
        chalk.cyan('project...')
    )
    return new Promise((resolve, reject) => {
        git.raw(['reset', '--hard', `starter/${branchName}`], (err: Error, data: any) => err
            ? reject(err)
            : resolve(data)
        )
    })
}

function fetchStarter (): Promise<void> {
    console.log(chalk.gray('fetching z-starter to ensure branches are up to date...'))
    return new Promise((resolve, reject) => {
        git.raw(['fetch', `starter`], (err: Error, _: any) => err
            ? reject(err)
            : resolve()
        )
    })
}

function getRemotes (): Promise<Array<{ name: string }>> {
    console.log(chalk.gray('getting remotes...'))
    return new Promise((resolve, reject) => {
        git.getRemotes(
            (err: Error, data: any) => err
                ? reject(err)
                : resolve(data)
        )
    }) 
}

async function getStarterBranches () {
    const branches = await getBranches()
    return Object.values(branches)
        .filter(branch => branch.name.indexOf('remotes/starter/') === 0)
        .map(branch => branch.name.substr('remotes/starter/'.length))
        .filter(branch => branch != 'master')
}

function getBranches (): Promise<{ [name: string]: { name: string }}> {
    console.log(chalk.gray('getting branches...'))
    return new Promise((resolve, reject) => {
        git.branch((err: Error, data: any) => err
        ? reject(err)
        : resolve(data.branches))
    })
}


function addStarterAsRemoteGitRepo () {
    console.log(chalk.gray('adding z-starter as a remote repository...'))
    return new Promise((resolve, reject) => {
        git.addRemote(
            'starter',
            'git@github.com:zachlysobey/z-starter.git',
            (err: Error, data: any) => err
                ? reject(err)
                : resolve(data)
        )
    }) 
}