const { expect } = require('chai');
const sinon = require('sinon');
const salesModels = require('../../../src/models/salesModels');
const salesServices = require('../../../src/services/salesService');
const { mockGetAll, mockFindById } = require('../models/mock/sales.mock');

describe('Teste das camadas de Services', () => {
  afterEach(() => sinon.restore());
  describe('Testa casos de sucesso', () => {
    it('Testa a chamada da função getAll', async () => {
      sinon.stub(salesModels, 'getAll').resolves(mockGetAll)
      const result = await salesServices.getAll();
      expect(result.message).to.been.an('array');
      expect(result.message).to.been.length(3);
    });
  });
  it('Testa a chamada da função findById', async () => {
    sinon.stub(salesModels, 'findById').resolves(mockFindById);
    const id = 1;
    const result = await salesServices.findById(id);
    expect(result).to.been.an('object');
    expect(result.message).to.been.length(2);
  });
  describe('Testa casos de erro', () => {
    it('Testa erro na função findByID', async () => {
      sinon.stub(salesModels, 'findById').resolves([]);
      const id = 99999;
      const result = await salesServices.findById(id);
      expect(result).to.been.an('object');
      expect(result.message.message).to.been.equal('Sale not found');
    })
  });
});
