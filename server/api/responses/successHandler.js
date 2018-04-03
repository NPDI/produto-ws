import * as HTTPStatus from 'http-status';

export function onSuccess(res, data){
    res.status(HTTPStatus.OK).json({
        payload: data
    })
}