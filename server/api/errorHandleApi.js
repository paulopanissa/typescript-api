"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandleApi(err, req, res, next) {
    console.log("API error handle foi executa: " + err);
    res.status(500)
        .json({
        errorCode: 'ERR-001',
        message: 'Erro interno do servidor!'
    });
}
exports.errorHandleApi = errorHandleApi;
