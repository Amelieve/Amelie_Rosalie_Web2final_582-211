 const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄️';
    
    // Randomize size, position, animation duration
    const size = Math.random() * 20 + 10; // 10px to 30px
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2s to 5s
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  };

  // Create snowflakes at intervals
  setInterval(createSnowflake, 200);


const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const expanded = burger.getAttribute("aria-expanded") === "true" || false;
      burger.setAttribute("aria-expanded", !expanded);
    });