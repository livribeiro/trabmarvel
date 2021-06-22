const model = require('./charactersModel');

class charactersController {
    getAllCharacters(cb) {
        model.getAllCharacters((err, response) => {
            if (err) {
                console.error('Controller >> Erro ao buscar todos os personagens.');
                cb(true, null);
            }

            let result = JSON.parse(response.body);

            cb(false, result);
        })
    }

    getInfos(obj, cb) {
        model.getInfos(obj, (err, response) => {
            if (err) {
                console.error(`Controller >> Erro ao buscar ${obj.message}.`);
                cb(true, null);
            }

            let result = JSON.parse(response.body);

            cb(false, result);
        })
    }
}

module.exports = new charactersController();
