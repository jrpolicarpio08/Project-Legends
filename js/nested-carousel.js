function initializeImageCarousel(carouselId, imagesIds, prevBtnId, nextBtnId) {
    const images = imagesIds.map((id) => document.getElementById(id));
    let currentIndex = 0;

    function updateImages(direction) {
        const outgoingImage = images[currentIndex];

        // Determine the next index based on direction
        currentIndex =
            direction === 'next'
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;

        const incomingImage = images[currentIndex];

        // Reset all images
        images.forEach((img) => {
            img.classList.remove('active', 'prev', 'next');
        });

        // Set the appropriate classes for outgoing and incoming images
        outgoingImage.classList.add(direction === 'next' ? 'next' : 'prev');
        incomingImage.classList.add('active');

        // Ensure outgoing image resets after the animation
        setTimeout(() => {
            outgoingImage.classList.remove('prev', 'next');
        }, 500); // Match the animation duration
    }

    // Attach event listeners to buttons
    document.getElementById(prevBtnId).addEventListener('click', () => updateImages('prev'));
    document.getElementById(nextBtnId).addEventListener('click', () => updateImages('next'));

    // Initialize by displaying the first image
    images[0].classList.add('active');
}

// Initialize carousels
initializeImageCarousel('build1', ['build1img1', 'build1img2', 'build1img3'], 'build1prevBtn', 'build1nextBtn');
initializeImageCarousel('build2', ['build2img1', 'build2img2', 'build2img3'], 'build2prevBtn', 'build2nextBtn');
initializeImageCarousel('build3', ['build3img1', 'build3img2', 'build3img3'], 'build3prevBtn', 'build3nextBtn');
initializeImageCarousel('build4', ['build4img1', 'build4img2', 'build4img3' , 'build4img4' , 'build4img5'], 'build4prevBtn', 'build4nextBtn');

