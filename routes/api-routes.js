const list = require('../data/list.js');



module.exports = function(app) {

  app.get('/list', function(req, res) {
    res.json(list);
  });
  
  app.post('/list', function(req, res) {

    console.log(req.body, "------------This should be the todo list item");
  

  list.push(req.body);

  res.json(list);
});

  app.post('/delete/list', function(req, res) {
    // const chosen = req.params.list;
    list.splice(req.body.index, 1);
    
    res.json(list);
  });
}
