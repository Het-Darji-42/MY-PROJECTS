// function makeTosses(){
// for(var i = 1 ; i <= 198; i++){
//     let random = Math.floor(Math.random()*10)
//     document.querySelector(".pbtm").innerHTML += `<div class="toss">${random}</div>`;
// }};
function makeTosses(){
    let clutter = "";
for(var i=1 ; i<= 198; i++){
    let random = Math.floor(Math.random()*10);
    clutter += `<div class="toss">${random}</div>`;
}   
document.querySelector(".pbtm").innerHTML = clutter;
}

var num ;
function hitNum(){
    num = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").innerHTML = `${num}`;
};
var timmer = 60;
function UpdateTimmer(){
   
    let timerdecreament = setInterval(() => {
        if(timmer > 0 ){
       
        timmer--;
        document.querySelector("#TimmerVal").innerHTML = timmer
        }
        else{
            clearInterval(timerdecreament)
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over </h1>`
          

        } 
    }, 1000); 
}

var score = 0;
function scoreIncreament(){
    score += 10;
    document.querySelector("#scoreVal").innerHTML = score  
}

 document.querySelector(".pbtm").addEventListener("click",(chacha)=>{
    var clickedValue  = Number(chacha.target.innerHTML)
    console.log(clickedValue)

    if (clickedValue == num){
        scoreIncreament();
        makeTosses();
        hitNum();
    }
 })

makeTosses();
hitNum();
UpdateTimmer();
