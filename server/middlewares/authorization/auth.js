const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");

const getAccessToRoute = (req, res, next) => {
  if (
    !(
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer:")
    )
  ) {
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }

  const token = req.headers.authorization.split(" ")[1];

  const { JWT_SECRET_KEY } = process.env;

  jwt.verify(token, JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this route", 401)
      );
    }

    req.user = {
      id: decoded.id,
      name: decoded.name,
      surname: decoded.surname,
      role: decoded.role,
    };

    return next();
  });
};

module.exports = { getAccessToRoute };
