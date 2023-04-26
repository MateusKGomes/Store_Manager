const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  console.log(result);
  return result;
};

const findById = async (param) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [param],
  );
  return result;
};

module.exports = {
  getAll,
  findById,
};
