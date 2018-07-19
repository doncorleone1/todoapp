var express = require('express');
var router = express.Router();

//show index page listing the checklist
router.get('/', function(req, res) {
  global.db.findAll((e, docs) => {
      if(e) { return console.log(e); }
      res.render('index', { title: 'TODO List', docs: docs });
  })
})


//show new checklist item page
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Item', doc: {"task":"","status":""}, action: '/new' });
});

//call insert function and return to index page
router.post('/new', function(req, res) {
  var task = req.body.task;
  var status = req.body.status;
  global.db.insert({task, status}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/');
      })
})

//show update checklist item page
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findOne(id, (e, docs) => {
      if(e) { return console.log(e); }
      res.render('new', { title: 'Edição de Cliente', doc: docs[0], action: '/edit/' + docs[0]._id });
    });
})

//call update function and return to index page
router.post('/edit/:id', function(req, res) {
  var id = req.params.id;
  var task = req.body.task;
  var status = req.body.status;
  global.db.update(id, {task, status}, (e, result) => {
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