const { resolve } = require('node:path')

const dir = 'apps/dashboard'
const cwd = process.cwd()

// VS Code ESLint extension sets `cwd` as project root and running the `lint`
// or base `turbo lint` command will the `cwd` to app directory. We need to
// append the app directory for VS Code ESLint extension to detect and
// properly parse the Typescript configuration (`tsconfig.node.json`)
const project_dir = cwd.endsWith(dir) ? process.cwd() : `${cwd}/${dir}`
const project = resolve(project_dir, 'tsconfig.node.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
    parserOptions: {
        project
    }
}