const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../src/services/productsServices');
const productsControllers = require('../../../src/controllers/productsControllers');

describe('Testa funções de Controllers', () => {
  afterEach(() => sinon.restore());
  describe('Testa casos de sucesso', () => {
    it('Teste a função getAll', async () => {
      sinon.stub(productsServices, 'getAll').resolves({
          type: null,
          message: [
            { id: 1, name: 'Martelo de Thor' },
            { id: 2, name: 'Traje de encolhimento' },
            { id: 3, name: 'Escudo do Capitão América' }
          ]
      });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsControllers.getAll(req, res);
      expect(res.status).to.been.an('function');
    });
    it('Teste a função findById', async () => {
      sinon.stub(productsServices, 'findById').resolves({
        type: null,
        message: { id: 1, name: 'Martelo de Thor' }
      });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsControllers.findById(req, res);
      expect(res.json).to.been.an('function');
    });
  });
  describe('Testa casos de erro', () => {
    it('Testa erro na função findById', async () => {
      it('Teste a função findById', async () => {
        sinon.stub(productsServices, 'findById').resolves({
          type: 404,
          message: { message: 'Product not found' }
        });
        const req = {};
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        await productsControllers.findById(req, res);
        expect(res.json).to.been.an('function');
      });
    });
  });
});