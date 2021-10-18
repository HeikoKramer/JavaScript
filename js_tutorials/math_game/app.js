const gameArea = document.querySelector('.game');
const btn      = document.createElement('button');
const output   = document.createElement('div');
const answer   = document.createElement('input');

output.textContent = "Click the button to start the game";
btn.textContent    = "Start Game";
gameArea.append(output);
gameArea.append(btn);

const opts = ['*','/','+','-'];
const game = {maxValue:10,questions:10,oVals:[0,2,3],curQue:0,hiddenVal:3};

btn.addEventListener('click', startGame);

function startGame() {
  // btn.style.display = 'none';
  game.curQue = 0;
  buildQuestion();
}

function buildQuestion() {
  if(game.curQue < game.questions) {
    game.curQue++;
    output.innerHTML = '';
    let vals = [];
    vals[0] = Math.floor(Math.random()*(game.maxValue+1));
    vals[1] = Math.floor(Math.random()*(game.maxValue+1));
    game.oVals.sort(()=>{return 0.5 - Math.random()});
    if(game.oVals[0] === '1') {
      let temp = vals[0] * vals[1];
      vals.unshift(temp);
      console.log('temp: ' + temp);
    } else {
      
      vals[2] = eval(vals[0] + opts[game.oVals[0]] + vals[1]);
    }
    vals[3] = opts[game.oVals[0]];
    console.log(vals);
    
    // console.log(game.oVals);
    let hiddenVal;
    if(game.hiddenVal != 3) {
      hiddenVal = game.hiddenVal;
    } else {
      hiddenVal = Math.floor(Math.random()*3);
    }
    console.log('hiddenVal: ' + hiddenVal);

    vals[hiddenVal] = '––';
    output.innerHTML = `${vals[0]} ${vals[3]} ${vals[1]} = ${vals[2]}`;
  }
  
}