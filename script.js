// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });




  // var elem1 = document.querySelector("#elem1");
  // elem1.addEventListener("mouseenter",()=>{
//    var image = elem1.getAttribute("data-image");
//     fixed.style.backgroundImage =`url(${image})`;
// }) 

// var elem2 = document.querySelector("#elem2");
// elem2.addEventListener("mouseenter",()=>{
//     var image = elem2.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem3 = document.querySelector("#elem3");
// elem3.addEventListener("mouseenter",()=>{
//     var image = elem3.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem4 = document.querySelector("#elem4");
// elem4.addEventListener("mouseenter",()=>{
//     var image = elem4.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem5 = document.querySelector("#elem5");
// elem5.addEventListener("mouseenter",()=>{
//     var image = elem5.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem6 = document.querySelector("#elem6");
// elem6.addEventListener("mouseenter",()=>{
//     var image = elem6.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem7 = document.querySelector("#elem7");
// elem7.addEventListener("mouseenter",()=>{
//     var image = elem7.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;
// })


function page4Animation(){
var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",()=>{
        fixed.style.display = "block";
})
elemC.addEventListener("mouseleave",()=>{
    fixed.style.display = "none";
  })
  
  var elems = document.querySelectorAll(".elem");
  elems.forEach(element => {
      element.addEventListener("mouseenter",()=>{
          var image = element.getAttribute("data-image");
          fixed.style.background = `url(${image})`
      })
      
  });
}
page4Animation();

// swiperjs ------------------------------------------
function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();
// ---------------------------------------------------

