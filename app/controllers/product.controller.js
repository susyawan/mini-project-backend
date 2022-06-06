const models = require("../../models/index");
const validation = require("../validations/validation");

// List Product
async function listProduct(req, res) {
  let product = await models.product.findAll();
  if (product < 0) {
    return res.send({ message: "Product is Empty", data: product });
  }
  return res.send({ message: "Product List", data: product });
}

// Insert Product
async function addProduct(req, res) {
  let form = req.body;

  // Validate product
  const valid = validation.addProductValidation(form);
  if (valid.error)
    return res.status(400).send({ message: "Please fill empty field" });

  try {
    let results = await models.product.create({
      name: form.name,
      quantity: form.quantity,
      price: form.price,
    });

    return res.send({
      message: "Product created successfully",
      data: { product: results },
    });
  } catch (err) {
    return res.status(400).send(err);
  }
}

// Update Product
function updateProduct(req, res) {
  let form = req.body;

  const valid = validation.addProductValidation(form);
  if (valid.error)
    return res.status(400).send({ message: "Please fill empty field" });

  models.product.update(form, { where: { id: req.params.id } });

  return res.send({ message: "Product updated successfully", data: form });
}

// Delete Product
function deleteProduct(req, res) {
  models.product.destroy({ where: { id: req.params.id } });
  return res.send({ message: "Product has been deleted" });
}

module.exports = {
  listProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
