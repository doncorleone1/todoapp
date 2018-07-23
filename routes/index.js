var express = require('express');
var router = express.Router();

//show index page listing the items
router.get('/', function(req, res) {
  global.db.findAll((e, items) => {
      if(e) { return console.log(e); }
      res.render('index', { title: 'TODO List', items: items });
  });
});

//add new item
router.post('/items', function(req, res) {
  var task = req.body.task;
  var status = 'not done';
  global.db.insert({task, status}, (err, result) => {
          if(err) { return console.log(err); }
          res.send(result.ops[0]);
      });
});

//update item status
router.put('/items/:id', function(req, res) {
  var id = req.params.id;
  var myItem = {};
  var status = "";
  global.db.findOne(id, (e, items) => {
    if(e) { return console.log(e); }
    myItem = { items };
    status =  myItem.items[0].status;
    console.log("my status:" + status);
    if(status==="done") {
      status = "not done";
    } else {
      status = "done";
    }
    global.db.update(id, status, (e, result) => {
            if(e) { return console.log(e); }
            res.send('success!');
        });
  });
});

//delete item
router.delete('/items/:id', function(req, res) {
  var id = req.params.id.toString();
  global.db.deleteOne(id, (e, r) => {
    res.send('success!');
  });
});

module.exports = router;