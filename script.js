$(function(){

var running  = false; 
var work = $(".wminutes");
var min = 25;
var relax = 5;
work.text(min);

$("#timer").click(function(){

	if(running === false){
		running = true;
		start("w", (min));
	}else{
		clearInterval(timer);
		running = false;
	}
	
});




$(".wadd").click(function(){
	if(running === false){
		  work.text(min +=1);
	}

});

$(".wsubt").click(function(){
if(running === false){
  if(min > 0){
  	work.text(min -=1);
  }
}
});

$(".radd").click(function(){
	if(running === false){
		  minutes.text(min +=1);
	}

});

$(".rsubt").click(function(){
if(running === false){
  if(min > 0){
  	minutes.text(min -=1);
  }
}
});

function start(op, millis) {

	millis = millis * 60000;

 	  timer = setInterval(function () {

 	  	var minutes = Math.floor(millis / 60000);
  		var seconds = ((millis % 60000) / 1000).toFixed(0);
    	//Aloja
    	if(millis >= 0){
    		document.getElementById("timer").innerHTML = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    		millis = millis - 1000;
    	}else{
    		if(op === "w"){
				clearInterval(timer);    			
				start("b", (relax));
    		}else if (op === "b"){
    			clearInterval(timer); 
    			start("w", (min));
    		}
    	}
			

  		//Sayonara
    }, 1000);

 
}  


    
});






      
