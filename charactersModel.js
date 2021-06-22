const md5 = require("md5");
const request = require('request');

const endpoint = "http://gateway.marvel.com/v1/public/characters"
const publicKey = 'fbd397a06c30c18223bcdebb92d95bca';
const privateKey = '6f207ffb25f7b63f5038ee138cdb6ae17851276a';
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
                console.error('Model >> Erro ao buscar todos os personagens.');
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