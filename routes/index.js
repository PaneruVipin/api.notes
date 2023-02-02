var express = require("express");
const connection = require("../database");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/add_note", function (req, res, next) {
  var note = req.body.note;
  var sql = `INSERT INTO users (note) VALUES ("${note}")`;
  connection.query(sql, function (err, result) {
    if (err) res.send(err);
    else res.json("added note");
  });
});

router.delete("/delete_note/:id", function (req, res, next) {
  var id = req.params.id;
  var sql = `DELETE FROM users WHERE id = ?`;
  connection.query(sql, [id], function (err, data) {
    if (err) res.send(err);
   else res.json("updated");
  });
});
router.get("/get_notes", function (req, res, next) {
  var sql = "SELECT * FROM users ORDER BY id desc";
  connection.query(sql, function (err, data) {
    if (err) res.send(err);
    else res.json({ data });
  });
});
module.exports = router;
