const mockGetAll = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const mockFindById = [
  { id: 1, name: 'Martelo de Thor' }
];

const mockPutProduct = [{ id: '1', name: 'Martelo do Thor' }];

const mockCreateProduct = [{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 7,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}];

module.exports = {
  mockGetAll,
  mockFindById,
  mockPutProduct,
  mockCreateProduct,
}