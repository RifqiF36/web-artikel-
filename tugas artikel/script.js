document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moreContent = button.previousElementSibling;
            if (moreContent.style.display === 'none') {
                moreContent.style.display = 'block';
                button.textContent = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                button.textContent = 'Read More';
            }
        });
    });
});
