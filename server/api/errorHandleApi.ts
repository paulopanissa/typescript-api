import { Request, Response, RequestHandler, ErrorRequestHandler, NextFunction} from "express";

export function errorHandleApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.log(`API error handle foi executa: ${err}`)
    res.status(500)
        .json({
            errorCode: 'ERR-001',
            message: 'Erro interno do servidor!'
        })
}
