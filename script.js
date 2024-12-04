document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const asciiArt = document.getElementById('ascii-art');
    let isMovingRight = true;

    // Define both directions of the monkey
    const monkeyLeft = `
          __
     w  c(..)o   (
      \\__(-)    __)
          /\\   (
         /(_)___)
         w /|
          | \\
          m  m`;

    const monkeyRight = `
          __
    (   o(..)c  w
   (__    (-)__/
    (   /\\
   (___(_)\\
         |\\ w
         / |
         m m`;

    function toggleDirection() {
        if (isMovingRight) {
            asciiArt.textContent = monkeyLeft;
            asciiArt.classList.remove('moving-right');
            asciiArt.classList.add('moving-left');
        } else {
            asciiArt.textContent = monkeyRight;
            asciiArt.classList.remove('moving-left');
            asciiArt.classList.add('moving-right');
        }
        isMovingRight = !isMovingRight;
    }

    // Start the initial animation
    asciiArt.textContent = monkeyRight;
    asciiArt.classList.add('moving-right');

    // Toggle direction every 4 seconds (matching the animation duration)
    setInterval(toggleDirection, 4000);

    // Add this after your existing code
    function createRainEffect() {
        const rainContainer = document.getElementById('rain-container');
        const characters = ['|', '░', '▒', '▓', '│', '┃'];
        const numberOfDrops = 50;
        const drops = [];

        function createDrop() {
            const drop = document.createElement('div');
            drop.className = 'raindrop';
            drop.style.left = `${Math.random() * 100}vw`;
            drop.style.opacity = Math.random() * 0.5 + 0.2;
            drop.style.fontSize = `${Math.random() * 15 + 10}px`;
            drop.textContent = characters[Math.floor(Math.random() * characters.length)];
            
            const speed = Math.random() * 1.5 + 0.5;
            let position = -20;
            
            drops.push({
                element: drop,
                position,
                speed
            });
            
            rainContainer.appendChild(drop);
        }

        function updateDrops() {
            for (let i = drops.length - 1; i >= 0; i--) {
                const drop = drops[i];
                drop.position += drop.speed;
                drop.element.style.transform = `translateY(${drop.position}vh)`;

                if (drop.position > 120) {
                    rainContainer.removeChild(drop.element);
                    drops.splice(i, 1);
                    createDrop();
                }
            }
            requestAnimationFrame(updateDrops);
        }

        // Initial creation of drops
        for (let i = 0; i < numberOfDrops; i++) {
            setTimeout(() => {
                createDrop();
            }, Math.random() * 3000); // Stagger the initial creation
        }

        updateDrops();
    }

    // Call the rain effect function when the page loads
    createRainEffect();
});

