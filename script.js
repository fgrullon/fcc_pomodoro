$(function(){

var running  = false; 
var work = $(".wminutes");
var relax = $(".rminutes");

var work_period = 25;
var relax_period = 5;
work.text(work_period);
relax.text(relax_period);

//Start Timer
$("#timer").click(function(){

	if(running === false){
		running = true;
    document.getElementById("foot").style.color = "#98FB98";
    document.getElementById("foot").innerHTML = "Work Time";
 
    start("w", (work_period));
		
	}else{
		clearInterval(timer);
		running = false;
	}
	
});



//Add and Subtract button for work time

$(".wadd").click(function(){
	if(running === false){
		  work.text(work_period +=1);
	}

});

$(".wsubt").click(function(){
if(running === false){
  if(work_period > 1){
  	work.text(work_period -=1);
  }
}
});


//Add and Subtract button for relax time

$(".radd").click(function(){
	if(running === false){
		  relax.text(relax_period +=1);
	}

});

$(".rsubt").click(function(){
if(running === false){
  if(relax_period > 1){
  	relax.text(relax_period -=1);
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
        document.getElementById("foot").style.color = "#FF0000";
        document.getElementById("foot").innerHTML = "Relax";    			
				start("b", (relax_period));
    		}else if (op === "b"){
    			clearInterval(timer); 
          document.getElementById("foot").style.color = "#98FB98";
          document.getElementById("foot").innerHTML = "Work Time";
    			start("w", (work_period));
    		}
    	}
			

  		//Sayonara
    }, 1000);

 
}  


    
});
