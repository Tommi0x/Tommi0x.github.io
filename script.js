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
});

