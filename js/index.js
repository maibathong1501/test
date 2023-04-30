
// funtion: hàm thực thi 1 đoạn lệnh nào đó
function changeContent() {
    console.log(123)
    // cú pháp để truy xuất đến 1 thẻ html qua id
    var tagH1 = document.getElementById('title');
    // truy xuất nội dung của 1 thẻ <tag>innerHTML</tag>
    tagH1.innerHTML = 'hello bc45';
    // truy xuất đến hình ảnh
    // .src = 'link hinh anh.png'
    var tagImg = document.getElementById('img');
    tagImg.src ='/image/ai2.jfif';
    // cú pháp để truy xuất các giá trị nhập vào từ các thẻ input .value
    var tagInput = document.getElementById('txt');
    tagInput.value = 'cybersoft academy';
    // truy xuất đến css của thẻ .style.color = 'red' đối thuộc tính có 2 từ trở lên
    var tagTitle = document.getElementById('tieu-de');
    tagTitle.style.color = 'red';
    tagTitle.style.background = 'black';
    // truy xuất đến class của thẻ .className = 'abc';
    // debugger;
    var btn = document.getElementById('btn-click-me');
    btn.className = 'btn btn-danger';
}
// gọi hàm
// changeContent();
// Bài 1:
// input: tien luong 1h, so gio lam
function bai1() {
    var tienLuong1h = document.getElementById('tien-luong-1h').value;
var soGiolam = document.getElementById('so-gio-lam').value;
// output: tien luong: number
var tienLuong = tienLuong1h * soGiolam;
// hiển thị output ra giao diện
document.getElementById('ket-qua-bai-1').innerHTML = tienLuong;
document.getElementById('ket-qua-bai-1').className = 'alert bg-danger text-white';
}
// Biến toàn cục
var tagImg = document.getElementById('den');
var btnBatden = document.getElementById('btn-bat-den');
var btnTatden = document.getElementById('btn-tat-den');
function batDen() {
    tagImg.src = '/image/pic_bulbon.gif';
    btnBatden.className = 'btn btn-success';
    btnTatden.className = '';
}
function tatDen() {
    tagImg.src = '/image/pic_bulboff.gif'
    btnTatden.className = 'btn btn-success';
    btnBatden.className = '';
}
// bài 3:
function dangNhap() {
    var taiKhoan = document.getElementById('tai-khoan').value;
    var matKhau = document.getElementById('mat-khau').value;
    document.getElementById('ket-qua-bai-3').innerHTML = 'tài khoản: ' + taiKhoan + ' mật khẩu: ' +matKhau;
    document.getElementById('ket-qua-bai-3').className = 'alert alert-success text-white';
}
// Tính tiền tip:
function tinhTientip() {
    var soTien = document.getElementById('tong-tien').value;
    var phanTram = document.getElementById('phan-tram').value;
    var soNhanvien = document.getElementById('so-nhan-vien').value;
    var soTientip = (soTien*phanTram/100)/soNhanvien;
    document.getElementById('tien-tip-moi-nv').innerHTML = soTientip.toFixed(2) + '$';
}
// Tạo thẻ
function taoThe() {
    
    var tinNhan = document.getElementById('tin-nhan').value;
    var theDiv = `<div class="bg-danger text-light p-3 my-2">
    ${tinNhan}
    </div>`;
    document.getElementById('div-content').innerHTML += theDiv;
    tinNhan.style.placeHolder = '';
    // document.getElementById('div-content').className = 'bg-danger text-light p-3 my-2';

}

