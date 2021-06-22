const router = require('express').Router();
const controller = require('./charactersController');

const getAllCharacters = (req, res) => {
    console.log('>> Buscando todos os personagens.');

    controller.getAllCharacters((err, characters) => {
        if (err) {
            console.error('Route >> Erro ao buscar todos os personagens.');
            return res.status(400).json({
                error: true,
                message: "Erro ao buscar todos os personagens"
            });
        }

        return res.status(200).json({
            error: false,
            data: characters
        })
    });
}

const getInfos = (req, res) => {
    const message = req.params.type ? `${req.params.type} do personagem.` : 'o personagem';
    console.log(`>> Buscando ${message}`);

    const obj = {
        id: req.params.characterId,
        type: req.params.type || null,
        message: message
    }    

    controller.getInfos(obj, (err, response) => {
        if (err) {
            console.error(`Route >> Erro ao buscar ${message}.`);
            return res.status(400).json({
                error: true,
                message: `Erro ao buscar ${message}.`
            });
        }

        return res.status(200).json({
            error: false,
            data: response
        })
    });
}

router.get('/', getAllCharacters);
router.get('/:characterId/:type?', getInfos);

module.exports = router;