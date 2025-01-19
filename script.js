gsap.registerPlugin(ScrollTrigger);

// Parallax Effect
gsap.timeline({
    scrollTrigger: {
        trigger: '.container_img',
        scrub: 0.5,
        start: 'top top',
        end: '+=1200',
        pin: true,
    }
})
    .to(".img2", { y: 20, ease: "linear" }, 'start')
    .to(".img3", { y: 40, ease: "linear" }, 'start')
    .to(".img4", { y: 60, ease: "linear" }, 'start')
    .to(".img5", { y: -30, ease: "linear" }, 'start')
    .to(".img6", { y: -70, ease: "linear" }, 'start')
    .to(".img7", { y: -110, ease: "linear" }, 'start')
    .to(".img8", { y: -150, ease: "linear" }, 'start')
    .to(".img9", { y: -200, ease: "linear", scaleY: 1.3 }, 'start')
    .to(".img10", { y: -250, ease: "linear", scaleY: 1.5 }, 'start')
    .to(".img11", { y: -300, ease: "linear", scaleY: 1.8 }, 'start')
    .to(".box", { height: '30vh', ease: "linear" }, 'start');

// Text Animation
gsap.timeline({
    scrollTrigger: {
        trigger: '.boxs',
        scrub: 0.5,
        start: 'top top',
        end: '+=1200',
        pin: true,
        toggleActions: 'restart none none reset',
    }
})
    .from('h2', { x: 700, opacity: 0, ease: "power3.inOut" })
    .from('h1', { x: -700, opacity: 0, ease: "power3.inOut" })
    .from('h3', { x: 700, opacity: 0, ease: "power3.inOut" });
