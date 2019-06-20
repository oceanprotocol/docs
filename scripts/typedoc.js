#!/usr/bin/env node

/* eslint-disable no-console, security/detect-child-process, security/detect-non-literal-fs-filename */

const fs = require('fs')
const typedoc = require('typedoc')
const typescript = require('typescript')
const ora = require('ora')
const squidJsPackage = require('../external/squid-js/package.json')
const { exec } = require('child_process')

const { description, version } = squidJsPackage

// Setup our paths, relative to project root
const outPath = './data/squid-js.json'
const files = ['./external/squid-js/src/squid.ts']

// specifically point to tsconfig, otherwise TypeDoc fails
const config = typescript.findConfigFile(
    './external/squid-js',
    typescript.sys.fileExists
)

// npm install for squid-js
const spinnerNpm = ora('Installing submodule dependencies...').start()
const install = exec(
    'cd ./external/squid-js && npm i && git checkout package-lock.json'
)

install.on('exit', () => {
    spinnerNpm.succeed('Installed submodule dependencies.')
    generateJson()
})

const generateJson = () => {
    const spinnerTypedoc = ora('Generating TypeDoc json...').start()

    // Setup our TypeDoc app
    const app = new typedoc.Application({
        tsconfig: config
    })

    const src = app.expandInputFiles(files)
    const project = app.convert(src)

    // Generate the JSON file
    app.generateJson(project, outPath)

    // Parse and modify json output
    const jsonOrig = JSON.parse(fs.readFileSync(outPath, 'utf8'))

    const jsonFinal = {
        info: {
            title: 'Squid-js',
            description,
            version,
            sourceUrl: 'https://github.com/oceanprotocol/squid-js/blob/master/'
        },
        ...jsonOrig
    }

    fs.writeFileSync(outPath, JSON.stringify(jsonFinal, null, 4))

    spinnerTypedoc.succeed('Generated TypeDoc json.')
}
