gsap.from("#box2 h1", {
    transform: "translateX(-100%)",
    duration:2,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})