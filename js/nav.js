var w = window.innerWidth;
var h = window.innerHeight;
var x = window.matchMedia("(max-width: 900px)");


function openNav() {
    if (x.matches) {

        document.getElementById("main-nav").style.width = "100%";
        document.getElementById("content").style.width = "0";

    } else {
        document.getElementById("main-nav").style.width = "25em";
        document.getElementById("content").style.marginLeft = "26.225em";
        document.getElementById("branding").style.width = "23em";
    }

    document.getElementById("openbtn").innerHTML = "&times;";
    document.getElementById("openbtn").onclick = closeNav;

}

function closeNav() {
    if (x.matches) {
        document.getElementById("main-nav").style.width = 0;
        document.getElementById("content").style.width = "auto";

    } else {
        document.getElementById("main-nav").style.width = "0";
        document.getElementById("content").style.marginLeft = "26em";
        document.getElementById("branding").style.width = "19em";

    }

    document.getElementById("openbtn").innerHTML = "&#9776;";
    document.getElementById("openbtn").onclick = openNav;
}