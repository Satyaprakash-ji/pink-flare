function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: true,
            pin: true,
            end: "bottom -500%"
        }
    })
    
    tl

        .to("#overlay #centerimage",{
            left: "50%",
            duration: 10,
            ease: Power1
        })

        .to("#home>img",{
            scale: 1.3,
            duration: 8,
            ease: Power1
        },"hello")


    
        .to("#circle #btm img",{
            scale: 1,
            rotate: "-180deg",
            duration: 5,
            stagger: .5,
            ease: "expoScale(0.5,7,power1.in)"
        },"hello")
    
        .to("#circle #top img",{
            scale: 1,
            duration: 5,
            stagger: .1,
            ease: "expoScale(0.5,7,power1.in)"
        },"hello")
    
        .to("#smlcircle",{
            scale: .75,
            duration: 5,
            ease: Power1
        },"hello")
    
        .to("#cimage img",{
            scale: "0",
            duration: 8,
            stagger: .1,
            ease: Power1
        },"hello")
    
        .to("#centerimage #h1",{
            opacity: 0,
            duration: 1,
            ease: Power1
        },"hello")
    
        .to("#circle",{
            scale: .46,
            duration: 6,
            ease: Power1
        },"hello")
    
        .to("#overlay>h1#gallery",{
            bottom: "-50%",
            duration: 8,
            ease: Power1
        },"hello")
    
        .to("#overlay #gola",{
            scale: 2,
            top: "50%",
            duration: 6,
            ease: Power1
        },"hello")
    
        .to("#smlcircle",{
            scale: 0,
            duration: 3,
            ease: Power1
        },"hello2")
    
        .to("#circle",{
            scale: 0,
            ease: Power1
        },"hello2")
    
        .to("#overlay #gola",{
            opacity: 0,
            duration: .7,
            ease: Power1
        },"hello2")
    
        .to("#overlay>h1#pf",{
            bottom: "2%",
            rotate: 0,
            duration: 3,
            ease: Power1
        },"hello2")

        .to("#home>img",{
            scale: 1.2,
            duration: 8,
            ease: Power1
        },"hello2")

        .to("#home>img",{
            scale: 1,
            duration: 8,
            ease: Power1
        },"hello3")
    
        .to("#overlay #pinkbox",{
            top: "0%",
            duration: 8,
            ease: Power1
        },"hello3")
    
        .to("#overlay #pinkbox",{
            top: "-65%",
            duration: 5,
            delay: 1,
            ease: Power1
        })
        
}

function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom -500%"
        }
    })

    tl2
    
        .to("#p2top .circle",{
            scale: 1,
            top: "50%",
            stagger: .4,
            duration: 3,
            ease: Power1
        })

        .to("#p2top .circle",{
            left: "50%",
            duration: 3,
            stagger: .1,
            ease: Power1
        })

        .to("#p2top .circle",{
            scale: .7,
            duration: 2,
            ease: Power1
        })

        .to("#p2top #pi",{
            scale: 6,
            duration: 3,
            ease: Power1
        })

        .to("#p2top #pi",{
            background: "linear-gradient(to right, #d5a7b4, #B4AAD5)",
            delay: 4,
            duration: 5,
            ease: Power1
        }, "a")

        .to("#p2top h1",{
            left: "-75%",
            duration: 25,
            ease: Power1
        }, "a")

        .to("#p2btm #firsth1",{
            opacity: 0,
            delay: 1.5,
            duration: 1,
            ease: Power1
        }, "a")

        .to("#p2btm #secondh1",{
            opacity: 1,
            delay: 2.8,
            duration: 1,
            ease: Power1
        }, "a")

        .to("#cover .bars",{
            top: "0%",
            stagger: 1,
            duration: 10,
            ease: Power1
        })

        .to(".bars .bigbox",{
            left: "-50%",
            duration: 4,
            ease: Power1
        }, "b")

        .to(".bars .smallbox",{
            left: "-50%",
            duration: 4,
            ease: Power1
        }, "b")

        .to(".bars .smallbox",{
            left: "-75%",
            duration: 3,
            ease: Power1
        })


}

timelineOne();
timelineTwo();