import ProtocolController from './controller'

let ProtocolCtrl; 

class ProtocolRoutes {
    constructor(){
        ProtocolCtrl = new ProtocolController();
    }

    findAll(req, res){
        return ProtocolCtrl.getAll(req, res);
    }
    findOne(req, res){
        return ProtocolCtrl.getById(req, res);
    }
    create(req, res){
        return ProtocolCtrl.createProtocol(req, res);
    }
    update(req, res){
        return ProtocolCtrl.updateProtocol(req, res);
    }
    destroy(req, res){
        return ProtocolCtrl.deleteProtocol(req, res);
    }
}

export default ProtocolRoutes;