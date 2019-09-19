
function playGame() {
    alert(" Làm theo hướng dẫn nhóe! \n\ Đầu tiên chọn khoảng số bạn muốn chơi!");
    let min = parseInt(prompt("Nhập giới hạn dưới của bạn!"));
    let max = parseInt(prompt("Nhập giới hạn trên của bạn!"));
    function random(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let instead=random(min,max);
    let number=parseInt(prompt("Bạn đoán số đi!"));
    if (number=== instead){
        alert("Giỏi quá,, hoannn hô!");
        alert(instead);
    }else if(number>instead){
        alert("lớn hơn mất rồi!Ghàaaaaaaaaaaaaa!");
        alert("Số ý là: "+instead);
        let  text=prompt("Nhập quit thì out màn hình chính \n\ Nhập linh tinh là chơi tiếp!");
        while (text !=="quit"){

            text=playGame();

        }
    }else if(number<instead){
        alert("nhỏ hơn mất rồi,Óccccccccccccccccccc");
        alert("Số ý là: "+instead);
        let  text=prompt("Nhập quit thì out màn hình chính \n\ Nhập linh tinh là chơi tiếp!");
        while (text !=="quit"){
            text=playGame();
        }
    }
}
playGame();


