import { app, request, expect } from './config/helpers'
import * as HTTPStatus from 'http-status'

describe('Teste de Integração', () => {

    'use strict'
    const config = require('../../server/config/env/config')()
    const model = require('../../server/models')

    let id

    const userTest = {
        id: 100,
        name: 'Usuário Teste',
        email: 'teste@gmail.com',
        password: '321654'
    }

    const userDefault = {
        id: 1,
        name: 'User Default',
        email: 'default@user.com',
        password: '123456'
    }

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
        .then(() => {
            return model.User.create(userDefault)
        })
        .then( user => {
            model.User.create(userTest)
                .then(() => {
                    done()
                })
        })
    })

    describe('GET /api/users/all', () => {
        it('deve retornar Array com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK)
                    expect(res.body.payload).to.be.an('array')
                    expect(res.body.payload[0].name).to.be.equal(userDefault.name)
                    expect(res.body.payload[0].email).to.be.equal(userDefault.email)
                    done(error)
                })
        })
    })

    describe('GET /api/users/:id', () => {
        it('deve retornar json apenas um usuário', done => {
            request(app)
                .get(`/api/users/${userDefault.id}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK)
                    expect(res.body.payload.id).to.equal(userDefault.id)
                    expect(res.body.payload).to.have.all.keys([
                        'id', 'name', 'email', 'password'
                    ])
                    id = res.body.payload.id;

                    done(error)
                })
        })
    })

    describe('POST /api/users/create', () => {
        it('deve criar novo usuário', done => {
            const user = {
                id: 2,
                name: 'Usuario Teste',
                email: 'user@tests.com.br',
                password: 'super'
            }
            request(app)
                .post(`/api/users/create`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK)
                    expect(res.body.payload.id).to.eql(user.id)
                    expect(res.body.payload.name).to.eql(user.name)
                    expect(res.body.payload.email).to.eql(user.email)
                    done(error)
                })
        })
    })

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um Usuário', done => {
            const user = {
                name: '',
                email: ''
            };
            request(app)
                .put(`/api/users/${userTest.id}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                });
        });
    });

    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve remover um usário', done => {
            request(app)
                .del(`/api/users/${userTest.id}/destroy`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                });
        });
    });
})