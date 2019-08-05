var page1 = `<header> 
<div class = "content_header">
    <svg class= "logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.054 53.512">
        <path id="Union_2" data-name="Union 2" d="M61.858,54.353a18.163,18.163,0,0,1-4.667-12.281,17.324,17.324,0,0,1,5.023-12.854,17.528,17.528,0,0,1,12.893-4.983,16.482,16.482,0,0,1,12.281,5.082,17.322,17.322,0,0,1,4.964,12.6A17.454,17.454,0,0,1,87.388,54.65a16.7,16.7,0,0,1-12.439,5.063Q66.524,59.712,61.858,54.353ZM69.491,35.9a8.161,8.161,0,0,0-2.254,5.774,9.2,9.2,0,0,0,2.235,6.249,6.861,6.861,0,0,0,10.66.059,8.567,8.567,0,0,0,2.254-5.913,8.837,8.837,0,0,0-2.254-6.012,6.816,6.816,0,0,0-5.26-2.57A7.11,7.11,0,0,0,69.491,35.9Zm-58.9,18.9L.526,58.669l4.9-9.061A27.174,27.174,0,0,1,0,32.659,25.5,25.5,0,0,1,7.614,14.071,24.828,24.828,0,0,1,25.945,6.358q13.685,0,21.041,11.984L39.551,25.3a16.039,16.039,0,0,0-5.774-6.031A14.237,14.237,0,0,0,16,21.9a15.161,15.161,0,0,0-4.489,10.916A15.7,15.7,0,0,0,16,44.149,14.5,14.5,0,0,0,26.816,48.8a13.633,13.633,0,0,0,6.625-1.741q3.185-1.74,5.122-6.526h-12.3V30.4H50.23v6.724q0,5.181-3.559,11.134a21.549,21.549,0,0,1-9.374,8.7,27.233,27.233,0,0,1-11.747,2.75A23.938,23.938,0,0,1,10.593,54.8Zm113.043-.313a19.144,19.144,0,0,1-4.192-12.5,18.508,18.508,0,0,1,4.469-12.478,13.568,13.568,0,0,1,10.6-5.2,10.587,10.587,0,0,1,5.26,1.305,20.72,20.72,0,0,1,4.944,4.153V25.066h10.125V59H144.716V53.186h-.158a17.628,17.628,0,0,1-4.785,4.924,10.981,10.981,0,0,1-5.972,1.523A12.7,12.7,0,0,1,123.636,54.491Zm8.622-17.66a9.039,9.039,0,0,0-2.017,6.032,7.751,7.751,0,0,0,1.919,5.477,6.542,6.542,0,0,0,5.043,2.077,6.658,6.658,0,0,0,5.142-2.393,8.4,8.4,0,0,0,2.136-5.794,7.807,7.807,0,0,0-2.136-5.478,6.673,6.673,0,0,0-5.062-2.313A6.312,6.312,0,0,0,132.258,36.832Zm77.975,15.781q-5.517-6.94-5.518-18.252,0-12.024,5.4-19.282a16.89,16.89,0,0,1,14.218-7.258h.317A17.191,17.191,0,0,1,238.966,14.7q5.339,6.882,5.34,18.391,0,13.447-5.933,19.954t-13.724,6.506A17.543,17.543,0,0,1,210.233,52.612Zm7.574-30.632q-2.492,4.39-2.491,12.221,0,7.119,2.531,11.39t6.645,4.271q4.192,0,6.7-4.271t2.511-11.549q0-7.672-2.452-12.063t-6.605-4.39Q220.3,17.59,217.806,21.981ZM183.516,59V46.937H161.091V37.6l23.295-29.07h10.2V37.682h4.786v9.255H194.59V59ZM170.354,37.682h13.163V21.2h-.158ZM101.567,59V6.2h10.125V59ZM301.761,24.278a6.722,6.722,0,0,1-1.729-4.548,6.415,6.415,0,0,1,1.86-4.761,6.494,6.494,0,0,1,4.775-1.846,6.1,6.1,0,0,1,4.549,1.883,6.416,6.416,0,0,1,1.838,4.666,6.466,6.466,0,0,1-1.838,4.717,6.189,6.189,0,0,1-4.607,1.875A6.084,6.084,0,0,1,301.761,24.278Zm2.827-6.833a3.021,3.021,0,0,0-.835,2.138,3.409,3.409,0,0,0,.828,2.315,2.54,2.54,0,0,0,3.947.022,3.17,3.17,0,0,0,.835-2.19,3.269,3.269,0,0,0-.835-2.227,2.521,2.521,0,0,0-1.948-.952A2.633,2.633,0,0,0,304.588,17.446ZM286.7,24.462a6.646,6.646,0,0,1-1.758-4.848,6.259,6.259,0,0,1,1.853-4.6,6.187,6.187,0,0,1,4.563-1.86,5.961,5.961,0,0,1,4.548,1.956,6.886,6.886,0,0,1,1.824,4.885v.6h-8.98a3.03,3.03,0,0,0,.8,1.977,2.266,2.266,0,0,0,1.692.762,3.046,3.046,0,0,0,2.71-1.568L297.4,22.91a6.4,6.4,0,0,1-5.962,3.354A6.3,6.3,0,0,1,286.7,24.462Zm2.937-8.13a2.657,2.657,0,0,0-.857,1.743h5.068q-.527-2.358-2.417-2.359A2.642,2.642,0,0,0,289.639,16.332Zm-18.928,7.983a7.1,7.1,0,0,1-1.528-4.614,7.1,7.1,0,0,1,1.579-4.65,4.755,4.755,0,0,1,3.788-1.927,4.449,4.449,0,0,1,2.12.462,6.54,6.54,0,0,1,1.769,1.5V6.444h3.779V26h-3.691V23.846h-.059a4.83,4.83,0,0,1-4.066,2.359A4.6,4.6,0,0,1,270.711,24.315Zm3.245-6.621a3.213,3.213,0,0,0-.8,2.3,2.923,2.923,0,0,0,.709,1.977,2.186,2.186,0,0,0,1.716.82,2.59,2.59,0,0,0,2-.886,3.162,3.162,0,0,0,.8-2.2,2.875,2.875,0,0,0-.781-2,2.5,2.5,0,0,0-1.921-.858A2.362,2.362,0,0,0,273.956,17.694ZM262.459,26V13.4h3.75V26ZM250.97,26,245.1,13.4h3.96l3.46,7.384,3.453-7.384H259.9L254.03,26Zm11.694-15.6a2.328,2.328,0,0,1,0-3.306,2.344,2.344,0,0,1,4,1.646,2.339,2.339,0,0,1-4,1.66Z" transform="translate(0 -6.2)" fill="#000a3c"/>
    </svg>

    <ul class="menu_left">
        <li class="drop_leng">
            <a href="">
                <span class="dropdown"></span>   
                <span class="kind">Thể Loại</span>
            </a>
            <ul class="sub_menu">
                <li><a href="">Giáo Dục</a></li>
                <li><a href="">Phong Cách Sống</a></li>
                <li><a href="">Công Nghệ</a></li>
                <li><a href="">Khám Phá</a></li>
                <li><a href="">Giải Trí</a></li>
                <li><a href="">Khoa Học</a></li>
                <li><a href="">Thể Thao</a></li>
                <li><a href="">Âm Nhạc</a></li>
                <li><a href="">Phim Ngắn</a></li>
                <li><a href="">Ted Talk</a></li>
            </ul>
        </li>
        <li>
            <a href="">Document</a>
           
        </li>
        <li><a href="">Contact us</a></li>
        <li><a href="">About</a></li> 
        <li><a href="">Blog</a></li>
        <li><a href="">Donate</a></li>
    </ul>

    <div class="profile">
        <span><img src="image/person.png"></span>
        <ul class="menu_pro">
            <li><a href="">Profile</a></li>
            <li><a href="">Nạp Mã Thẻ</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Logout</a></li>
        </ul>  
    </div>
</div>  
<div class="navbar">
    <div class="content_navbar">
            <input type="text" placeholder="Search.." name="search">
    </div>
</div>              
</header>

<div class="container_clip">
<div class= "top_clip">
    <h3 class="title_topclip">NỔI BẬT</h3>
<!-- Trong phần này có icon_play, opacity, descrip là class chung cho tất cả video -->
    <div  class="first_clip style_clip"  onclick= "run_allclip('video_0')">                         
        <div class="clip_1"><img src="image/video_img/whithoutme.jpg" ></div>
        <div class="icon_play"><img src="image/icon_play.png"></div> 
        <div class="opacity"></div>
        <div class="descrip">
            <h3>Halsey - Without Me</h3>
            <p>Em sợ phải rời xa anh , Em yêu vì anh ...</p>
        </div>
    </div>
<!-- Clip 2 & 3 style giống nhau -->
    <div class="double_clip">
        <div class="clip23 style_clip" onclick= "run_allclip('video_1')">
            <div class="two_img"><img src="image/video_img/havana.jpg" ></div>
            <div class="opacity"></div>
            <div class="icon_play"><img src="image/icon_play.png"></div>
            <div class="descrip">
                <h3>Camila Cabello - Havana</h3>
                <p>Half of my heart is in Havana, ooh-na-na</p>
            </div>
        </div>
        <div class="clip23 clip3 style_clip" onclick= "run_allclip('video_2')" href="clip_gola.html">
            <div class="two_img"><img src="image/video_img/lily.jpg" ></div>
            <div class="opacity"></div>
            <div class="icon_play"><img src="image/icon_play.png"></div>
            <div class="descrip">
                <h3>Lily_Alan Walker, K-391, Hollow</h3>
                <p>Lily là một cô bé sợ thế giới rộng lớn ...</p>
            </div>
        </div>
    </div>
</div>
<!-- tất cả phần clip bên dưới 3 clip đầu sẽ có style description giống nhau & khác 3 clip trên -->
<div class="all_clip">
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" id ="next_left" onclick="slider_left('slider_1', 0)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" id= "next_right" onclick="slider_right('slider_1', 0)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_1">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" onclick="slider_left('slider_2', 1)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" onclick="slider_right('slider_2', 1)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_2">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" onclick="slider_left('slider_3', 2)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" onclick="slider_right('slider_3', 2)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_3">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" onclick="slider_left('slider_4', 3)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" onclick="slider_right('slider_4', 3)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_4">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" onclick="slider_left('slider_5', 4)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" onclick="slider_right('slider_5', 4)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_5">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" onclick="slider_left('slider_6', 5)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" onclick="slider_right('slider_6', 5)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_6">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="title_topclip">MỚI NHẤT</h3>
    <div class="container_slider">
        <div class="next_clip next_left" onclick="slider_left('slider_7', 6)"><img src="image/nextleft.png"></div>
        <div class="next_clip next_right" onclick="slider_right('slider_7', 6)"><img src="image/nextright.png"></div>
        <div class="slider_row">
            <div class="row" id="slider_7">
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/onmy_way.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3> On My Way_Alan Walker, Farruko</h3>
                        <p>Họ không cần nhìn thấy tôi khóc ngay cả khi</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/takemehand.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Take Me Hand - Dance Daishi</h3>
                        <p>Nắm lấy tay tôi. Ở gần tôi, làm người yêu</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/imnother.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>I'M NOT HER</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/Letmedownslowly.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Let Me Down Slowly</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Shawn Mendes, Camila Cabello - Señorita</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
                <div class="row_clip style_clip">
                    <div class= "view">view</div>
                    <div class="img_row"><img src="image/video_img/thankyou_next.jpg" ></div>
                    <div class="opacity"></div>
                    <div class="icon_play"><img src="image/icon_play.png"></div>
                    <div class="descrip_row">
                        <h3>Đây Là Tên Clip</h3>
                        <p>Đây là chú thích clip</p>
                    </div>
                    <div class= "time">time</div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
<footer>
<div class="content_footer">
    <div class="link">
            <p>Link: </p>
            <ul>
                <li><a href="">Blog</a></li>
                <li><a href="">Learn vs Video</a></li>
                <li><a href="">Shop</a></li>
            </ul>
    </div>
    <div class="media">
        <p>Media: </p>
        <ul>
            <li><a href="">Youtube</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Linkedin</a></li>
        </ul>
    </div>
    <p>Copyright ©2017-2019 Gola40. All rights reserved.</p>
</div>
</footer>`

