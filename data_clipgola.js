var page1 = `<header> 
<div class = "content_header">
<svg class = "logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 215 215">
<defs>
  <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#ffc40a"/>
    <stop offset="1" stop-color="#ff004e"/>
    <stop offset="1" stop-color="#806205"/>
  </linearGradient>
  <clipPath id="clip-path">
    <rect width="53.87" height="29.295" fill="none"/>
  </clipPath>
</defs>
<g id="Group_5" data-name="Group 5" transform="translate(-272 -348)">
  <g id="Group_3" data-name="Group 3">
    <g id="Group_4" data-name="Group 4">
      <rect id="Rectangle_1" data-name="Rectangle 1" width="215" height="215" rx="23" transform="translate(272 348)" fill="#202020"/>
      <g id="Group_2" data-name="Group 2" transform="matrix(0.996, -0.087, 0.087, 0.996, 78.32, -29.528)">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="76" cy="76" r="76" transform="translate(181 425)" fill="url(#linear-gradient)"/>
        <path id="Path_1" data-name="Path 1" d="M329.847,468.366l-72.678,50.068,76.529,7.283s9.145-38.689-3.85-57.351" transform="translate(0 4)" fill="#202020"/>
        <g id="Group_1" data-name="Group 1" transform="matrix(0.819, -0.574, 0.574, 0.819, -374.064, 6.007)">
          <g id="Repeat_Grid_1" data-name="Repeat Grid 1" transform="translate(218 726)" clip-path="url(#clip-path)">
            <g transform="translate(-218 -726)">
              <circle id="Ellipse_2" data-name="Ellipse 2" cx="26" cy="26" r="26" transform="translate(218 726)" fill="#202020"/>
            </g>
          </g>
          <path id="Path_2" data-name="Path 2" d="M218,752h53.328" transform="translate(0 3.295)" fill="#202020"/>
        </g>
      </g>
    </g>
  </g>
</g>
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
<svg class = "logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 215 215">
<defs>
  <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#ffc40a"/>
    <stop offset="1" stop-color="#ff004e"/>
    <stop offset="1" stop-color="#806205"/>
  </linearGradient>
  <clipPath id="clip-path">
    <rect width="53.87" height="29.295" fill="none"/>
  </clipPath>
</defs>
<g id="Group_5" data-name="Group 5" transform="translate(-272 -348)">
  <g id="Group_3" data-name="Group 3">
    <g id="Group_4" data-name="Group 4">
      <rect id="Rectangle_1" data-name="Rectangle 1" width="215" height="215" rx="23" transform="translate(272 348)" fill="#202020"/>
      <g id="Group_2" data-name="Group 2" transform="matrix(0.996, -0.087, 0.087, 0.996, 78.32, -29.528)">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="76" cy="76" r="76" transform="translate(181 425)" fill="url(#linear-gradient)"/>
        <path id="Path_1" data-name="Path 1" d="M329.847,468.366l-72.678,50.068,76.529,7.283s9.145-38.689-3.85-57.351" transform="translate(0 4)" fill="#202020"/>
        <g id="Group_1" data-name="Group 1" transform="matrix(0.819, -0.574, 0.574, 0.819, -374.064, 6.007)">
          <g id="Repeat_Grid_1" data-name="Repeat Grid 1" transform="translate(218 726)" clip-path="url(#clip-path)">
            <g transform="translate(-218 -726)">
              <circle id="Ellipse_2" data-name="Ellipse 2" cx="26" cy="26" r="26" transform="translate(218 726)" fill="#202020"/>
            </g>
          </g>
          <path id="Path_2" data-name="Path 2" d="M218,752h53.328" transform="translate(0 3.295)" fill="#202020"/>
        </g>
      </g>
    </g>
  </g>
</g>
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