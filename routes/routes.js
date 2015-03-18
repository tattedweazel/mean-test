/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


/*
 * GET test page.
 */
exports.test = function(req, res){
    res.render('index', { title: 'Test' })
};