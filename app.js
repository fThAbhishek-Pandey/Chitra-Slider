const slides = document.querySelectorAll(".slide");
const start = document.querySelector(".startBtn");
const stop = document.querySelector(".stopBtn");
console.log(start);
console.log(stop);
let   counter = 0;
function carousel(){
    console.log("i am corousal");
    slides.forEach(function (slide) {
       
        counter %= slides.length;
        console.log("image No : ",counter);
        slide.style.transform = `translateX(-${counter * 100}%)`;
       
      });
      counter++;
}
function lefting(slide,index){
  console.log("I am in Slide");
  slide.style.left = `${index * 100}%`
  // slide.style.left = '100%';
}
slides.forEach(lefting);
// carousel();
start.addEventListener("click",starter);
let InetrvalID = null ;
function starter (){
  console.log("I am starter : ");
  InetrvalID =  setInterval(carousel ,2000);
}
function stoping(){
  console.log("I am stoping ",InetrvalID);
  clearInterval(InetrvalID);
}
console.log("InetrvalID : ",InetrvalID ,";");
stop.addEventListener('click',stoping);

