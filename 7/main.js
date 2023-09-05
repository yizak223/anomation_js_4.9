var colorArray=[]
for (let i = 0; i < 5; i++) {
   t7.innerHTML+=
        `
        <input onchange='createArray()' id='color${i}' placeholder='color${i}' type='text'><br><br>
        `  
 
}
var colorCollection=t7.getElementsByTagName('input')
console.log(colorCollection.value);
t7.innerHTML+=`
<input id='userText' placeholder='textAny' type='text'><br>
<button id='printText'>start</button>
<button id='stopAnimationbtn'>stop</button>

<p id='textDisplay'></p>
`
printText.addEventListener('click',startInterval)
stopAnimationbtn.addEventListener('click',stopAnimation)
document.addEventListener('keydown', function(event){
    clearInterval(intervalChangeColor)
})
var counter=0
function createArray() {
    colorArray.push(colorCollection[counter].value)
    counter++
    console.log(colorArray);
}
function showTextInClr() {
    var randomNum=Math.floor((Math.random()*5))
    textDisplay.innerHTML=`${userText.value}`
    textDisplay.style=`color:${colorArray[randomNum]} ;`
} 
var intervalChangeColor
function startInterval() {
    intervalChangeColor=setInterval(showTextInClr,1000)
}
function stopAnimation() {
    clearInterval(intervalChangeColor)
}

