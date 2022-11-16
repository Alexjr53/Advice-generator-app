import getAdvice from "./service/advice.js";
const adviceNumber = document.querySelector('.advice-number');
const adviceDescription = document.querySelector('.advice-description');
const btn = document.querySelector('.btn-update');

async function renderAdvice (){
    const adviceContent = await getAdvice();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;
    
    adviceNumber.innerHTML = adviceId
    adviceDescription.innerHTML = adviceText
} 

renderAdvice();

btn.addEventListener('click', renderAdvice);