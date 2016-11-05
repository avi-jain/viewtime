Use anon functions or bind when need to pass parameters to setInterval

// window.onload() = getAllIds;
Rather ->
window.addEventListener('load', getAllIds);

document.documentElement.clientWidth -> gives height of current viewport