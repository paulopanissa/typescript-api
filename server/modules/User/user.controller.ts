import { Request, Response } from 'express'
import * as HTTPStatus from 'http-status'
import UserService from './user.service'

class UserController {

    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    getAll(req: Request, res: Response) {
        this.userService
            .getAll()
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data})
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao buscar todos os usuários'})
            })

    }

    createUser(req: Request, res: Response) {
        this.userService
            .create(req.body)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data})
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao criar novo usuário'})
            })
        res.status(HTTPStatus.OK).json({
            message: 'Ok'
        })
    }

    getById(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            message: 'Ok'
        })
    }
    updateUser(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            message: 'Ok'
        })
    }

    deleteUser(req: Request, res: Response) {
        res.status(HTTPStatus.OK).json({
            message: 'Ok'
        })
    }
}

export default UserController
