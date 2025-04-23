let score=10;
var x=(Math.random()*10)+1;
var f=Math.floor(x);

function ran(){

var a =document.getElementById("n").value;
var b =document.getElementById("c");
var d =document.getElementById("s");

 if(a==f){
       b.textContent="You are Correct !! 🎉";

}
 else{
b.textContent="You are Wrong !";
 score--;
d.textContent="Your Score :" + score;
}
}

