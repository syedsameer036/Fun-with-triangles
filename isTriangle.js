const inputs = document.querySelectorAll('.angles');
const trianglebtn = document.querySelector('#btn');
const outputD = document.querySelector("#output");

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


function calculatedumOfAngles(angle1,angle2,angle3){
    const sumofTriangles = angle1 + angle2 + angle3;
    
   return sumofTriangles;
}


function isTriangle(){
    const sumofTriangles=calculatedumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if(sumofTriangles === 180){
        outputD.innerText = "Yay! angles form  a triangle";
        console.log("Yay ,angles form a triangle");
        

    }else{
        outputD.innerText = "Oh Oh! angles do not form a triangle";
        console.log("Oh On! angles do not form a triangle");
        
    }
    

    
}




trianglebtn.addEventListener("click",isTriangle)

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})