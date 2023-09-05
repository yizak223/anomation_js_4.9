t5.addEventListener('click',changeInteval)


var red
var green
var blue



function changeInteval() {
    setInterval(changeColor,100)
}

function changeColor() {
    var redNumber=Math.floor((Math.random()*255))
    var greenNumber=Math.floor((Math.random()*255))
    var blueNumber=Math.floor((Math.random()*255))
    console.log('ggg');
    t5.style=` background-color:rgb(${redNumber},${greenNumber},${blueNumber})`
}