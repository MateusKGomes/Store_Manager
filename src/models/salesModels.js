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

module.exports = {
  createSales,
};