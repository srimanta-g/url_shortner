const express = require('express');
const { save_url, get_original_url } = require('./util/url_util.js');
require('./db/db_main.js');

const express_app = express();
const SERVER_PORT = 3000;

express_app.use(express.json());


express_app.get('/', (request, response) => {
    response.send({
        'status' : 'success'
    });
});

express_app.post('/short-url', async (request, response) => {
    const url = {
        'url' : request.body.url,
        'expiary_at' : request.body.expiary_at
    }
    response.send( await save_url(url) );
});

express_app.get('/:id', async (request, response) => {
    const url_path = await get_original_url(request.params.id);
    response.redirect(url_path);
})

express_app.listen(SERVER_PORT, () => {
    console.log('Server started');
})