var crsr = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");
document.addEventListener('mousemove', function(details){
    crsr.style.left = details.x+ "px";
    crsr.style.top = details.y + "px";
    blurr.style.left = details.x-200 + "px";
    blurr.style.top = details.y-200 + "px";
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        //markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
}
)

gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        //markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:2,
    }
}
)


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4,

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4,

    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub:2,

    }
})

