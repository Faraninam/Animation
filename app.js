// This file contains the JavaScript code that utilizes anime.js for animations. 
// It initializes animations and handles any interactive elements on the page.

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.animation-box');
    const btn = document.getElementById('animate-btn');

    // Modern, clean, non-glowing animations
    const animations = [
        [
            { 
                scale: 1.1, 
                borderRadius: '32px',
                background: 'linear-gradient(135deg, #00c3ff 0%, #ffff1c 100%)',
                duration: 400, 
                easing: 'easeOutBack' 
            },
            { 
                rotate: 180, 
                scale: 1.2,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff6f61 0%, #f3e221 100%)',
                duration: 600, 
                easing: 'easeInOutCubic' 
            },
            { 
                scale: 1, 
                rotate: 0,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #21cbf3 0%, #2196f3 100%)',
                duration: 500, 
                easing: 'easeOutElastic(1, .8)' 
            }
        ],
        [
            { 
                translateX: 80, 
                scale: 1.15, 
                borderRadius: '40px',
                background: 'linear-gradient(135deg, #8e44ad 0%, #f39c12 100%)',
                duration: 400, 
                easing: 'easeInOutBack' 
            },
            { 
                translateY: 80, 
                rotate: 90, 
                scale: 0.9,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f39c12 0%, #8e44ad 100%)',
                duration: 500, 
                easing: 'easeInOutCubic' 
            },
            { 
                translateX: 0, 
                translateY: 0,
                scale: 1, 
                rotate: 0,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #21cbf3 0%, #2196f3 100%)',
                duration: 500, 
                easing: 'easeOutElastic(1, .8)' 
            }
        ],
        [
            { 
                scale: 1.2, 
                rotate: 45, 
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #e74c3c 0%, #2ecc71 100%)',
                duration: 400, 
                easing: 'easeOutBack' 
            },
            { 
                scale: 0.8, 
                rotate: -45, 
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2ecc71 0%, #e74c3c 100%)',
                duration: 500, 
                easing: 'easeInOutCubic' 
            },
            { 
                scale: 1, 
                rotate: 0, 
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #21cbf3 0%, #2196f3 100%)',
                duration: 500, 
                easing: 'easeOutElastic(1, .8)' 
            }
        ]
    ];

    let animIndex = 0;

    btn.addEventListener('click', () => {
        anime({
            targets: box,
            keyframes: animations[animIndex],
        });

        animIndex = (animIndex + 1) % animations.length;
    });
});