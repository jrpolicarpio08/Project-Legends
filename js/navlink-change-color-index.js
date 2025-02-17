// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('.nav-link');
// const navBtoggler = document.querySelector('.navbar-toggler-icon');


// const changeNavLinkColor = () => {
//     const scrollPosition = window.scrollY;

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             const sectionId = section.getAttribute('id');

//             let hoverColor;
//             if (sectionId === '1st') {
//                 navLinks.forEach(link => link.style.color = 'black');
//                 hoverColor = 'red';
//             } else if (sectionId === '2nd') {
//                 navLinks.forEach(link => link.style.color = 'white');
//                 hoverColor = 'red';
//             } else if (sectionId === '3rd') {
//                 navLinks.forEach(link => link.style.color = 'white');
//                 hoverColor = 'red';
//             }
//              else if (sectionId === '4th') {
//                 navLinks.forEach(link => link.style.color = 'black');
//                 hoverColor = 'red';
//             }

//             navLinks.forEach(link => {
//                 link.addEventListener('mouseenter', () => {
//                     link.style.color = hoverColor;
//                 });
//                 link.addEventListener('mouseleave', () => {
//                     if (sectionId === '1st') {
//                         link.style.color = 'black';
//                     } else if (sectionId === '2nd') {
//                         link.style.color = 'white';
//                     } else if (sectionId === '3rd') {
//                         link.style.color = 'white';
//                     }
//                     else if (sectionId === '4th') {
//                         link.style.color = 'black';
//                     }
//                 });
//             });
//         }
//     });
// };

// window.addEventListener('scroll', changeNavLinkColor);
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const navToggler = document.querySelector('.navbar-toggler');
const navTogglerIcon = document.querySelector('.navbar-toggler-icon');

const changeNavAppearance = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');

            let linkColor, hoverColor, togglerColor, togglerBorder;
            if (sectionId === '1st') {
                linkColor = 'white';
                togglerColor = 'white';
                togglerBorder = 'white';
                hoverColor = 'red';
            } else if (sectionId === '2nd') {
                linkColor = 'white';
                togglerColor = 'white';
                togglerBorder = 'white';
                hoverColor = 'red';
            } else if (sectionId === 'mobile2nd') {
                linkColor = 'white';
                togglerColor = 'white';
                togglerBorder = 'white';
                hoverColor = 'red';
            } else if (sectionId === '3rd') {
                linkColor = 'white';
                togglerColor = 'white';
                togglerBorder = 'white';
                hoverColor = 'red';
            } else if (sectionId === '4th') {
                linkColor = 'black';
                togglerColor = 'black';
                togglerBorder = 'black';
                hoverColor = 'red';
            }

            // Change nav links color
            navLinks.forEach(link => {
                link.style.color = linkColor;

                link.addEventListener('mouseenter', () => {
                    link.style.color = hoverColor;
                });

                link.addEventListener('mouseleave', () => {
                    link.style.color = linkColor;
                });
            });

            // Change navbar toggler icon color
            if (navTogglerIcon) {
                navTogglerIcon.style.filter = `invert(${togglerColor === 'white' ? 1 : 0})`; 
            }

            // Change navbar toggler border color
            if (navToggler) {
                navToggler.style.borderColor = togglerBorder;
            }
        }
    });
};

window.addEventListener('scroll', changeNavAppearance);


