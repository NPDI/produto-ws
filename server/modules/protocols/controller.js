import * as HTTPStatus from 'http-status';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import Protocol from './service';
import { dbErrorandler } from '../../config/dbErrorHandler';
import * as _ from 'lodash';

class ProtocolController {
    constructor() { }

    getAll(req, res) {
        Protocol.getAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os Protocolos'));
    }
    createProtocol(req, res) {
        Protocol.create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorandler, res))
            .catch(_.partial(onError, res, 'Erro ao criar novo Protocolo'));
    }
    getById(req, res) {
        const protocolId = parseInt(req.params.id);
        Protocol.getById(protocolId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Protocolo informado não encontrado'));
    }
}

export default ProtocolController;