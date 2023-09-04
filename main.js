document.body.innerHTML+=`
<div id='secondDiv'></div>`
secondDiv.innerHTML+=`
<button id='startBtn'>start</button>
<button id='stopBtn'>stop</button>
`
// var intervalStopGrowing
var intervalGrowing 
startBtn.addEventListener('click',startGgrowing)
stopBtn.addEventListener('click',stopgrowing)

function startGgrowing() {
    intervalGrowing= setInterval(growing, 1000)
}

var counterW=15;
var counterH=15;
function growing() {
    mainDiv.style.width = `${++counterW}vw`;
    mainDiv.style.height = `${++counterH}vh`;
    console.log(counterH);
    console.log(counterW);
    intervalGrowing
}
function stopgrowing() {
    clearInterval(intervalGrowing);
}
