const { expect } = require('chai');
const sinon = require('sinon');
const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices');

describe('Teste das camadas de Services', () => {
  afterEach(() => sinon.restore());
  describe('Testa casos de sucesso', () => {
    it('Testa a chamada da função getAll', async () => {
      sinon.stub(productsModels, 'getAll').resolves([
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' }
      ]);
      const result = await productsServices.getAll();

      expect(result.message).to.been.an('array');
      expect(result.message).to.been.length(3);
    });
  });
  it('Testa a chamada da função findById', async () => {
    sinon.stub(productsModels, 'findById').resolves([
      { id: 1, name: 'Martelo de Thor' }
    ]);
    const id = 1;
    const result = await productsServices.findById(id);
    expect(result).to.been.an('object');
    expect(result.message).to.been.length(1);

  });
  describe('Testa casos de erro', () => {
    it('Testa erro na função findByID', async () => {
      sinon.stub(productsModels, 'findById').resolves(undefined);
      const id = 99999;
      const result = await productsServices.findById(id);
      expect(result).to.been.an('object');
      expect(result.message.message).to.been.equal('Product not found');
    })
  });
});
