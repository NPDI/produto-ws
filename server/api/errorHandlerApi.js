import * as HTTPStatus from 'http-status';

export function errorHandlerApi(err, req, res, next){
    console.error(`API error handler foi executado: ${err}`)
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        errorCode: 'ERR-001',
        message: 'Erro interno do Servidor'
    })
}