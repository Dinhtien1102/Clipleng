# Clipleng

### slider with js 
+ Kết hợp css và js: 
    - Vấn đề 1: sử lí event click & tạo khối slider
        - khối slider cho width mong muốn và xác định vị trí cho khối slider (left= 0)
        - có 2 nút nhận sự kiện click right & left (click right slider trượt sang phải, click left trượt sang trái)
        - function sử lí event click khi click right đưa slider đến vị trí width mong muốn & click left đưa slider về vị trí ban đầu (left= "0px")
    - Vấn đề 2: button left & right
        - khi click button left thì button left ẩn & button right hiện, khi click button right thì button   right ẩn & button left hiện (vấn đề này không khó)
        - Với nhiều slider cần có nhiều class name nhưng class của các slider  có tên giống nhau, lúc này ta xác định vị trí của class để click left & right không bị lỗi   
        - Mỗi vị trí của class tương ứng với 1 số bắt đầu từ 0 (thêm giá trị tham số vào sự kiện của function        truyền  vào tham số bên sử lí function từ đó truyền tham số vào vị trí class ví dụ:                    document.getElementsByClassName('test')[vị trí bắt đàu từ 0])

    