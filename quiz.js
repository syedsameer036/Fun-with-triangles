const formE = document.querySelector('.quiz');
const btnOutput = document.querySelector('#btn-output');
const outputResult = document.querySelector('#output');

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


const correctAnswer = ['90°', 'right angled','one right angle','12,16,20'];
 
function calculateScore(){
   
    const formData = new FormData(formE);
    let score=0;
    let index =0;
    for(const value of formData.values()){
        if(value === correctAnswer[index]){
            score = score+1;
            
        }
        index = index+1;
    }
    outputResult.innerText = "Your Score is " +score;
    console.log("The score is " +score);

}




btn.addEventListener("click",calculateScore)

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})