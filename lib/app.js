"use strict";
var express = require("express");
var express_1 = require("express");
var process = require("process");
var app = express();
var port = process.env.PORT || 3000;
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(port, function () {
    process.stdout.write('App listening at http://localhost:${port}/');
});
//# sourceMappingURL=app.js.map