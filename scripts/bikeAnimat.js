/* layout adjustment */

var body = document.body,
    html = document.documentElement;

var windowheight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
TweenMax.set("#codevemberbike", {
    left: "50%",
    top: "90%",
    xPercent: -50,
    yPercent: -50
});

/* end layout adjustment */

/* animation code start */

var tl = new TimelineLite({
    id: "codevemberbiketl",
    paused: true
});

tl.to("#codevemberbike", 0.6, {
        opacity: 1
    }, 0)
    .staggerFromTo("path", 2, {
        drawSVG: true
    }, {
        drawSVG: false,
        yoyo: true,
        repeat: -1
    }, 0.01, 0.6)
    .staggerTo("path:nth-child(odd)", 2, {
        fill: "none",
        yoyo: true,
        repeat: -1,
        repeatDelay: 1
    }, 0.05, 3);

tl.play(45, false);
//tl.pause();
/* animation code end */