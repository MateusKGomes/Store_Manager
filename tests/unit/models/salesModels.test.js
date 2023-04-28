const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModels = require('../../../src/models/salesModels');
const { mockGetAll, mockFindById } = require('./mock/sales.mock');

describe('Testa as funções de Sales Models', () => {
  afterEach(() => sinon.restore());
  describe('Teste de casos de sucesso', () => {
    it('Testa se a função getAll', async () => {
      sinon.stub(connection, 'execute').resolves([mockGetAll]);
      const result = await productsModels.getAll();
      expect(result).to.been.an('Array');
      expect(result).to.been.length(3);
    });
    it('Testa se a função findById', async () => {
      sinon.stub(connection, 'execute').resolves([mockFindById])
      const id = 1;
      const result = await productsModels.findById(id);
      expect(result).to.been.an('array');
      expect(result).to.been.length(2);

    });
  });
});