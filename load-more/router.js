app.get('/loadMore', function(req, res) {
  var index = req.query.index;
  var length = req.query.length;
  var data = []
  for(var i = 0; i < length; i++){
    data.push('新闻' + (parseInt(index) + i))
  }
  setTimeout(function(){
    res.send(data)
  }, 5000)
  // res.send(data)
})