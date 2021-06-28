
const chai = require('chai');
const chaiHttp = require('chai-http')
const expect = chai.expect;
const app = require('../index'); // O arquivo principal do seu projeto

chai.use(chaiHttp)

describe('Teste geral', () => { 
    it('Servidor iniciou corretamente.', (done) => { 
        chai.request(app).get('/').end((err, res) => { 
            expect(err).to.be.null; 
            expect(res).to.have.status(200); 
            expect(res).to.have.property('body').that.does.include('PONG!'); 
            done(); // Chama a callback e encerra o teste
        });
    });

    
});

describe('Teste de rotas', () => { 
    it('/v1/public/characters', (done) => { // Nome do  teste, que pertence ao grupo teste de rotas
        chai.request(app).get('/v1/public/characters').end((err, res) => { 
            expect(err).to.be.null; // A variável erro tem que ser nula
            expect(res).to.have.status(200); // A resposta tem que vir com status 200 (Status de sucesso)
            expect(res).to.have.property('body') // A resposta tem que ter o campo body
            .to.have.property('data') // O body tem que ter a propriedade data
            .to.have.property('data') // A propriedade data tem que ter outra propriedade chamada data
            .to.have.property('results') // A propriedade data tem que ter a propriedade results
            .to.be.an('array') // A propriedade results tem que ser um array
            .to.not.be.empty; // Esse array não pode ser vazio
            done(); // Chama a callback e encerra o teste
        });
    });

    
});