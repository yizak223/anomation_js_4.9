btnArea.innerHTML += `
<button id='startBtn'>start</button>
<button id='stopBtn'>stop</button>
`
// var intervalStopGrowing
var intervalGrowing
startBtn.addEventListener('click', startGgrowing)
stopBtn.addEventListener('click', stopgrowing)
document.addEventListener('keydown', pressENter)

document.addEventListener('keydown', pressENter) 

   

function startGgrowing() {
    intervalGrowing = setInterval(growing, 100)
}

var counterW = 15;
var counterH = 15;
function growing() {
    if (counterH<=50) {
         mainDiv.style.width = `${++counterW}vw`;
    mainDiv.style.height = `${++counterH}vh`;
    }
}
function stopgrowing() {
    clearInterval(intervalGrowing);
}

function pressENter(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        stopgrowing()
      }
}


