var express = require('express');
var router = express.Router();

//show index page listing the checklist
router.get('/', function(req, res) {
  global.db.findAll((e, items) => {
      if(e) { return console.log(e); }
      res.render('index', { title: 'TODO List', items: items });
  });
});

router.get('/items', function(req, res) {
  global.db.findAll((e, items) => {
    if(e) { return console.log(e); }
    res.send({ items: items });
  });
});


//show new checklist item page
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Item', doc: {"task":"","status":""}, action: '/new' });
});

//add new item to checklist
router.post('/items', function(req, res) {
  var task = req.body.task;
  var id = req.body.id;
  var status = 'not done';
  global.db.insert({task, status}, (err, result) => {
          if(err) { return console.log(err); }
          res.send(result.ops[0]);
      })
})


//show update checklist item page
// router.get('/edit/:id', function(req, res, next) {
//   var id = req.params.id;
//   global.db.findOne(id, (e, docs) => {
//       if(e) { return console.log(e); }
//       res.render('new', { title: 'Edição de Cliente', doc: docs[0], action: '/edit/' + docs[0]._id });
//     });
// });

//call update function and return to index page
router.get('/edit/:id', function(req, res) {
  var id = req.params.id; //maybe it should be body instead of params
  var status = req.params.status;
  console.log('this is the status' + status);

  if(status==="done") {
    console.log('entered if');
    status = "not done";
  } else {
    console.log('entered else');
    status = "done";
  }

  console.log(status);
  global.db.update(id, status, (e, result) => {
        if(e) { return console.log(e); }
        res.redirect('/');
    });
});

router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, r) => {
        if(e) { return console.log(e); }
        res.redirect('/');
      });
});

module.exports = router;