/*
 * Visibilitime
 * Copyright (c) 2016 Avi Jain
 */

//polluting the global namespace
var list;
var counter = new Array(); 

window.addEventListener('load', getAllIds);

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

function getAllIds(){
	//push all ids into an array
	list = document.querySelectorAll('[id]');
	//counter = new Array(list.length).fill(0);

  list.forEach(function(element) 
  {
      //vp = checkViewport(element);
      //Add all elements to an array of objects
      counter.push({id:element.id, time:0});
      
  });
	timerId = setInterval(startTimers.bind(null,list),1000);

}

function checkViewport(el) {
	//check if element is in viewport.If in viewport increase count
	// http://www.w3schools.com/js/js_window.asp works for all "modern" browsers
	var rect = el.getBoundingClientRect();

	//entirely within viewport
	if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&     
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) 
    {
    	console.log(el);
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
			if((rect.top) < 0 && (rect.bottom)>document.documentElement.clientHeight)
				console.log(el);
	}	      

	// Partially in viewport     
    
}
function startTimers(list) {
	//while(true){ An infinite loop hangs the browser
		list.forEach(function(element) {
			//vp = checkViewport(element);
	    checkViewport(element);
		});
	//}
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

