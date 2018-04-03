import * as HTTPStatus from 'http-status';

export function dbErrorandler(res, err) {
    console.log(`Ocorreu um erro: ${err}`);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERRO-01',
        message: 'Algo não ocorreu como esperado'
    });
}