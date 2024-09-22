window.onscroll = function() {scrollFunction()};
const apiUrl = "http://p-stephan.de:8080/api/"
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").classList.add("smalllogo");
    document.getElementById("logo").classList.remove("biglogo");
  } else {
    document.getElementById("logo").classList.add("biglogo");
    document.getElementById("logo").classList.remove("smalllogo");
  }
}
function downloading(game){
fetch(apiUrl+"download/"+game)
  .then( response => {
  if(!response.ok) {
    throw new Error("Not Okay!")
  }
  return response.json();
})
  .then( data => {
    console.log("Data "+data);
  })
  .catch(error => {
    console.error("Error: "+error);
  });
}
function getDownloadcnt(game){
  fetch(apiUrl+"downloads/"+game)
    .then( response => {
      if(!response.ok) {
        throw new Error("Not Okay!")
      }
      return response.json();
    })
    .then( data => {
      console.log("Data "+data);
      var input = document.getElementById(game+"cnt");
      input.value = data;
    })
    .catch(error => {
      console.error("Error: "+error);
    });
}

function getDownloadcnts(){
  getDownloadcnt("noah");
  getDownloadcnt("physics");
  getDownloadcnt("game");
}
function menu() {
  var x = document.getElementById("myLinks");
  var nav = document.getElementById("topnav");
  if (x.style.display === "block") {
    nav.style.height="calc(8vh)";
    x.style.display = "none";
  } else {
    x.style.display = "block";
    nav.style.height="calc(55vh)";
  }
}
function isopen(n){
  switch(n){
    case 1:if(leftopened) return true;
      break;
    case 2:if(midopened) return true;
      break;
    case 3:if(rightopened) return true;
      break;
    default: break;
  }
}
leftopened=false;
midopened=false;
rightopened=false;
originwidth="20%";
function threeopen(n){
  if(window.innerWidth<945)return;
  var threepartsimg1 = document.getElementById("thgimg1");
  var threepartsimg2 = document.getElementById("thgimg2");
  var threepartsimg3 = document.getElementById("thgimg3");
  const left = document.getElementById("main1left");
  const mid = document.getElementById("main1mid");
  const right = document.getElementById("main1right");
  if(leftopened || midopened || rightopened){
    threeclose();
    return;
  }
  switch(n){
    case 1:
      left.style.width = "80%";
      left.style.height = "40vw";
      left.style.marginTop = "calc(-1.5vw)";
      left.style.marginLeft = "5%";
      left.style.left = "5%";
      threepartsimg1.classList.add("altimg");
      left.style.zIndex="20";
      leftopened = true;
      document.getElementById("closeleft").style.display = "block";
      break;
    case 2:
      mid.style.zIndex="20";
      mid.style.left="15%";
      mid.style.width = "80%";
      mid.style.height = "40vw";
      mid.style.marginTop = "calc(-1.5vw)";
      mid.style.marginLeft = "-5%";
      threepartsimg2.classList.add("altimg");
      midopened = true;
      document.getElementById("closemid").style.display = "block";
      break;
    case 3:
      right.style.left ="15%";
      right.style.width = "80%";
      right.style.height = "40vw";
      right.style.marginTop = "calc(-1.5vw)";
      right.style.marginLeft = "-5%";
      threepartsimg3.classList.add("altimg");
      right.style.zIndex="20";
      rightopened = true;
      document.getElementById("closeright").style.display = "block";
      break;
    default: break;
  }
}
function threeclose(){
  var threepartsimg1 = document.getElementById("thgimg1");
  var threepartsimg2 = document.getElementById("thgimg2");
  var threepartsimg3 = document.getElementById("thgimg3");
  const left = document.getElementById("main1left");
  const mid = document.getElementById("main1mid");
  const right = document.getElementById("main1right");
  threepartsimg1.src="img/noah.png";threepartsimg1.classList.remove("altimg");
  threepartsimg2.src="img/physics.png";threepartsimg2.classList.remove("altimg");
  threepartsimg3.src="img/game.png";threepartsimg3.classList.remove("altimg");
  document.getElementById("closeleft").style.display = "none";
  document.getElementById("closemid").style.display = "none";
  document.getElementById("closeright").style.display = "none";
  left.style.marginTop = 0;
  left.style.marginLeft = 0;
  left.style.left = "15%";
  left.style.height = "38vw";
  mid.style.marginTop = 0;
  mid.style.marginLeft = 0;
  mid.style.height = "38vw";
  right.style.marginTop = 0;
  right.style.marginLeft = 0;
  right.style.height = "38vw";
  left.style.width = originwidth;
  right.style.width = originwidth;
  mid.style.zIndex="3";
  right.style.zIndex="3";
  left.style.zIndex="3";
  mid.style.left = "40%";
  right.style.left = "65%";
  mid.style.width = originwidth;
  left.style.display = "block";
  mid.style.display = "block";
  right.style.display = "block";
  leftopened = false;
  midopened = false;
  rightopened = false;
}

