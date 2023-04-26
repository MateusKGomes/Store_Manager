const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const findById = async (param) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [param],
  );
  return result;
};

const createProduct = async ({ name }) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUES(?);', [name],
  );
  return result;
};

module.exports = {
  getAll,
  findById,
  createProduct,
};
