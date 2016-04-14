var people = require('../controllers/people.js');

module.exports = function(app){

  app.get('/show', function(req, res) {
    console.log('hit route')
      people.show(req,res);
  });

  app.get('/:name', function(req, res) {
      people.show_one(req,res);
  });

  app.get('/new/:name', function(req, res) {
      people.create(req,res);
  });

  app.get('/remove/:name', function(req, res) {
      people.remove(req,res);
  });
};