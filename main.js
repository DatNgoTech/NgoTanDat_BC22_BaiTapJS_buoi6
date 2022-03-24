/**
 * Bài Tập 1
 * Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000.
 */

document.getElementById("btnSubmit1").onclick = function () {
  // console.log("isClicked 1");
  //khai báo biến S = 0 để tính tổng các phần tử từ 1 đến n là số nhỏ nhất để tổng S < 10000.
  var n = 0;
  var S = 0;

  // sử dụng vòng lặp while với điều kiện S < 10000.
  while (S < 10000) {
    //bước nhảy của vòng lặp là n++.
    n++;
    //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp.
    S = S + n;
  }
  //show kết quả của n
  var ketQua1 = "Số nguyên dương nhỏ nhất : " + n;
  document.getElementById("footerCard1").innerHTML = ketQua1;
};

/**
 * Bài Tập 2
 * Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 +...+ x^n (Sử dụng vòng lặp và hàm)
 */

function tinhS(x, n) {
  var T = 1;
  var S = 0;
  for (var i = 1; i <= n; i++) {
    T = T * x;
    S = S + T;
  }
  // console.log("Tổng = " + S);
  document.getElementById("footerCard2").innerHTML = "Tổng = " + S;
}

document.getElementById("btnSubmit2").onclick = function () {
  var x = document.getElementById("txt_number1").value;
  var n = document.getElementById("txt_number2").value;
  tinhS(x, n);
};

/**
 * Bài Tập 3
 * Viết chương trình Tính giai thừa n
 */

document.getElementById("btnSubmit3").onclick = function () {
  var giaiThua = 1;
  var n = document.getElementById("txt_number3").value;
  for (var i = 1; i <= n; ++i) {
    giaiThua *= i;
  }
  document.getElementById("footerCard3").innerHTML =
    "Giai Thừa Bàng = " + giaiThua;
};

/**
 * Bài Tập 4
 * Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div
 * Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
 */

function change_backgroud() {
  var divs = document.getElementsByClassName("changeColor");
  for (var i = 0; i < divs.length; i++) {
    // Vị trí chẵn => màu đỏ
    if ((i + 1) % 2 == 0) {
      divs[i].style.background = "red";
      divs[i].style.color = "white";
      divs[i].innerHTML = "Chẳn";
    } else {
      // Vị trí lẽ => màu xanh
      divs[i].style.background = "blue";
      divs[i].style.color = "white";
      divs[i].innerHTML = "Lẻ";
    }
  }
}
