var express = require('express');
const connection = require('../database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add_note', function (req, res, next) {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var id=req.body.id
  var sql = `INSERT INTO users (note) VALUES ("${name}")`
  connection.query(sql, function (err, result) {
    if (err) res.send( err)
    else(res.json("added note"))
  })
})

router.delete('/delete_note/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    res.json("updated")
  });
});
module.exports = router;

// echo "# api.notes" >> README.md
// git init
// git add -A
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PaneruVipin/api.notes.git
// git push -u origin main