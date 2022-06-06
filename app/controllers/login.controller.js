const models = require("../../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// LOGIN
async function login(req, res) {
  let data = req.body;

  // Checking Name Exist
  const user = await models.merchant.findOne({
    where: { name: data.name },
  });
  if (!user) return res.status(400).send("You are not registered");

  // PASSWORD CORRECT
  const validPass = await bcrypt.compare(data.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  const payLoad = {
    email: data.email,
    id: user.id,
  };

  const privateKey = "secret";

  const token = jwt.sign(
    payLoad,
    privateKey,
    { algorithm: "HS256" },
    { expiresIn: 300000 }
  );

  // fs.writeFileSync("privateKey.key", "Bearer " + token);

  return res.send({ data: { token: token } });
  // return res.send("Success..");
}

module.exports = {
  login,
};
