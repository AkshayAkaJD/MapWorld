
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.sock = function (req, res) {
    res.sendfile('views/sock.html', { title : 'sock'});
};