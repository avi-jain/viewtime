/*
 * Viewport Time
 * Copyright (c) 2016
 */

//polluting the global namespace
var counter = []

// window.addEventListener('load', initialize);

//Page Visibility API
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function initialize(list){

	if(arguments.length == 0){
    list = document.querySelectorAll('[id]');
    //console.log(list)
    //here list is an HTML collection and many browsers don't support forEach over 
    // NodeLists. Hence typecasting
    Array.from(list).forEach(function(element) 
      {
          //Add all elements to an array of objects
          counter.push({id:element.id, time:0});
          
      });
  }

  //Now list is an array and not a HTML Collection but since it's a passed argument
  // it's an array-like object :/
  else{
    Array.from(list).forEach(function(id) 
      {
          counter.push({id:id, time:0});   
      });
  }
  //console.log(list)
	timerId = setInterval(startTimers.bind(null,list),1000);

}

function checkViewport(el) {
	//check if element is in viewport.If in viewport increase count
	// http://www.w3schools.com/js/js_window.asp works for all "modern" browsers
  //console.log(el);
	var rect = el.getBoundingClientRect();

	//entirely within viewport
	if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&     
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) 
    {
      //console.log(counter)
      //Increase viewtime count
      counter.forEach(function(object) 
      {
        if (object.id == el.id)
        {
          object.time = object.time+1;
        }
      });
  	}

  //bigger than viewport
  //needs better logic?
	if (rect.height > window.innerHeight || document.documentElement.clientHeight) {
			if((rect.top) < 0 && (rect.bottom)>document.documentElement.clientHeight){
				//console.log(el);
        counter.forEach(function(object) 
        {
          if (object.id == el.id)
          {
            object.time = object.time+1;
          }
        });
      }
	}	      

	// Partially in viewport     
    
}

function startTimers(list) {
		Array.from(list).forEach(function(element) {
      //If list is the list of all ids created through the script, it will be a HTML collection
      // So, the next line need not be executed.
      if(!(list instanceof NodeList)){
        element = document.getElementById(element);
      }
	    checkViewport(element);
		});
}

if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change   
  document.addEventListener(visibilityChange, pauseTimer, false);
  document.addEventListener(visibilityChange, resumeTimer, false);
}

function pauseTimer(){
  //check if tab is active or not. If inactive stop counters
  if(document.hidden){
  	clearInterval(timerId);
  } 
}
function resumeTimer(){
  //check if tab is active or not. If active again, resume counters
  if(!(document.hidden)){
  	timerId = setInterval(startTimers.bind(null,list),1000);
  } 
}

/*function returnTime(){
  return counter;
}*/

