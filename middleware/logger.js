const logger = (req, res, next) => {
  req.userId = "djfu3957834kjdh99834";
  console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
  next();
};

module.exports = logger;
