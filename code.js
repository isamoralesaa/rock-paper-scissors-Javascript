const btnRock     = document.querySelector('.rock');
const btnPaper    = document.querySelector('.paper');
const btnScissor  = document.querySelector('.scissors');
const btnReset    = document.querySelector('.reset');
const scoreUser   = document.querySelector('.userScore');
const scoreComp   = document.querySelector('.compScore');
const labelResult = document.querySelector('.resul');
const labelInfo   = document.querySelector('.info');

const options = ['rock', 'paper', 'scissors'];
const colorBack = {'resul-green': '#28a745', 'resul-red': '#dc3545', 'resul-yellow': '#ffc107'};

let totalUser = 0; totalComp = 0;

const play = (e) => {
    const playUser     = e.target.id;
    const optRandom    = Math.floor(Math.random() * 3);
    const playComputer = options[optRandom];

    let champion = false;
    btnReset.style.display = '';
    btnReset.classList.remove('d-none');

    if (playUser == playComputer) {
        labelResult.textContent = "Tied!";
        labelInfo.innerHTML = `User selected <b>${playUser}</b> and Computer selected <b>${playComputer}</b>`;
        labelResult.style.background = colorBack['resul-yellow'];

        return false;
    }

    switch (playUser) {
        case 'rock':
            if (playComputer == 'scissors') {
                totalUser += 1;
                champion = true;
            } else if (playComputer == 'paper'){
                totalComp += 1;
            }
            break;
        case 'paper':
            if (playComputer == 'rock') {
                totalUser += 1;
                champion = true;
            } else if (playComputer == 'scissors'){
                totalComp += 1;
            }
            break;
        case 'scissors':
            if (playComputer == 'paper') {
                totalUser += 1;
                champion = true;
            } else if (playComputer == 'rock'){
                totalComp += 1;
            }
        break;
    }

    viewResults(playUser, playComputer, champion);
}

const viewResults = (playUser, playComputer, champion) => {
    const result = champion ? 'You win!' : 'You lost!';
    const color  = champion ? 'resul-green' : 'resul-red';
    const info   = `User selected <b>${playUser}</b> and Computer selected <b>${playComputer}</b>`;

    scoreUser.textContent   = totalUser;
    scoreComp.textContent   = totalComp;
    labelInfo.innerHTML     = info;
    labelResult.textContent = result;
    labelResult.style.background = colorBack[color];
}

btnReset.onclick = () => {
    scoreUser.textContent   = 0;
    scoreComp.textContent   = 0;
    totalUser = 0;
    totalComp = 0;
    labelResult.textContent = "";
    labelInfo.innerHTML = "";
    labelResult.style.background = '';
    btnReset.style.display = 'none';
};

btnRock.onclick    = play;
btnPaper.onclick   = play;
btnScissor.onclick = play;