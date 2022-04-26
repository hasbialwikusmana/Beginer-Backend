let products = [
  {
    id: 1,
    name: "Iphone X",
    stock: 10,
    price: 100000,
  },
];
const productController = {
  getProducts: (req, res, next) => {
    res.json({
      data: products,
    });
  },
  addProduct: (req, res, next) => {
    const { name, price, stock } = req.body;
    products.push({
      name,
      price,
      stock,
    });
    res.json({
      message: "data berhasil ditambahkan",
    });
  },
  updateProduct: (req, res, next) => {
    const { name, price, stock } = req.body;
    const id = req.params.id;
    products = products.map((item) => {
      if (item.id == id) {
        const result = {
          id,
          name,
          price,
          stock,
        };
        return result;
      } else {
        return item;
      }
    });
    res.json({
      message: "data berhasil di update",
    });
  },
  deleteProduct: (req, res, next) => {
    const id = req.params.id;
    products = products.filter((item) => item.id != id);
    res.json({
      message: "data berhasil di hapus dengan id = " + id,
    });
  },
};

module.exports = productController;
