document.addEventListener("DOMContentLoaded", function () {
  // Função para controlar carrosséis múltiplos
  function initCarousel(carouselId, prevId, nextId, modalId) {
    const carouselElement = document.getElementById(carouselId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    const videoContainers = carouselElement.querySelectorAll(".video-container");
    const modal = document.getElementById(modalId); // Referência ao modal
    let currentSlide = 0;

    function updateSlide() {
      videoContainers.forEach((container, index) => {
        const iframe = container.querySelector("iframe");
        const videoId = container.getAttribute("data-video-id");

        // Se for o slide atual, carrega o vídeo
        if (index === currentSlide) {
          container.classList.add("active");
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        } else {
          container.classList.remove("active");
          iframe.src = ""; // Limpa o src para pausar o vídeo
        }
      });
    }

    prev.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + videoContainers.length) % videoContainers.length;
      updateSlide();
    });

    next.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % videoContainers.length;
      updateSlide();
    });

    // Evento para pausar o vídeo quando o modal é fechado
    modal.addEventListener("hidden.bs.modal", function () {
      videoContainers.forEach((container) => {
        const iframe = container.querySelector("iframe");
        iframe.src = ""; // Limpa o src para pausar o vídeo ao fechar o modal
      });
    });

    // Evento para recarregar o vídeo ativo quando o modal é aberto
    modal.addEventListener("shown.bs.modal", function () {
      currentSlide = 0; // Reseta o slide atual
      updateSlide(); // Atualiza o slide ao abrir o modal
    });

    // Carrega o primeiro vídeo ao abrir o modal
    updateSlide();
  }

  // Inicializando o carrossel no modal de Fashion Film
  initCarousel("carouselFashionFilm", "prevFashion", "nextFashion", "ModalFashionFilm");

  // Inicializando o carrossel no modal de Captação
  initCarousel("carouselCaptacao1", "prevCaptacao", "nextCaptacao", "ModalCaptacao");
});
