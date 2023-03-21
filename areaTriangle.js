const inputs = document.querySelectorAll('.inputss');
const btnOutput = document.querySelector('#btn');
const outputT = document.querySelector('#outputt');
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



function calculateAreaofTriangle(base,height){
    const areaOfTriangle = (base*height)/2;

    return areaOfTriangle
}




function isAreaOfTriangle(){
    const areaOfTriangle = calculateAreaofTriangle(inputs[0].value,inputs[1].value);
    outputT.innerText = "The area of Triangle is " +areaOfTriangle;
    console.log(areaOfTriangle);
    
}







btnOutput.addEventListener("click",isAreaOfTriangle);

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})