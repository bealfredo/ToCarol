document.getElementById("energy").style.height = localStorage.click + "%";

win();

function clickMe(){
  if (Storage == "undefined"){ 
    alert("Sorry, your browser does not have support :(");
    return;
  }

  if (localStorage.click){
    if (Number(localStorage.click) > 99){return;}

    localStorage.click = Number(localStorage.click) + 10;
    document.getElementById("energy").style.height = localStorage.click + "%";
    console.log(localStorage.click)
  } else {
    localStorage.click = 1;
  }

  win()
}

function win(){
  if (Number(localStorage.click) == 100){
    document.getElementById('horse').style.animationPlayState = 'running';
    document.getElementById('msg').style.animationPlayState = 'running';
    document.getElementById('card').style.animationPlayState = 'running';
    document.getElementById('button').style.pointerEvents = "none";
    document.getElementById('button').style.opacity = "0.2";
  }
}


function reset(){
  if(Storage != 'undefined'){

    localStorage.click = 0;
    document.getElementById("energy").style.height = localStorage.click + "%";
    console.log(localStorage.click)

    document.location.reload()

  }
}