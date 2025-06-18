
    document.addEventListener('DOMContentLoaded', () => {
        const toggleBtn = document.getElementById('menu-toggle');
        const navList = document.querySelector('#navbar');
        const rightNav = document.querySelector('.right-nav');

        toggleBtn.addEventListener('click', () => {
            console.log("Toggle Clicked!");
            navList.classList.toggle('active');
            rightNav.classList.toggle('active');
        });
    });
