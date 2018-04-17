module.exports = {
    app: 'Typescript Api - Test',
    env: 'test',
    serverPort: 7000,
    salt: 'S3cr3t',
    mysql: {
        db: 'ts-api-test',
        dialetc: 'mysql',
        username: 'paulopanissa',
        password: 'secret',
        host: 'localhost',
        port: 3306,
        dbURL: 'mysql://paulopanissa:secret@localhost:3306/ts-api-test',
    }
}
