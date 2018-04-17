import { Request, Response } from 'express'
import UserController from './user.controller'
let userCtrl

class UserRoutes {

    constructor() {
        userCtrl = new UserController()
    }

    index(req: Request, res: Response) {
        userCtrl.getAll(req, res)
    }
    create(req: Request, res: Response) {
        userCtrl.createUser(req, res)
    }
    findOne(req: Request, res: Response) {
        userCtrl.getById(req, res)
    }
    update(req: Request, res: Response) {
        userCtrl.updateUser(req, res)
    }
    destroy(req: Request, res: Response) {
        userCtrl.deleteUser(req, res)
    }
}

export default UserRoutes
