alert ("مرحباً بك في موقعي! أنا طلال وسوف أحسب درجتك" )

let grade = prompt('ادخل درجتك')
console.log(grade)

if (grade >= 90)
{
    console.log ('%cقد حصلت على امتياز 🥳 ', 'color:blue');
}
else if (grade >=80){
 console.log("%cلقد حصلت على جيد جداً🤩", 'color:red');
}
else if (grade >= 70){
    console.log('%c لقد حصلت على جيد🙂' , 'color:purple')
}
else if(grade>=60){
    console.log('%c لقد حصلت على مقبول😕' , 'color:black')
}
else if(grade >=50){
    console.log("%c لقد حصلت على ضعيف☹️", "color: green" )
}
else {
   console.log(" %c راسب " , 'color: orange ')
}
// جافاسكربت ليست جافا