
var rgbColor = [
    {red: 255},
    {green:255},
    {blue:255}
];

exports.findAll = function (req, res, next) {
    res.send(rgbColor);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(rgbColor[id]);
};

exports.post = function(req, res){
    console.log('POST /');
    //var test =
    //var color = req.body.split("=")[0];
    //var value = req.body.split("=")[1];
    console.log(rgbColor[0].red);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
};
