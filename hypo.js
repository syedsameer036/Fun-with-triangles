const inputs = document.querySelectorAll('.base');
const btnoutput = document.querySelector('#btn');
const outputH = document.querySelector('#Houtput');

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



function calculateHypotenuse(base,hieght){
    const sumofHypotenuse = Math.sqrt(base*base + hieght*hieght);

    return sumofHypotenuse;
}




function isHypotenuse(){
    const sumofHypotenuse = calculateHypotenuse(inputs[0].value,inputs[1].value)
     outputH.innerText = +sumofHypotenuse;
    console.log(sumofHypotenuse);
    

    
}








btnoutput.addEventListener("click",isHypotenuse)

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})

