var express = require('express');
var router = express.Router();

/* GET heavy page. */
router.get('/:n', function(req, res, next) {
    var i = 2; 
    var n = parseInt(req.params.n);
    if( n ){
        if(i > n){
            res.send('Prime number under ' + n + " is 0 " );
        }else{
            var data = [];
            for(var j = 0; j <= n; j ++){
                data.push(-1);
            }
            var total = 0;
            for(var j = i; j < n; j ++){
                // check if used
                if(data[j] == -1){
                    total += 1;
                }
                // label non-primes
                for(var k = 1; k <= n / j; k ++){
                    data[k * j] = 1;
                }
            }
            res.send('Prime number under ' + n + " is " + total );
        }

    }else{
        res.send(n + " is not a valid number");
    }

});

module.exports = router;
