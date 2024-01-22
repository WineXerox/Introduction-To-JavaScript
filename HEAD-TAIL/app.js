let round = prompt("คุณจะเล่นเกมทั้งหมดกี่รอบ ?")
sum = 0
for(var i = 1; i <= round; i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย")
    var random_answer = ""
    sum = sum + parseInt(answer)
    if(Math.floor(Math.random() *10) <= 4){
        //หัว
        random_answer = "หัว"
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ตอบถูก ! ยินดีด้วย")
    }
    else{
        alert("ตอบผิด ! เสียใจด้วย")
    }
    // console.log(random_answer+ " : " + answer)
    document.getElementById("game-list").innerHTML += " ทายรอบที่ "+ i + " : " + answer + "<br>" + "<br>" 
    +" คำตอบที่ถูกต้อง คือ "  + answer + "<br>" + "<br>" 
}
document.getElementById("result").innerHTML = " จำนวนที่ทายถูก คือ "+ round + " รอบ "

