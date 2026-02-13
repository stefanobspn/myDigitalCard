// Check if GSAP is loaded
if (typeof gsap !== 'undefined') {
    // Initial Setup
    gsap.set(".card", { opacity: 0, y: 50 });
    gsap.set(".profile-img-wrapper", { scale: 0, opacity: 0 });
    gsap.set([".name", ".role", ".bio"], { opacity: 0, y: 20 });
    gsap.set(".actions .btn", { opacity: 0, y: 20 });
    gsap.set(".social-item", { opacity: 0, scale: 0.5 });
    gsap.set(".card-footer", { opacity: 0 });

    // Timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".card", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "elastic.out(1, 0.8)"
    })
        .to(".profile-img-wrapper", {
            duration: 0.8,
            scale: 1,
            opacity: 1,
            ease: "back.out(1.7)"
        }, "-=0.5")
        .to([".name", ".role"], {
            duration: 0.6,
            opacity: 1,
            y: 0,
            stagger: 0.2
        }, "-=0.3")
        .to(".bio", {
            duration: 0.6,
            opacity: 1,
            y: 0
        }, "-=0.4")
        .to(".actions .btn", {
            duration: 0.6,
            opacity: 1,
            y: 0,
            stagger: 0.15
        }, "-=0.4")
        .to(".social-item", {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            ease: "back.out(2)"
        }, "-=0.3")
        .to(".card-footer", {
            duration: 0.5,
            opacity: 1
        }, "-=0.2");

    // Interactive Hover Animations
    const socialItems = document.querySelectorAll('.social-item');

    socialItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // 3D Tilt Effect (Optional simple version)
    const card = document.querySelector('.card');
    const container = document.querySelector('.card-container');

    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        gsap.to(card, {
            rotationY: xAxis,
            rotationX: yAxis,
            duration: 0.5,
            ease: "power1.out"
        });
    });

    container.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none';
    });

    container.addEventListener('mouseleave', (e) => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
        });
    });

} else {
    console.error("GSAP library not found!");
}
