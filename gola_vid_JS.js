function slider_left(id_slider, i) {
    document.getElementById(id_slider).style.left= "0px";
    document.getElementsByClassName('next_left')[i].style.display = "none"
    document.getElementsByClassName('next_right')[i].style.display = "block"
}
function slider_right(id_slider, i) {
    document.getElementById(id_slider).style.left= "-1056px";
    document.getElementsByClassName('next_right')[i].style.display = "none"
    document.getElementsByClassName('next_left')[i].style.display = "block"
}
// if (document.getElementsByClassName("row").left < 100) {
// document.getElementById("next_left").style.display = "none"
// }
// if ( document.getElementById("slider_1").style.left >=  0) {
//     document.getElementById("next_left").style.display = "none"
// } else {
//     document.getElementById("next_left").style.display = "block"
//     console.log("hello")
// }

// if (document.getElementById("slider_1").style.left ==0 ) {
//     document.getElementById("next_left").style.display = "none"
// }
// else {
//     document.getElementById("next_left").style.display = "block"
// }

// if (document.getElementById("next_left").style.display == "block") {
//     document.getElementById("next_right").style.display = "none"
// }
// else if (document.getElementById("next_left").style.display == "none") {
//     document.getElementById("next_right").style.display = "block"
// }
