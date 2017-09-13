$(document).ready(function () {
    var boks = $("#boks");

    boks.mouseover(function () {
        var x = Math.random()*(window.innerWidth-boks.width());
        var y = Math.random()*(window.innerHeight-boks.height());

        $("div").animate({
            right: x + 'px',
            bottom: y + 'px'
        }, 1000)
    });

    boks.click(function () {
        $("div").stop();
        $("div").fadeOut();
    })
});