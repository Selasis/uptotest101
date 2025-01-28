const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');
const iframe = modalOverlay.querySelector('iframe');

openModal.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    stopYouTubeVideo();
    modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        stopYouTubeVideo();
        modalOverlay.classList.add('hidden');
    }
});

function stopYouTubeVideo() {
    const iframeParent = iframe.parentElement;
    iframeParent.removeChild(iframe); // Remove the iframe from the DOM
    iframeParent.appendChild(iframe); // Reinsert the iframe to reset it
}
