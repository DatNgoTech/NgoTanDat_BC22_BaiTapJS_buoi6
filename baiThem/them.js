function kiemTra_SNT(n){
    // tạo biến flag
    var flag = true;

    // nếu n bé hơn 2 thì không phải số nguyên tố
    if (n < 2){
        flag = false;
    } else if (n == 2){
        flag = true;
    } else if (n % 2 == 0){
        flag = false;
    } else {
        // lặp từ 3 tới n-1 với bước nhảy là 2
        for (var i = 3; i <= Math.sqrt(n); i += 2){
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    return flag;
};

// Hàm in ra các số nguyên tố từ 1 tới n
function print_SNT()
{
    // Lấy number
    var number = document.getElementById("txt_number1").value;

    // Ép number sang kiểu INT
    number = parseInt(number);

    // Lặp để in kết quả
    var html="";
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiemTra_SNT(i)){
            html += i + ' ';
        }
    }
    document.getElementById("footerCard1").innerHTML = html;
}

document.getElementById("btnSubmit1").onclick = function(){
    print_SNT()
};