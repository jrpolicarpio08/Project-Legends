const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');


const changeNavLinkColor = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');

            let hoverColor;
            if (sectionId === '1st') {
                navLinks.forEach(link => link.style.color = 'black');
                hoverColor = 'red';
            } else if (sectionId === '2nd') {
                navLinks.forEach(link => link.style.color = 'white');
                hoverColor = 'red';
            } else if (sectionId === '3rd') {
                navLinks.forEach(link => link.style.color = 'white');
                hoverColor = 'red';
            }

            navLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    link.style.color = hoverColor;
                });
                link.addEventListener('mouseleave', () => {
                    if (sectionId === '1st') {
                        link.style.color = 'black';
                    } else if (sectionId === '2nd') {
                        link.style.color = 'white';
                    } else if (sectionId === '3rd') {
                        link.style.color = 'white';
                    }
                });
            });
        }
    });
};

window.addEventListener('scroll', changeNavLinkColor);


