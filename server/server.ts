import * as http from 'http'
import Api from './api/api'

const models = require('./models')
const config = require('./config/env/config')()
const chalk = require('chalk')
const server = http.createServer(Api)

models.sequelize.sync().then( () => {
    server.listen(config.serverPort)
    server.on('listening', () => {
        console.log(`System run MODE: ${chalk.green(process.env.NODE_ENV)}`)
        console.log(`Debug is: ${process.env.NODE_DEBUG ? chalk.green('ON') : chalk.red('OFF')}`)
        console.log(`App is listening in port: ${chalk.yellow(config.serverPort)}`)
    })
    server.on('error', (error: NodeJS.ErrnoException) => {
        console.log(chalk.bold.red(`Ocorreu um error: ${error}`))
    })
})
