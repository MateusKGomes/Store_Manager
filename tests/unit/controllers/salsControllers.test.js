const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;
const salesService = require('../../../src/services/salesService');
const salesControllers = require('../../../src/controllers/salesControllers');
const { mockGetAll, mockFindById } = require('../models/mock/sales.mock');

describe('Testa funções de Controllers', () => {
  afterEach(() => sinon.restore());
  describe('Testa casos de sucesso', () => {
    it('Teste a função getAll', async () => {
      sinon.stub(salesService, 'getAll').resolves({
        type: null,
        message: mockGetAll
      });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesControllers.getAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
    it('Teste a função findById', async () => {
      sinon.stub(salesService, 'findById').resolves({
        type: null,
        message: mockFindById
      });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesControllers.findById(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
  });
  describe('Testa casos de erro', () => {
    describe('Testa erro na função findById', async () => {
      it('Teste a função findById', async () => {
        sinon.stub(salesService, 'findById').resolves({
          type: 404,
          message: { message: 'Sale not found' }
        });
        const req = {};
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        await salesControllers.findById(req, res);
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({
          message: 'Sale not found'
        });
      });
    });
  });
});