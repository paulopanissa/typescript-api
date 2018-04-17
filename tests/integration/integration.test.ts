import { app, request, expect } from './config/helpers'

describe('Teste de Integração', () => {

    describe('GET /', () => {
        it('Deve retornar mensagem Hello World!', done => {
            request(app)
                .get('/')
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                    expect(res.text).to.be.eql('Hello World!')
                    done(error)
                })
        })
    })

    describe('GET /ola/:nome', () => {
        it('Deve retornar o nome Olá, Paulo', done => {
            const nome = 'Paulo'
            request(app)
                .get(`/ola/${nome}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                    expect(res.text).to.be.eql('Olá, Paulo')
                    done(error)
                })

        })
    })

    describe('GET /api/users/all', () => {
        it('deve retornar json com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                })
        })
    })

    describe('GET /api/users/:id', () => {
        it('deve retornar json apenas um usuário', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                })
        })
    })

    describe('POST /api/users/new', () => {
        it('deve criar novo usuário', done => {
            const user = {
                nome: 'Teste'
            }
            request(app)
                .post(`/api/users/new`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                })
        })
    })

    describe('PUT /api/users/:id/edit', () => {
        it('deve editar usuário', done => {
            const user = {
                nome: 'Teste'
            }
            request(app)
                .put(`/api/users/${1}/edit`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                })
        })
    })

    describe('DELETE /api/users/:id', () => {
        it('deve deletar usuário', done => {
            request(app)
                .delete(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200)
                })
        })
    })
})