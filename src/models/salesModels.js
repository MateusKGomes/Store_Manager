const connection = require('./connection');

const createSales = async (body) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales(date) VALUES(NOW());',
  );

  await Promise.all(body.map((param) => connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?);',
    [insertId, param.productId, param.quantity],
  )));

  return {
    id: insertId,
    itemsSold: body,
  };
};

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT s.id AS saleId,
    s.date,
    p.product_id AS productId,
    p.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p
    ON StoreManager.s.id = StoreManager.p.sale_id;`,
  );
  return result;
};

const findById = async (param) => {
  const [result] = await connection.execute(
    `SELECT s.date,
    p.product_id AS productId,
    p.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p
    ON StoreManager.s.id = StoreManager.p.sale_id
    WHERE StoreManager.s.id = (?);`, [param],
  );
  return result;
};

module.exports = {
  createSales,
  getAll,
  findById,
};