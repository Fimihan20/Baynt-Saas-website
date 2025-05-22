
    document.addEventListener('DOMContentLoaded', () => {
        const toggleBtn = document.getElementById('menu-toggle');
        const navList = document.querySelector('#nav-list');
        const rightNav = document.querySelector('.right-nav');

        toggleBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            rightNav.classList.toggle('active');
        });
    });
