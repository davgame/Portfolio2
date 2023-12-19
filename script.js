//function toggleMenu(){
    //const menu = document.querySelector(".menu-links");
    //const icon = document.querySelector(".hamburger-icon");
    //menu.classList.toggle("open");
   // icon.classList.toggle("open");
//}

//const sr=ScrollReveal({
  //  distance:'60px',
 //   duration:2500,
 //   delay:400,
//    reset:true
//})


//плавный скролл

let anchors = document.querySelectorAll('.nav-links a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}

var copy=document.querySelector('.logos-slide').cloneNode(true);
document.querySelector(".logos").appendChild(copy)



//pre-loader
var preloader = document.getElementById('preloader')
setTimeout(function(){
    preloader.classList.add("cerrar")
    document.body.classList.remove('preloader-active')
},7000)

//печатающая машинака анимация
var typed =new Typed(".sec",{
    strings:["Frontend Developer", "UX/UI Designer", "Web Developer", "Photographer","Blogger"],
    typedSpeed:200,
    backSpeed:150,
    backDelay:1000,
    loop:true
})

const burger = document.querySelector(".hamburger");

burger.addEventListener("click", function(){
    burger.classList.toggle("open");
});


const showMore=document.querySelector('.butn-container');
const productsLenght=document.querySelector('.details-container.color-container').length;
let items=7

showMore.addEventListener('click',()=>{
  items+=3;
  const array=Array.from(document.querySelector('.details-container.color-container').children);
  const visItems=array.slice(0,items);

  visItems.forEach(element => element.classList.add('is-visible'))
})
