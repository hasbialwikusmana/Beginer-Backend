const pool = require("../config/db");
exports.getCategory = (req, res, next) => {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};
