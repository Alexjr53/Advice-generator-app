async function getAdvice (){
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
}

export default getAdvice