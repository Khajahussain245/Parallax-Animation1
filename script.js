// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// First GSAP timeline for parallax effect
gsap.timeline({
    scrollTrigger: {
        trigger: '.container_img',
        scrub: 0.5,
        start: 'top top',
        end: '+=900',
        pin: true,
    }
})
    .to(".img2", { y: 10, ease: "linear" }, 'start')
    .to(".img3", { y: 10, ease: "linear" }, 'start')
    .to(".img4", { y: 20, ease: "linear" }, 'start')
    .to(".img5", { y: -40, ease: "linear" }, 'start')
    .to(".img6", { y: -70, ease: "linear" }, 'start')
    .to(".img7", { y: -120, ease: "linear" }, 'start')
    .to(".img8", { y: -130, ease: "linear" }, 'start')
    .to(".img9", { y: -170, ease: "linear", scaleY: 1.2 }, 'start')
    .to(".box", { height: '20vh', ease: "linear" }, 'start');

// Second GSAP timeline for text animation
gsap.timeline({
    scrollTrigger: {
        trigger: '.boxs',
        scrub: 0.5,
        start: 'top top',
        end: '+=900',
        pin: true,
        toggleActions: 'restart none none reset',
    }
})
    .from('h2', { x: 500, opacity: 0, ease: "power3.inOut" })
    .from('h1', { x: -500, opacity: 0, ease: "power3.inOut" })
    .from('h3', { x: 500, opacity: 0, ease: "power3.inOut" });
