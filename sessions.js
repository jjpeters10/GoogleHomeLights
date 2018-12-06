
var rgbColor = [
    {id:0 , red: 255},
    {id:1 , green:255},
    {id:2 , blue:255}
];

exports.findAll = function (req, res, next) {
    res.send(rgbColor);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(rgbColor[id]);+
};
