
var rgbColor = [
    {red: 255 ,green:255, blue:255}
];

exports.findAll = function (req, res, next) {
    res.send(rgbColor.red);
    console.log("Find All " + rgbColor.red);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(rgbColor[id]);
};

exports.post = function(req, res){
    console.log('POST /');
    rgbColor.red = req.body.red
    console.log(rgbColor.red);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
};
