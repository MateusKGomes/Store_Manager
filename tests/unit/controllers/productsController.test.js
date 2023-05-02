const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const { expect } = chai;
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
      expect(res.status).to.have.been.calledWith(200);
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
      expect(res.status).to.have.been.calledWith(200);
    });
    it('Testa se a função putProduct', async () => {
      sinon.stub(productsServices, 'putProduct').resolves({
        type: null,
        message: { id: 1, name: 'Martelo de Thor' }
      })
      const id = 1;
      const req = {
        body: {
          id,
          name: 'Martelo de Thor',
        },
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsControllers.putProduct(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({
        id: 1,
        name: 'Martelo de Thor'
      });
    });
  });
  it('Testa a função createProduct', async () => {
    sinon.stub(productsServices, 'createProduct').resolves({
      type: null,
      message: {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 9,
      info: '',
      serverStatus: 2,
      warningStatus: 0
      } 
    });
    const req = {
      body: {
        name: 'Mouse',
      },
    };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsControllers.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 9, name: 'Mouse' });
  });
  it('Testa a função deleteProduct', async () => {
    sinon.stub(productsServices, 'deleteProduct').resolves({ type: null, message: true });
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsControllers.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(204);
  });
  describe('Testa casos de erro', () => {
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
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({
          message: 'Product not found'
        });
    });
  });
});