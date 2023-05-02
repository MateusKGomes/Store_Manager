const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModels = require('../../../src/models/productsModels');

const {
  mockGetAll,
  mockFindById,
  mockPutProduct,
  mockCreateProduct,
} = require('./mock/products.mock');

describe('Teste das camadas de Model', () => {
  afterEach(() => sinon.restore());
  describe('Testa casos de sucesso', () => {
    it('Testa a chamada da função getAll', async () => {
      sinon.stub(connection, 'execute').resolves([mockGetAll])
      const result = await productsModels.getAll();
      expect(result).to.been.an('Array');
      expect(result).to.been.length(3);
    });
  });
  it('Testa a chamada da função findById', async () => {
    sinon.stub(connection, 'execute').resolves([mockFindById])
    const id = 1;
    const result = await productsModels.findById(id);
    expect(result).to.been.an('Object');
    expect(result.id).to.been.equal(id);
  });
  it('Testa se a função putProduct', async () => {
    sinon.stub(connection, 'execute').resolves([mockPutProduct])
    const id = 1;
    const result = await productsModels.putProduct({
      name: 'Martelo do Thor'
    }, id);
    expect(result).to.been.an('object');
    expect(result.name.name).to.been.equal('Martelo do Thor');
  });
  it('Testa a função createProduct', async () => {
    sinon.stub(connection, 'execute').resolves([mockCreateProduct]);
    const result = await productsModels.createProduct({
      name: 'Garrafinha de água'
    });
    expect(result).to.been.an('array');
  });
});