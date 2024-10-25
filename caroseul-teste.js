document.addEventListener("DOMContentLoaded", function () {
  // Função para controlar carrosséis múltiplos
  function initCarousel(carouselId, prevId, nextId) {
    const carouselElement = document.getElementById(carouselId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    const videoContainers = carouselElement.querySelectorAll(".video-container");
    let currentSlide = 0;

    function updateSlide() {
      videoContainers.forEach((container) => {
        const iframe = container.querySelector("iframe");
        if (iframe) {
          iframe.src = ""; // Limpa o src para pausar o vídeo
        }
        container.classList.remove("active");
      });

      const activeContainer = videoContainers[currentSlide];
      activeContainer.classList.add("active");

      const iframe = activeContainer.querySelector("iframe");
      const videoId = activeContainer.getAttribute("data-video-id");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    prev.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + videoContainers.length) % videoContainers.length;
      updateSlide();
    });

    next.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % videoContainers.length;
      updateSlide();
    });

    // Carrega o primeiro vídeo ao abrir o modal
    updateSlide();
  }

  // Inicializando os dois carrosséis
  initCarousel("carouselFashionFilm", "prevFashion", "nextFashion");
  initCarousel("carouselCaptacao1", "prevCaptacao", "nextCaptacao");
});
