var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'take out the garbage'}]

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('todo', {todos: data})
  })

  app.post('/', urlencodedParser, function(req, res){
    data.unshift(req.body)
    res.json(data)
  })

  app.delete('/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, "-") !== req.params.item
    })
    res.json(data)
  })
}
