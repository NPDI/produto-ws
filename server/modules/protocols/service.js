import * as Bluebird from 'bluebird';
import product from '../../models/product';

const model = require('../../models');

class Protocol {

    constructor() {
        this.createProtocol = ({ id, numero, cpfConsumidor, nomeConsumidor, versaoAtual, versaoAnterior, situacao, defeito, dataHora, avaliacao, observacoes }) => ( { id, numero, cpfConsumidor, nomeConsumidor, versaoAtual, versaoAnterior, situacao, defeito, dataHora, avaliacao, observacoes });
        this.createProtocols = (data) => data.map(this.createProtocol);
    }

    create(protocol) {
        return model.Protocol.create(protocol);
    }

    getAll() {
        return model.Protocol.findAll({
            order: ['numero']
        })
            .then(this.createProtocols)
    }

    getById(numero) {
        return model.Protocol.findOne({
            where: { numero }
        })
            .then(this.createProtocol)
    }

    delete(numero) {
        return model.Protocol.destroy({
            where: { numero }
        })
    }

}

export default new Protocol();

