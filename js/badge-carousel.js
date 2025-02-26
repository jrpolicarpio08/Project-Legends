// function initializeImageCarousel(carouselId, imagesIds, prevBtnId, nextBtnId) {
//     const images = imagesIds.map((id) => document.getElementById(id));
//     let currentIndex = 0;

//     function updateImages(direction) {
//         const outgoingImage = images[currentIndex];

//         // Determine the next index based on direction
//         currentIndex =
//             direction === 'next'
//                 ? (currentIndex + 1) % images.length
//                 : (currentIndex - 1 + images.length) % images.length;

//         const incomingImage = images[currentIndex];

//         // Reset all images
//         images.forEach((img) => {
//             img.classList.remove('active', 'prev', 'next');
//         });

//         // Set the appropriate classes for outgoing and incoming images
//         outgoingImage.classList.add(direction === 'next' ? 'next' : 'prev');
//         incomingImage.classList.add('active');

//         // Ensure outgoing image resets after the animation
//         setTimeout(() => {
//             outgoingImage.classList.remove('prev', 'next');
//         }, 500); // Match the animation duration
//     }

//     // Attach event listeners to buttons
//     document.getElementById(prevBtnId).addEventListener('click', () => updateImages('prev'));
//     document.getElementById(nextBtnId).addEventListener('click', () => updateImages('next'));

//     // Initialize by displaying the first image
//     images[0].classList.add('active');
// }

// // Initialize carousels
// initializeImageCarousel('build1', ['build1img1', 'build1img2', 'build1img3' , 'build1img4' , 'build1img5'], 'build1prevBtn', 'build1nextBtn');

function initializeImageCarousel(carouselId, imagesIds, textIds, prevBtnId, nextBtnId) {
    const images = imagesIds.map((id) => document.getElementById(id));
    const texts = textIds.map((id) => document.getElementById(id));
    let currentIndex = 0;

    function updateContent(direction) {
        const outgoingImage = images[currentIndex];
        const outgoingText = texts[currentIndex];

        // Determine the next index based on direction
        currentIndex =
            direction === 'next'
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;

        const incomingImage = images[currentIndex];
        const incomingText = texts[currentIndex];

        // Reset all images and texts
        images.forEach((img) => img.classList.remove('active', 'prev', 'next'));
        texts.forEach((txt) => txt.classList.remove('active'));

        // Set the appropriate classes for outgoing and incoming images
        outgoingImage.classList.add(direction === 'next' ? 'next' : 'prev');
        incomingImage.classList.add('active');

        // Update text visibility
        outgoingText.classList.remove('active');
        incomingText.classList.add('active');

        // Ensure outgoing image resets after the animation
        setTimeout(() => {
            outgoingImage.classList.remove('prev', 'next');
        }, 500); // Match the animation duration
    }

    // Attach event listeners to buttons
    document.getElementById(prevBtnId).addEventListener('click', () => updateContent('prev'));
    document.getElementById(nextBtnId).addEventListener('click', () => updateContent('next'));

    // Initialize by displaying the first image and text
    images[0].classList.add('active');
    texts[0].classList.add('active');
}

// Initialize the carousel with both images and text
initializeImageCarousel('build1', ['build1img1', 'build1img2', 'build1img3', 'build1img4', 'build1img5'], ['build1txt1', 'build1txt2', 'build1txt3', 'build1txt4', 'build1txt5'], 'build1prevBtn', 'build1nextBtn'
);
