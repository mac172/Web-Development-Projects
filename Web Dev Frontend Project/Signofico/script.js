function homePageAnimation(){
    gsap.set(".slidesm",{scale: 5})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
})

tl.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2,
},'a')

tl.to(".slidesm", {
    scale: 1,
    ease: Power2,
},'a')

tl.to(".lft", {
    xPercent : -10,
    stagger: .03,
    ease: Power4,
},'b')

tl.to(".rgt", {
    xPercent : 10,
    stagger: .03,
    ease: Power4,
},'b')
}

function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            markers:true,
            scrub: 2
        },
        xPercent: -200,
        eade: Power4
    });
}

function teamAnimation(){
    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove", function(dets){
        
        gsap.to(this.querySelector(".picture") , {opacity: 1 ,
             x: gsap.utils.mapRange(0, window.innerWidth, -200 ,200, dets.clientX) , 
             ease: Power4 , 
             duration:.5})
    } )

    el.addEventListener("mouseleave", function(dets) {
        gsap.to(this.querySelector(".picture") , {opacity: 0 , ease: Power4 , duration:.5})
    } )
})
}

function leftPara(){
    var clutter = "";
document.querySelector(".textpara1")
.textContent.split("")
.forEach(function(e){
    if (e === " ") clutter += `<span>&nbsp</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textpara1").innerHTML = clutter;

gsap.set(".textpara1 span", {opacity: .1})
gsap.set(".textpara1 span", {
    scrollTrigger: {
        trigger: "paragraph",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 1,
        markers: true
    } ,
    opacity: 1,
    stagger: 0.3,
    ease: Power4
})
}

function rightPara(){
    var clutter = "";
document.querySelector(".textpara2")
.textContent.split("")
.forEach(function(e){
    if (e === " ") clutter += `<span>&nbsp</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textpara2").innerHTML = clutter;

gsap.set(".textpara2 span", {opacity: .1})
gsap.set(".textpara2 span", {
    scrollTrigger: {
        trigger: "paragraph",
        start: "top 50%",
        end: "bottom 80%",
        scrub: 2,
        markers: true
    } ,
    opacity: 1,
    stagger: .03,
    ease: Power4
})
}

function locomotiv(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)" , {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            markers: true,
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function bodyColorChange(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end : "bottom 50%",
        markers: true,
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)
        }
    })
})
}

homePageAnimation();
realPageAnimation();
teamAnimation();
leftPara();
rightPara();
locomotiv();
capsuleAnimation();
bodyColorChange();