const express = require('express');
let charactersRoute = require('./charactersRoute');

const app = express();
app.use(express.json());

app.get('/', (req, res) => { res.json('PONG!') });
app.use('/v1/public/characters', charactersRoute);

app.listen(8000, () => {
    console.info('>> Servidor rodando na porta 8000');
});