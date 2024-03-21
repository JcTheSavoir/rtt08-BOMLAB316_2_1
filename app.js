let userQuestion = document.querySelector('.userQuestion');

let questionAsked = document.createElement("div")
questionAsked.setAttribute("class","questionAsked")

const startGame = () => {
    changeClassesStart()
    let userInput = prompt("Type any Yes Or No Question");
    console.log(`UserQuestion is:${userInput}`);

    questionAsked.innerHTML = userInput
    userQuestion.append(questionAsked)

    chooseAnswer()
};

const changeClassesDuring = () => {
    document.getElementById("firstImage").classList.remove("eightBall1");
    document.getElementById("secondImage").classList.remove("hiddenEightBall");
    document.getElementById("firstAnswer").classList.remove("hiddenAnswer");
    document.getElementById("firstImage").classList.add("eightBallShake");
    document.getElementById("secondImage").classList.add("eightBall2");
    document.getElementById("firstAnswer").classList.add("theAnswer");
};

const changeClassesStart = () => {
    document.getElementById("firstImage").classList.add("eightBall1");
    document.getElementById("secondImage").classList.add("hiddenEightBall");
    document.getElementById("firstAnswer").classList.add("hiddenAnswer");
    document.getElementById("firstImage").classList.remove("eightBallShake");
    document.getElementById("secondImage").classList.remove("eightBall2");
    document.getElementById("firstAnswer").classList.remove("theAnswer")
};

const chooseAnswer = () => {
    let randomNumber = Math.floor(Math.random() * (21 - 1) + 1);
    console.log(randomNumber);
    changeClassesDuring();
    let theAnswer = document.querySelector('.theAnswer')

    theAnswer.textContent = "";

    if(randomNumber === 1) {
        theAnswer.append(`It is Certain`)
       
    } else if(randomNumber === 2) {
        theAnswer.append(`It is decidedly so`)
        
    } else if (randomNumber === 3){
        theAnswer.append(`Without a doubt`)
        
    } else if (randomNumber === 4) {
        theAnswer.append(`Yes definitely`)

    } else if (randomNumber === 5) {
        theAnswer.append(`You may rely on it`)

    } else if (randomNumber === 6) {
        theAnswer.append(`As I see it, yes`)

    } else if (randomNumber === 7) {
        theAnswer.append(`Most likely`)

    } else if (randomNumber === 8) {
        theAnswer.append(`Outlook good`)

    } else if (randomNumber === 9) {
        theAnswer.append(`Yes`)

    } else if (randomNumber === 10) {
        theAnswer.append(`Signs point to yes`)

    } else if (randomNumber === 11) {
        theAnswer.append(`Reply hazy, try again`)

    } else if (randomNumber === 12) {
        theAnswer.append(`Ask again later`)

    } else if (randomNumber === 13) {
        theAnswer.append(`Better not tell you now`)

    } else if (randomNumber === 14) {
        theAnswer.append(`Cannot predict now`)

    } else if (randomNumber === 15) {
        theAnswer.append(`Concentrate and ask again`)

    } else if (randomNumber === 16) {
        theAnswer.append(`Don't count on it`)

    } else if (randomNumber === 17) {
        theAnswer.append(`My reply is no`)

    } else if (randomNumber === 18) {
        theAnswer.append(`My sources say no`)

    } else if (randomNumber === 19) {
        theAnswer.append(`Outlook not so good`)

    } else  {
        theAnswer.append(`Very Doubtful`)

    }
}
