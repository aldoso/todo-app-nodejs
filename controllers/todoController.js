const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'take out the garbage'}]

module.exports = function(app){
    app.get('/', function(req, res){
    res.render('todo', {todos: data})
  })

  app.post('/', urlencodedParser, function(req, res){
    data.push(req.body)
    response.json(data)
  })

  app.delete('/', function(req, res){
    res.send('it works')
  })
}
