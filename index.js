const express = require('express');
let charactersRoute = require('./charactersRoute');
var port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => { res.json('PONG!') });
app.use('/v1/public/characters', charactersRoute);

app.listen(port, () => {
    console.info(`>> Servidor rodando na porta ${port}`);
});