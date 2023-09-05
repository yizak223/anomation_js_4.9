t5.addEventListener('click',changeInteval)


var changeCOLOR=false

var changeColorInterval
function changeInteval() {
    if (changeCOLOR==false) {
        changeColorInterval=setInterval(changeColor,100) 
        changeCOLOR=true
    }
    else{
        clearInterval(changeColorInterval)
        changeCOLOR=false
    }
}

function changeColor() {
    var redNumber=Math.floor((Math.random()*255))
    var greenNumber=Math.floor((Math.random()*255))
    var blueNumber=Math.floor((Math.random()*255))
    console.log('ggg');
    t5.style=` background-color:rgb(${redNumber},${greenNumber},${blueNumber})`
}