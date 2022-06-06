const models = require("../../models/index");
const validation = require("../validations/validation");
const bcrypt = require("bcrypt");
const moment = require("moment");

// REGISTER
async function register(req, res) {
  let data = req.body;

  // Validate Registration
  const valid = validation.registerValidation(data);
  if (valid.error) return res.status(400).send(valid.error.message);

  // Checking Name Exist
  const nameExist = await models.merchant.findOne({
    where: { name: data.name },
  });
  if (nameExist) return res.status(400).send("Your Name Already Exists");

  // Encrypt Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  // Format Date
  const date_time = new Date(
    new Date().setHours(new Date().getHours() + 7)
  ).toLocaleString();
  const date_result = moment(date_time).format("DD/MM/YYYY");
  console.log(date_result);

  try {
    const results = await models.merchant.create({
      name: data.name,
      password: hashedPassword,
      address: data.address,
      join_date: date_time,
      phone_number: data.phone_number,
    });

    return res.send(`Your Login Name: ${results.name}`);
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = {
  register,
};
