import * as HTTPStatus from 'http-status';

export function onError(res, message, err){
    console.error(`Ocorreu um erro: ${err}`);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
}