module.exports = {
    app: 'Typescript Api',
    env: 'development',
    serverPort: 5200,
    salt: 'S3cr3t',
    mysql: {
        db: 'ts-api',
        dialetc: 'mysql',
        username: 'paulopanissa',
        password: 'secret',
        host: 'localhost',
        port: 3306,
        dbURL: 'mysql://paulopanissa:secret@localhost:3306/ts-api',
    },
    sqlserver: {
        db: 'dbo.SiplanGeral',
        dialetc: 'mssql',
        username: 'SIPLAN',
        password: 'redondo',
        host: '192.168.1.222',
        port: 3306,
        dbURL: 'mysql://paulopanissa:secret@localhost:3306/ts-api',
    }
}
