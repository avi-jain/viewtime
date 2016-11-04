// window.onload() = getAllIds;
window.addEventListener('load', getAllIds);
function getAllIds(){
	//push all ids into an array
	var list = document.querySelectorAll('[id]');
	startTimers(list);
	//console.log(list);
}

function checkViewport(el) {
	//check if element is in viewport.If in viewport increase count
	var rect = el.getBoundingClientRect();
    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&     
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) 
    {
    	console.log(el);
  	}
}
function startTimers(list) {
	//while(true){ An infinite loop hangs the browser
		list.forEach(function(element) {
			//vp = checkViewport(element);
	    setInterval(checkViewport(element), 1000);
		});
	//}
}

function pauseTimer(){
  //check if tab is active or not. If inactive stop counters
  //clearInterval();
}

/*function returnTime(){
  for(){
      console.log();
  }
}*/

