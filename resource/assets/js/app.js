particlesJS("particles-js", {
    particles: {
        number: {
            value: 16,
            density: {
                enable: !0,
                value_area: 200
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#ffcc00"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "images/hoge.png",
                width: 100,
                height: 100
            }
        },
        color: {
            value: "#ffffff"
        },
        opacity: {
            value: 1,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 1,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !1,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            speed: 10,
            straight: !1,
            direction: "none",
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "repulse"
            },
            onclick: {
                enable: !0,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            repulse: {
                distance: 200
            },
            bubble: {
                distance: 400,
                size: 40,
                opacity: 8,
                duration: 2,
                speed: 3
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0,
    resize: !0
});