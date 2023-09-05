t6.innerHTML +=
    `
<input type="number" id="widthUser" placeholder='width'><br>
<input type="number" id="heightUser" placeholder='height'><br>
<button id='startGrowing'>start grow</button>
<div id='growingDiv'></div>
`

var widthUser = document.getElementById('widthUser');
var heightUser = document.getElementById('heightUser');
var growingDiv = document.getElementById('growingDiv');


var width = 1;
var height = 1;

var intervalGrowing;

widthUser.addEventListener('change', startGrowingElement);
heightUser.addEventListener('change', startGrowingElement);

function startGrowingElement() {

    var desiredWidth = parseInt(widthUser.value);
    var desiredHeight = parseInt(heightUser.value);

    if (!isNaN(desiredWidth) && !isNaN(desiredHeight)) {
        intervalGrowing = setInterval(add1PX, 100);
    }
}

function add1PX() {
    if (width < parseInt(widthUser.value)) {
        width++;
    }
    if (height < parseInt(heightUser.value)) {
        height++;
    }

    growingDiv.style = `
        background-color: black;
        width: ${width}px;
        height: ${height}px;
    `;
}
var isGrowing = true
document.addEventListener('keydown', spaveStartStop)
function spaveStartStop(event) 
{
    if (event.keyCode === 32 || event.key === 'Space') 
    {
        if (isGrowing) {
            clearInterval(intervalGrowing);
            isGrowing = false;
        } 
        else 
        {
            var desiredWidth = parseInt(widthUser.value);
            var desiredHeight = parseInt(heightUser.value);
            
            if (!isNaN(desiredWidth) && !isNaN(desiredHeight)) 
            {

                intervalGrowing = setInterval(add1PX, 100);
                isGrowing = true;
            }
        }
    }
}   