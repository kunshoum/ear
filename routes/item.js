var express = require('express');
var router = express.Router();

router.get('/list',function(req,res) {
	console.log("wym's list");
    res.send([{title:"lily",time:"2017-06-01"},{title:"jack",time:"2017-06-02"},{title:"john",time:"2017-06-03"},{title:"linDa",time:"2017-06-04"}]);
});

module.exports = router;
