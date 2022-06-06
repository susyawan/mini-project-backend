const jwt = require("jsonwebtoken");

function isAuthenticate(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Unoauth" });
    return;
  }

  const splitToken = req.headers.authorization.split(" ");

  if (splitToken.length !== 2 || splitToken[0] !== "Bearer") {
    res.status(400).send("Access Denied");
    return;
  }

  jwt.verify(
    splitToken[1],
    "secret",
    { algorithms: ["HS256"] },
    async (err, payLoad) => {
      if (err && err.name === "TokenExpiredError") {
        res.status(401).send({ message: "Expired Token" });
      } else if (err) {
        res.status(401).send({ message: "Invalid token" });
      } else {
        next();
      }
    }
  );
}

module.exports = {
  isAuthenticate,
};
