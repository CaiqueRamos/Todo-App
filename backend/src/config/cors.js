module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Origin', "POST, GET, OPTIONS, DELETE, PUTH, PATH")
    res.header('Access-Control-Allow-Origin', "Origin, C-Requested-with, Content-type, Accept")
    next();
}