import { testDouble, expect } from "./config/helpers";
import User from '../../server/modules/User/user.service'
const model = require('../../server/models');
import {explain} from "testdouble";

    const defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultuser@email.com',
        password: '1234'
    }

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
            .then(() => {
                model.User.create(defaultUser).then(() => {
                    console.log(`Default User created`)
                    done();
                });
            })
    });

describe('Testes unitarios do controller', () => {
    describe('Create', () => {
        it('it should: create new user', () => {
            const newUser = {
                id: 2,
                name: 'Novo Usuário',
                email: 'novo@user.com',
                password: '123321'
            }
            const user = new User()
            return user.create(newUser)
                        .then( data => {
                            expect(data.dataValues).to.have.all.keys(
                                ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                            )
                        })
        })
    })

    describe('Update', () => {
        it('it should: updated user', () => {
            const userUpdate = {
                name: 'Nome Atualizado',
                email: 'email@atualizado.com'
            }
            const user = new User()
            return user.update(1, userUpdate).then(data => {
                expect(data[0]).to.be.equal(1)
            })
        })
    })

    describe('Get Users', () => {
        it('it should: Get all users', () => {
            const user = new User()
            return user.getAll().then(data => {
                expect(data).to.be.an('array')
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            })
        })
    })

    describe('Metodo getById', () => {
        it('Retornar um usuário de acordo com o ID passado', () => {
            const user = new User()
            return user.getById(defaultUser.id)
                .then(data => {
                    expect(data).to.be.an('object')
                    expect(data.id).to.be.equal(defaultUser.id)
                    expect(data.name).to.be.equal(defaultUser.name)
                    expect(data.email).to.be.equal(defaultUser.email)
                })
        })
    })

    describe('Metodo getByEmail', () => {
        it('Retornar um usuário de acordo com o EMAIL passado', () => {
            const user = new User()
            return user.getByEmail(defaultUser.email)
                .then(data => {
                    expect(data).to.be.an('object')
                    expect(data.id).to.be.equal(defaultUser.id)
                    expect(data.name).to.be.equal(defaultUser.name)
                    expect(data.email).to.be.equal(defaultUser.email)
                })
        })
    })

    describe('Delete', () => {
        it('it should: delete user', () => {
            const user = new User()
            return user.delete(1).then(data => {
                expect(data).to.be.equal(1)
            })
        })
    })
})