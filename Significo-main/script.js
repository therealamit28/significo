function homepageAnimation () {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            // markers:true,
            // pin: true,
        },
    })
    
    tl.to(".videocont",{
        '--clip' : "0%",
        ease: Power2,
    },'a')
    
    tl.to(".rowContainer",{
        scale: "1.5",
        ease: Power2,
    },'a')
    
    tl.to(".lft",{
        x: "-5%",
        // stagger:.1,
        ease: Power4,
    },'b')
    
    tl.to(".rgt",{
        x: "5%",
        // stagger:.1,
        ease: Power4,
    },'b')
}

function Slider() { 
    gsap.to(".slide",{
        scrollTrigger: {
            trigger: ".mainhero",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // markers:true,
            // pin: true,
        },
        x:"-305%",
        ease: Power2,
    
    })
    
}

function ourAnimation() {
    
document.querySelectorAll(".stipsContiner")
.forEach(function (e) {
    e.addEventListener("mousemove", function (dets) {
        gsap.to(this.querySelector(".picture"),{
            x: gsap.utils.mapRange(0, window.innerWidth, -100, 380, dets.clientX),
            opacity:1,
            ease: Power4,
            duration:.5,
        })

    })

    e.addEventListener("mouseleave", function (dets) {
        gsap.to(this.querySelector(".picture"),{
            opacity:0,
            ease: Power4,
            duration:.5,
        })
    })
})

}

function para1Animation () {
    var cluter = ""
var para1 = document.querySelector(".para1").textContent.split("")
.forEach(function (e){
    if (e === " ") cluter += `<span>&nbsp;</span>`
    cluter += `<span>${e}</span>`
})

document.querySelector(".para1").innerHTML = cluter;
 console.log(para1);

 gsap.set(".para1 span",{
    opacity:.1
 })

 gsap.to(".para1 span",{
    scrollTrigger: {
        trigger: ".managerPart1",
        start: "top 70%",
        end: "bottom 100%",
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    ease: Power4,
    stagger:.3,
 })

}

function para2Animation () {
    var cluter = "";
document.querySelector(".para2").textContent.split("")
.forEach(function (e){
    if (e === " ") cluter += `<span>&nbsp;</span>`
    cluter += `<span >${e}</span>`
})

document.querySelector(".para2").innerHTML = cluter;

 gsap.set(".para2 span",{
    opacity:.1
 })

 gsap.to(".para2 span",{
    scrollTrigger: {
        trigger: ".managerPart2",
        start: "top 70%",
        end: "bottom 100%",
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    ease: Power4,
    stagger:.3,
 })

}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulsAnimation() { 
    gsap.to(".capsule2",{
        ease: Power4,
        marginTop:"0",
        rotate:"-16deg",
        scrollTrigger: {
            trigger: ".capusals",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 2,
            // markers:true,
        }
    
    })

}

function backgroundColorCahngeAnimation() {
    document.querySelectorAll(".section").forEach(function (e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
            // markers:true,
            onEnter: function (){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function (){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}


document.querySelectorAll(".section").forEach(function (e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        // markers:true,
        onEnter: function (){
           var fevi = document.querySelector(".fevi");
            fevi.setAttribute("href", e.dataset.fevicon);
        },
        onEnterBack: function (){
            var fevi = document.querySelector(".fevi");
            fevi.setAttribute("href", e.dataset.fevicon);
        }
    })
})


function navHoverAnimation() {
    document.querySelectorAll(".nav2 h2")
.forEach(function (e) {
    e.addEventListener("mouseover",function () {
        document.querySelector('.videocont').style.opacity = .4
        document.querySelector('.marquees').style.opacity = 0
    })

    e.addEventListener("mouseout",function () {
        document.querySelector('.videocont').style.opacity = 1
        document.querySelector('.marquees').style.opacity = 1

    })
})
}




loco();
homepageAnimation ();
Slider();
ourAnimation ();
para1Animation ();
para2Animation();
capsulsAnimation();
backgroundColorCahngeAnimation ();
navHoverAnimation();