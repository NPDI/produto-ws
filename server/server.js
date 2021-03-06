import * as http from 'http';

import Api from './api/api';

const models = require('./models');
const config = require('./config/env/config')(); //invocação imediata!

const server = http.createServer(Api);

models.sequelize.sync().then( () => {
    server.listen(config.serverPort);
    server.on('listening', () => console.log(`Server rodando na porta ${config.serverPort}`))
    server.on('error', (error) => console.log(`Houve uma erro: ${error}`))
})
