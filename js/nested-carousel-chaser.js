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
initializeImageCarousel('drift', ['driftimg1', 'driftimg2', 'driftimg3'], 'driftprevBtn', 'driftnextBtn');
initializeImageCarousel('track', ['trackimg1', 'trackimg2', 'trackimg3'], 'trackprevBtn', 'tracknextBtn');
initializeImageCarousel('oem',   ['oemimg1', 'oemimg2', 'oemimg3'], 'oemprevBtn', 'oemnextBtn');

