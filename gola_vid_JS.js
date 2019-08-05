document.getElementById('app').innerHTML= page1
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
var name_video_global
// first load page 2
function  run_allclip(name_video) {
    name_video_global = name_video
    document.getElementById('app').innerHTML= page2
    document.getElementById('video').innerHTML = data_allclip[name_video].link
    document.getElementById('subtitle_1').innerHTML= data_allclip[name_video].sub_1
    document.getElementById('subtitle_2').innerHTML= data_allclip[name_video].sub_2
    document.getElementById('box_like').innerHTML= data_allclip[name_video].box_like
    document.getElementById('recommend').innerHTML= data_allclip[name_video].video_next
}
function click_guide(post_guide){
    document.getElementById('content_guide').innerHTML= data_allclip[name_video_global].box_gui[post_guide]
}

// this.name_video = name_video
// console.log(this.name_video)
// function tuan(name_video) {
//     document.getElementById("content_guide").innerHTML=  data_allclip[name_video].box_gui.basic_wordl
    /*setTimeout(() => {
        console.log("xxxx")
        document.getElementById("content_guide").innerHTML=  data_allclip[name_video].box_gui.basic_wordl
    }, 5000)*/
// }

// Learn
/*
var car = "caaaa o to con"
var car2 = {
    'loai': "O to fun",
    loai_1: "Funny"
}
console.log(car + '-1')
console.log(this.car + '-2')
console.log(this.car2.loai_1)

    // Cách gọi một function bên ngoài
    this.tuan(name_video)
    */
