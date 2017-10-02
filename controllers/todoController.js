module.exports = function(app){
  app.get('/', function(req, res){
    res.send('it works')
  })

  app.post('/', function(req, res){
    res.send('it works')
  })

  app.delete('/', function(req, res){
    res.send('it works')
  })
}
