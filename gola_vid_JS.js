function slider_left(id_slider) {
    document.getElementById(id_slider).style.left= "0px";
}
function slider_right(id_slider) {
    document.getElementById(id_slider).style.left= "-1056px";
}
if (document.getElementsByClassName("row").left < 100) {
    document.getElementById("next_left").style.display = "none"
}
