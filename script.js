$(function(){

$("#timer").click(function(){
	clearInterval(x);
});


var minutes = $(".minutes");
var min = 0;
minutes.text(min);

$(".add").click(function(){
  minutes.text(min +=1);
});

$(".subt").click(function(){
  if(min > 0){
  	minutes.text(min -=1);
  }

});


var count = 60;


var x = setInterval(function() {
  
    
    document.getElementById("timer").innerHTML = "00 : " + count;
    count--;
}, 1000);


    
});



