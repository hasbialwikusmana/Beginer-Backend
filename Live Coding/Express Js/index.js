const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productController = require("./src/controller/products");
const commonMid = require("./src/middlewares/common");
const categoryController = require("./src/controller/category");
const categoryRouter = require("./src/routes/category");
const productsRouter = require("./src/routes/products");

// app.use('/coba',commonMid.myMiddle)
// // app.use(myMiddle)

// app.get('/helo',commonMid.myMiddle, (req, res, next)=>{
//     res.send('hello word')
// })

// products
// app.get('/products',productController.getProduct)
// app.post('/products', commonMid.validate, productController.insert)
// app.put('/products/:id', productController.update)
// app.delete('/products/:idproduct',productController.delete)

// category

// app.get('/category', categoryController.getCategory)
// app.post('/category', categoryController.insertCategory)
// app.put('/category/:id', categoryController.updateCategory)
// app.delete('/category/:id', categoryController.deleteCategory)
app.use("/products", productsRouter);
app.use("/category", categoryRouter);

// let products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 0,
//     stock: 0,
//   },
// ];
// // let user = [
// //   {
// //     id: 1,
// //     name: "hasbi",
// //     email: "hasbialwi70@gmail.com",
// //     password: "123",
// //     address: "ciamis",
// //   },
// // ];
// app.use(bodyParser.json());
// app.use(myMiddle);

// app.get("/", (req, res, next) => {
//   res.send("hello world");
// });

// app.get("/products", (req, res, next) => {
//   res.json({
//     data: products,
//   });
// });

// app.post("/products", (req, res, next) => {
//   // console.log(req.body);
//   // const id = req.body.id
//   // const stock = req.body.stock
//   // const price = req.body.price
//   // const name = req.body.name
//   const { id, stock, name, price } = req.body;

//   products.push({
//     id,
//     name,
//     stock,
//     price,
//   });
//   res.json({
//     message: "data berhasil ditambahkan",
//   });
// });

// app.put("/products/:id", (req, res, next) => {
//   const { name, price, stock } = req.body;
//   const id = req.params.id;

//   products = products.map((item) => {
//     if (item.id == id) {
//       const result = {
//         id,
//         name,
//         price,
//         stock,
//       };
//       return result;
//     } else {
//       return item;
//     }
//   });
//   res.json({
//     message: "data berhasil di update",
//   });
// });

// app.delete("/products/:idproduct", (req, res, next) => {
//   const id = req.params.idproduct;
//   products = products.filter((item) => item.id != id);

//   res.json({
//     message: "adata berhasil di hapus dengan id = " + id,
//   });
// });

// app.get("/user", (req, res, next) => {
//   res.json({
//     data: user,
//   });
// });

// app.post("/user", (req, res, next) => {
//   const { name, email, password, address } = req.body;
//   user.push({
//     name,
//     email,
//     password,
//     address,
//   });
//   res.json({
//     message: "data berhasil ditambahkan",
//   });
// });

// app.put("/user/:id", (req, res, next) => {
//   const { name, email, password, address } = req.body;
//   const id = req.params.id;
//   user = user.map((item) => {
//     if (item.id == id) {
//       const result = {
//         name,
//         email,
//         password,
//         address,
//       };
//       return result;
//     } else {
//       return item;
//     }
//   });
//   res.json({
//     message: "data berhasil di update",
//   });
// });

// app.delete("/user/:iduser", (req, res, next) => {
//   const id = req.params.iduser;
//   user = user.filter((item) => item.id != id);

//   res.json({
//     message: "data berhasil di hapus dengan id = " + id,
//   });
// });

app.all("*", (req, res, next) => {
  res.status(404).json({
    message: "url not found",
  });
});

app.listen(4000, () => {
  console.log("Server starting on port 4000");
});