var page2= `<header>
<div class = "content_header">
    <svg class= "logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.054 53.512">
        <path id="Union_2" data-name="Union 2" d="M61.858,54.353a18.163,18.163,0,0,1-4.667-12.281,17.324,17.324,0,0,1,5.023-12.854,17.528,17.528,0,0,1,12.893-4.983,16.482,16.482,0,0,1,12.281,5.082,17.322,17.322,0,0,1,4.964,12.6A17.454,17.454,0,0,1,87.388,54.65a16.7,16.7,0,0,1-12.439,5.063Q66.524,59.712,61.858,54.353ZM69.491,35.9a8.161,8.161,0,0,0-2.254,5.774,9.2,9.2,0,0,0,2.235,6.249,6.861,6.861,0,0,0,10.66.059,8.567,8.567,0,0,0,2.254-5.913,8.837,8.837,0,0,0-2.254-6.012,6.816,6.816,0,0,0-5.26-2.57A7.11,7.11,0,0,0,69.491,35.9Zm-58.9,18.9L.526,58.669l4.9-9.061A27.174,27.174,0,0,1,0,32.659,25.5,25.5,0,0,1,7.614,14.071,24.828,24.828,0,0,1,25.945,6.358q13.685,0,21.041,11.984L39.551,25.3a16.039,16.039,0,0,0-5.774-6.031A14.237,14.237,0,0,0,16,21.9a15.161,15.161,0,0,0-4.489,10.916A15.7,15.7,0,0,0,16,44.149,14.5,14.5,0,0,0,26.816,48.8a13.633,13.633,0,0,0,6.625-1.741q3.185-1.74,5.122-6.526h-12.3V30.4H50.23v6.724q0,5.181-3.559,11.134a21.549,21.549,0,0,1-9.374,8.7,27.233,27.233,0,0,1-11.747,2.75A23.938,23.938,0,0,1,10.593,54.8Zm113.043-.313a19.144,19.144,0,0,1-4.192-12.5,18.508,18.508,0,0,1,4.469-12.478,13.568,13.568,0,0,1,10.6-5.2,10.587,10.587,0,0,1,5.26,1.305,20.72,20.72,0,0,1,4.944,4.153V25.066h10.125V59H144.716V53.186h-.158a17.628,17.628,0,0,1-4.785,4.924,10.981,10.981,0,0,1-5.972,1.523A12.7,12.7,0,0,1,123.636,54.491Zm8.622-17.66a9.039,9.039,0,0,0-2.017,6.032,7.751,7.751,0,0,0,1.919,5.477,6.542,6.542,0,0,0,5.043,2.077,6.658,6.658,0,0,0,5.142-2.393,8.4,8.4,0,0,0,2.136-5.794,7.807,7.807,0,0,0-2.136-5.478,6.673,6.673,0,0,0-5.062-2.313A6.312,6.312,0,0,0,132.258,36.832Zm77.975,15.781q-5.517-6.94-5.518-18.252,0-12.024,5.4-19.282a16.89,16.89,0,0,1,14.218-7.258h.317A17.191,17.191,0,0,1,238.966,14.7q5.339,6.882,5.34,18.391,0,13.447-5.933,19.954t-13.724,6.506A17.543,17.543,0,0,1,210.233,52.612Zm7.574-30.632q-2.492,4.39-2.491,12.221,0,7.119,2.531,11.39t6.645,4.271q4.192,0,6.7-4.271t2.511-11.549q0-7.672-2.452-12.063t-6.605-4.39Q220.3,17.59,217.806,21.981ZM183.516,59V46.937H161.091V37.6l23.295-29.07h10.2V37.682h4.786v9.255H194.59V59ZM170.354,37.682h13.163V21.2h-.158ZM101.567,59V6.2h10.125V59ZM301.761,24.278a6.722,6.722,0,0,1-1.729-4.548,6.415,6.415,0,0,1,1.86-4.761,6.494,6.494,0,0,1,4.775-1.846,6.1,6.1,0,0,1,4.549,1.883,6.416,6.416,0,0,1,1.838,4.666,6.466,6.466,0,0,1-1.838,4.717,6.189,6.189,0,0,1-4.607,1.875A6.084,6.084,0,0,1,301.761,24.278Zm2.827-6.833a3.021,3.021,0,0,0-.835,2.138,3.409,3.409,0,0,0,.828,2.315,2.54,2.54,0,0,0,3.947.022,3.17,3.17,0,0,0,.835-2.19,3.269,3.269,0,0,0-.835-2.227,2.521,2.521,0,0,0-1.948-.952A2.633,2.633,0,0,0,304.588,17.446ZM286.7,24.462a6.646,6.646,0,0,1-1.758-4.848,6.259,6.259,0,0,1,1.853-4.6,6.187,6.187,0,0,1,4.563-1.86,5.961,5.961,0,0,1,4.548,1.956,6.886,6.886,0,0,1,1.824,4.885v.6h-8.98a3.03,3.03,0,0,0,.8,1.977,2.266,2.266,0,0,0,1.692.762,3.046,3.046,0,0,0,2.71-1.568L297.4,22.91a6.4,6.4,0,0,1-5.962,3.354A6.3,6.3,0,0,1,286.7,24.462Zm2.937-8.13a2.657,2.657,0,0,0-.857,1.743h5.068q-.527-2.358-2.417-2.359A2.642,2.642,0,0,0,289.639,16.332Zm-18.928,7.983a7.1,7.1,0,0,1-1.528-4.614,7.1,7.1,0,0,1,1.579-4.65,4.755,4.755,0,0,1,3.788-1.927,4.449,4.449,0,0,1,2.12.462,6.54,6.54,0,0,1,1.769,1.5V6.444h3.779V26h-3.691V23.846h-.059a4.83,4.83,0,0,1-4.066,2.359A4.6,4.6,0,0,1,270.711,24.315Zm3.245-6.621a3.213,3.213,0,0,0-.8,2.3,2.923,2.923,0,0,0,.709,1.977,2.186,2.186,0,0,0,1.716.82,2.59,2.59,0,0,0,2-.886,3.162,3.162,0,0,0,.8-2.2,2.875,2.875,0,0,0-.781-2,2.5,2.5,0,0,0-1.921-.858A2.362,2.362,0,0,0,273.956,17.694ZM262.459,26V13.4h3.75V26ZM250.97,26,245.1,13.4h3.96l3.46,7.384,3.453-7.384H259.9L254.03,26Zm11.694-15.6a2.328,2.328,0,0,1,0-3.306,2.344,2.344,0,0,1,4,1.646,2.339,2.339,0,0,1-4,1.66Z" transform="translate(0 -6.2)" fill="#000a3c"/>
    </svg>

    <ul class="menu_left">
        <li class="drop_leng">
            <a href="">
                <span class="dropdown"></span>   
                <span class="kind">Thể Loại</span>
            </a>
            <ul class="sub_menu">
                <li><a href="">Giáo Dục</a></li>
                <li><a href="">Phong Cách Sống</a></li>
                <li><a href="">Công Nghệ</a></li>
                <li><a href="">Khám Phá</a></li>
                <li><a href="">Giải Trí</a></li>
                <li><a href="">Khoa Học</a></li>
                <li><a href="">Thể Thao</a></li>
                <li><a href="">Âm Nhạc</a></li>
                <li><a href="">Phim Ngắn</a></li>
                <li><a href="">Ted Talk</a></li>
            </ul>
        </li>
        <li>
            <a href="">Document</a>
           
        </li>
        <li><a href="">Contact us</a></li>
        <li><a href="">About</a></li> 
        <li><a href="">Blog</a></li>
        <li><a href="">Donate</a></li>
    </ul>

    <div class="profile">
        <span><img src="image/person.png"></span>
        <ul class="menu_pro">
            <li><a href="">Profile</a></li>
            <li><a href="">Nạp Mã Thẻ</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Logout</a></li>
        </ul>  
    </div>
</div>  
<div class="navbar">
    <div class="content_navbar">
            <input type="text" placeholder="Search.." name="search">
    </div>
</div>              
</header>

<div class = "watch_clip"> 
<div class= "content_video">
    <div class = "box_left">
        <div id = "video"></div>
        <div id = "subtitle_1"></div>
        <div id = "box_like"></div>
    </div>

    <div id = "subtitle_2"></div>
    
</div>
<div class= "secondary">
    <div id = "guide">
        <ul class= "list_guide">
            <li onclick = "click_guide('basic_wordl')">Basic Wordl</li>
            <li onclick = "click_guide('grammar')">Ngữ Pháp</li>
        </ul>
        <div id="content_guide">hello</div>
    </div>
    <div id="recommend"></div>
</div>
</div>
<footer>
<div class="content_footer">
    <div class="link">
            <p>Link: </p>
            <ul>
                <li><a href="">Blog</a></li>
                <li><a href="">Learn vs Video</a></li>
                <li><a href="">Shop</a></li>
            </ul>
    </div>
    <div class="media">
        <p>Media: </p>
        <ul>
            <li><a href="">Youtube</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Linkedin</a></li>
        </ul>
    </div>
    <p>Copyright ©2017-2019 Gola40. All rights reserved.</p>
</div>
</footer>`
var data_allclip = {
    video_0: {
        link: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4w7_5O4Rhl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sub_1: "edsfdsfsdfsdfsdfsdfsdfsdfsdf",
        sub_2: "sdfgsdfffffffffffsdsdsdsdsdsdsd",
        box_like: "hghdgdhdfgdfgdfgdfgdfgdfgdfgdfgd",
        video_next: "sdfsdsdsdsdsdsdsdsdsdsdsdsdsdsd",
        box_gui: {
            basic_wordl: "0000000000sdfsdfsdfsdfsdfsdfsdff",
            grammar: "000000000000d0fasfasdfasasádasdasdd"
        }       
    },

    video_1: {
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4w7_5O4Rhl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sub_1: "edsfdsfsdfsdfsdfsdfsdfsdfsdf",
        sub_2: "sdfgsdfffffffffffsdsdsdsdsdsdsd",
        box_like: "hghdgdhdfgdfgdfgdfgdfgdfgdfgdfgd",
        video_next: "sdfsdsdsdsdsdsdsdsdsdsdsdsdsdsd",
        box_gui: {
            basic_wordl: "0000000000sdfsdfsdfsdfsdfsdfsdff",
            grammar: "000000000000d0fasfasdfasasádasdasdd"
        }       
    },

    video_3: {
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4w7_5O4Rhl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sub_1: "edsfdsfsdfsdfsdfsdfsdfsdfsdf",
        sub_2: "sdfgsdfffffffffffsdsdsdsdsdsdsd",
        box_like: "hghdgdhdfgdfgdfgdfgdfgdfgdfgdfgd",
        video_next: "sdfsdsdsdsdsdsdsdsdsdsdsdsdsdsd",
        box_gui: {
            basic_wordl: "0000000000sdfsdfsdfsdfsdfsdfsdff",
            grammar: "000000000000d0fasfasdfasasádasdasdd"
        }       
    },
    // video_1: {
    //     basic_wordl: "1111111111111sdfsdfsdfsdfsdfsdfsdff",
    //     grammar: "111111111111dfasfasdfasasádasdasdd"
    // },

    // video_2: {
    //     basic_wordl: "222222222222sdfsdfsdfsdfsdfsdfsdff",
    //     grammar: "2222222222222dfasfasdfasasádasdasdd"
    // },

    // video_3: {
    //     basic_wordl: "33333333333333332222222222sdfsdfsdfsdfsdfsdfsdff",
    //     grammar: "33333333333333333333333332dfasfasdfasasádasdasdd"
    // },
}