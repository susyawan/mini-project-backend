const express = require("express");
const registerRoute = require("../controllers/register.controller");
const loginRoute = require("../controllers/login.controller");
const productRoute = require("../controllers/product.controller");
const isAuthenticate = require("../middlewares/auth.middleware");
const router = express.Router();

// Register
router.post("/register", registerRoute.register);

// Login
router.post("/login", loginRoute.login);

// Home
router.get("/", isAuthenticate.isAuthenticate, productRoute.listProduct);
router.post("/product/add", isAuthenticate.isAuthenticate, productRoute.addProduct);
router.put("/product/:id", isAuthenticate.isAuthenticate, productRoute.updateProduct);
router.delete('/product/:id', isAuthenticate.isAuthenticate, productRoute.deleteProduct);

module.exports = router;
