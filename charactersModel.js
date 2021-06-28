const md5 = require("md5");
const request = require('request');

const endpoint = "http://gateway.marvel.com/v1/public/characters"
const publicKey = 'Insira sua chave publica';
const privateKey = 'Insira sua chave privada';
const ts = 1;

class charactersModel {

    constructor() {
        const hash = md5(`${ts}${privateKey}${publicKey}`);
        this.requestOptions = {
            method: 'GET',
            qs: {
                ts: ts,
                apikey: publicKey,
                hash: hash
            }
        }
    }

    getAllCharacters(cb) {
        this.requestOptions.url = endpoint
        request(this.requestOptions, (err, response, body) => {
            if (err) {
               
                cb(true, null);
            }

            cb(false, response)
        })
    }

    getInfos(obj, cb) {
        this.requestOptions.url = obj.type ? `${endpoint}/${obj.id}/${obj.type}` : `${endpoint}/${obj.id}`; 

        request(this.requestOptions, (err, response, body) => {
            if (err) {
                console.error(`Model >> Erro ao buscar ${obj.message}.`);
                cb(true, null);
            }

            cb(false, response)
        })
    }
}

module.exports = new charactersModel();