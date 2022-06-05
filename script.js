const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["blue","red","yellow","green"]

button.addEventListener("click", changeBackground);


let order =0;

function changeBackground() { 
    //random color
   const randomNumber = Math.floor(Math.random() * colors.length)
   const chosenColor = colors[randomNumber];
   console.log(randomNumber,chosenColor);
   body.style.backgroundColor = chosenColor;


   
// choose background color in order

//console.log(order);
//if(order == 3) order = 0
//const chosenColor = colors[order];
//order++;
//body.style.backgroundColor  = chosenColor;

}
