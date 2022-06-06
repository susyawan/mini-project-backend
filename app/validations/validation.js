const Joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).required(),
    address: Joi.string().min(6).required(),
    phone_number: Joi.number().required()
  });

  return schema.validate(data);

};

const addProductValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
  })

  return schema.validate(data)

}

module.exports.registerValidation = registerValidation
module.exports.addProductValidation = addProductValidation