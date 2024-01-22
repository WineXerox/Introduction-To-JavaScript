let lotto_number = prompt("กรุณากรอกเลขที่ต้องการซื้อ :")
let random_number = Math.floor(Math.random() * 100000)
// console.log(lotto_number)
// console.log(Math.floor(Math.random() * 100))
document.getElementById("random").innerHTML = Math.floor(Math.random() * 1000000)
// document.getElementById("put").innerText = lotto_number
if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย! คุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย! คุณไม่ถูกรางวัล"
}