for (var i = 0; i < 5; i++) {
    function(x)(setTimeout(function() {
        console.log(x);
    }, 100))(i);
}
