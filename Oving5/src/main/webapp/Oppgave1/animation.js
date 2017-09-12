$(document).ready(function () {
    var boks = $("#boks");

    boks.mouseover(function () {
        var x = Math.random()*window.innerWidth;
        var y = Math.random()*window.innerHeight;

        $("div").animate({
            right: x + 'px',
            bottom: y + 'px'
        }, "slow")
    });

    boks.click(function () {
        $("div").fadeOut();
    })
});