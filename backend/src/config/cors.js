module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE, PUTH, PATH, PUT,")
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Aceppt")
    next();
}