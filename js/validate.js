function checkNull(idErr, value){
    if(value.trim().length == 0){
        document.getElementById(idErr).innerHTML = "Nội dung không được để trống";
        return false;
    }
    else{
        document.getElementById(idErr).innerHTML = "";
        return true;
    }
}

function checkLength(min,max,idErr,value){
    var length = value.trim().length;
    if(length < min || length > max){
        document.getElementById(idErr).innerText = `Độ dài kí từ phải từ ${min} dên ${max}`
        return false;
    }
    else{
        document.getElementById(idErr).innerText = "";
    }
}

// function checkMail(idErr,value){
//     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if(re.test(value)){
//         document.getElementById(idErr).innerHTML = "";
//         return true;
//     }
//     else{
//         document.getElementById(idErr).innerHTML = "Email không hợp lệ";
//         return false;
//     }
// }