import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { errorHandlerApi } from '../api/errorHandlerApi';
import Routes from './routes/routes';

class Api {

    constructor() {
        this.express = express();
        this.middleware();
    }

    middleware(){
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi);
        this.router(this.express);
    }

    router(app) {
        new Routes(app);
    }
    
}

export default new Api().express;