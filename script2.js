// construir velas
var txt = "";
var i = 1
for(; i < 10; i++){
  txt += `<div class="candle" id="candle${i}">
  <div class="flames" id="flames${i}">
  <div class="font-effect-fire-animation">'</div>
    </div>
    <div class="wax"></div>
    </div>`
}
document.getElementById('container1').innerHTML = txt;
txt = "";
for(; i < 19; i++){
  txt += `<div class="candle" id="candle${i}">
  <div class="flames" id="flames${i}">
  <div class="font-effect-fire-animation">'</div>
    </div>
    <div class="wax"></div>
    </div>`
}
document.getElementById('container2').innerHTML = txt;

document.getElementById('toBlack').style.opacity = localStorage.toBlack


win()

  
for(let i = 1; i < 19; i++){
  document.getElementById('flames' + i).style.transform = `scale(${Number(localStorage.candles)})`
}
var cont =0;
function clickMe(){
  if(Storage == "undefined"){
    alert("Sorry, your browser does not have support :(");
    return;
  }

  if(localStorage.candles){
    if (Number(localStorage.candles) < 0){return}

    localStorage.candles = ((Number(localStorage.candles) *100) - (0.02 * 100)) / 100;
    localStorage.toBlack = ((Number(localStorage.toBlack) * 1000)  + (0.005 * 1000)) / 1000;
    
    for(let i = 1; i < 19; i++){
      document.getElementById('flames' + i).style.transform = `scale(${Number(localStorage.candles)})`
    }

    document.getElementById('toBlack').style.opacity = localStorage.toBlack
    
    win();
  } else {
    localStorage.candles = 200;
    localStorage.toBlack = 1;
  }
  console.log(cont)
}

function win(){
  if (Number(localStorage.candles) < 0){
    document.getElementById('toBlack').style.animationPlayState = "running";
    document.getElementById('button').style.animationPlayState = "running";
    document.getElementById('gallery').style.animationPlayState = "running";
  }
}


// localStorage.clear('candles')

function reset(){
  if(Storage !== "undefined"){

    localStorage.candles = 4;
    localStorage.toBlack = 0;

    for(let i = 1; i < 19; i++){
      document.getElementById('flames' + i).style.transform = `scale(${Number(localStorage.candles)})`
    }

    document.location.reload()
  }
}
