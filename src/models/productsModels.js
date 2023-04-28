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

const putProduct = async (bodyParam, Idparam) => {
  const checkId = await findById(Idparam);
  if (checkId) {
    await connection.execute(
      ` UPDATE StoreManager.products 
      SET name = (?)
      WHERE
      id = (?);`, [bodyParam, Idparam],
    );
    return {
      id: Idparam,
      name: bodyParam,
    };
  }
  return false;
};

module.exports = {
  getAll,
  findById,
  createProduct,
  putProduct,
};
