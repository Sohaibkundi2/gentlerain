// script.js 
  UnicornStudio.addScene({
    elementId: "gravity", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 100, // frames per second (0-120) [optional]
    scale: 1, // rendering scale, use smaller values for performance boost (0.25-1) [optional]
    dpi: 1, // pixel ratio [optional]
    filePath: "./Assets/effect.json", // if youre hosting your own exported json code, point to it here (do not use both filePath and projectId, only one is required)
    interactivity: {
      // [optional]
      mouse: {
        disableMobile: true, // disable touch movement on mobile
      },
    },
  })
    .then((scene) => {
      // scene is ready
      // To remove a scene, you can use:
      // scene.destroy()
    })
    .catch((err) => {
      console.error(err);
    });


    let section2 = document.querySelector(".section-2")
    let blob = document.querySelector("#blob");

    section2.addEventListener("mousemove",(dets)=>{
      blob.style.transform = `translate(${dets.clientX * .5}px, ${dets.clientY * .5}px)`
    })


    // 


    var part2 = gsap.timeline({
      scrollTrigger:{
        trigger:"#sec-2-1",
        start: "10% 100%",   // 1st value - trigger container 2nd value - screen
        end: "90% -200%",  // 1st value - trigger container 2nd value - screen
        scrub: 2,
        // markers: true,
        duration: 1,
      }
     })
     part2.to("#section-2-top-nav-1 ",{
      backgroundColor: "#FD7024",
     },'kuchbhi')
     .from("#section-2-inner-left-1 h1, #section-2-inner-left-1 p, #section-2-inner-right-1 img", {
      y: -850,
      opacity: 0,
     },'kuchbhi')
     .to("#section-2-inner-left-1 h1, #section-2-inner-left-1 p, #section-2-inner-right-1 img",{
      y: 1250,
      opacity:0,
     })
    
    var part2 = gsap.timeline({
      scrollTrigger:{
        trigger:"#sec-2-2",
        start: "10% 100%",   // 1st value - trigger container 2nd value - screen
        end: "90% 0%",  // 1st value - trigger container 2nd value - screen
        scrub: 2,
        // markers: true,
        duration: 1,
      }
     })
     part2.to("#section-2-top-nav-2 ",{
      backgroundColor: "#FD7024",
     },'kuchbhi')
     .from("#section-2-inner-left-2 h1, #section-2-inner-left-2 p, #section-2-inner-right-2 img", {
      y: -850,
      opacity: 0,
     },'kuchbhi')
     .to("#section-2-inner-left-2 h1, #section-2-inner-left-2 p, #section-2-inner-right-2 img",{
      y: 850,
      opacity:0,
     })



    var part2 = gsap.timeline({
      scrollTrigger:{
        trigger:"#sec-2-3",
        start: "10% 100%",   // 1st value - trigger container 2nd value - screen
        end: "90% 0%",  // 1st value - trigger container 2nd value - screen
        scrub: 2,
        // markers: true,
        duration: 1,
      }
     })
     part2.to("#section-2-top-nav-3 ",{
      backgroundColor: "#FD7024",
     },'kuchbhi')
     .from("#section-2-inner-left-3 h1, #section-2-inner-left-3 p, #section-2-inner-right-3 img", {
      y: -850,
      opacity: 0,
     },'kuchbhi')
     .to("#section-2-inner-left-3 h1, #section-2-inner-left-3 p, #section-2-inner-right-3 img",{
      y: 850,
      opacity:0,
     })
    var part2 = gsap.timeline({
      scrollTrigger:{
        trigger:"#sec-2-4",
        start: "10% 100%",   // 1st value - trigger container 2nd value - screen
        end: "90% 0%",  // 1st value - trigger container 2nd value - screen
        scrub: 2,
        // markers: true,
        duration: 1,
      }
     })
     part2.to("#section-2-top-nav-4 ",{
      backgroundColor: "#FD7024",
     },'kuchbhi')
     .from("#section-2-inner-left-4 h1, #section-2-inner-left-4 p, #section-2-inner-right-4 img", {
      y: -850,
      opacity: 0,
     },'kuchbhi')
     .to("#section-2-inner-left-4 h1, #section-2-inner-left-4 p, #section-2-inner-right-4 img",{
      y: 850,
      opacity:0,
     })