/*
 * Visibilitime
 * Copyright (c) 2016 Avi Jain
 */

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
	var list = document.querySelectorAll('[id]');
	var counter = new Array(list.length).fill(0);
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
    	return true;
    	//counter[]++;
  	}

  //bigger than viewport
	if (rect.bottom > window.innerHeight || document.documentElement.clientHeight && 
			rect.top < 0) {

	        cond = (viewport.bottom - field.top) > (viewport.height / 2) && (field.bottom - viewport.top) > (viewport.height / 2);

	        if (cond) {
	          return true;
	        }

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
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

function pauseTimer(){
  //check if tab is active or not. If inactive stop counters
  if(document.hidden){
  	clearInterval(timerId);
  	clearInterval(reporter);
  } 
}

/*function returnTime(){
  return counter;
}*/

