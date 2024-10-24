document.addEventListener("DOMContentLoaded", function () {
  // Identificamos os modais de Fashion Film e Captação
  const modals = {
      'FashionFilm': {
          modalId: '#ModalFashionFilm',
          carouselId: 'fashion-carousel',
          videos: ['ID8_1PUF-qc', 'Wodf_G66-NQ', '8YdR0pDExCU', 'GlcOuNm79Xk', 'BqK1mtAUAy8']
      },
      'Captacao': {
          modalId: '#ModalCaptacao',
          carouselId: 'captacao-carousel',
          videos: ['kEHkVjbzAaI', 'anotherID', 'anotherID2'] // Adicione aqui os IDs de vídeo do carrossel de captação
      }
  };

  // Função genérica para inicializar o carrossel de vídeos
  function initializeCarousel(carouselId, videoIds) {
      const videoWrapper = document.querySelector(`#${carouselId} .video-wrapper`);
      const videoContainers = videoWrapper.querySelectorAll(".video-container");
      let currentIndex = 0;

      // Função para trocar o vídeo ativo
      function changeVideo(index) {
          videoContainers.forEach((container, i) => {
              const iframe = container.querySelector('iframe');
              if (i === index) {
                  container.classList.add('active');
                  iframe.src = `https://www.youtube.com/embed/${videoIds[i]}?autoplay=1`;
              } else {
                  container.classList.remove('active');
                  iframe.src = ""; // Limpa o iframe quando não estiver ativo
              }
          });
      }

      // Configuração inicial
      changeVideo(currentIndex);

      // Controles de navegação no carrossel
      document.querySelector(`#${carouselId} #prev`).addEventListener('click', function () {
          currentIndex = (currentIndex === 0) ? videoIds.length - 1 : currentIndex - 1;
          changeVideo(currentIndex);
      });

      document.querySelector(`#${carouselId} #next`).addEventListener('click', function () {
          currentIndex = (currentIndex === videoIds.length - 1) ? 0 : currentIndex + 1;
          changeVideo(currentIndex);
      });
  }

  // Inicializa o carrossel do Fashion Film quando o modal é aberto
  $(modals.FashionFilm.modalId).on('shown.bs.modal', function () {
      initializeCarousel(modals.FashionFilm.carouselId, modals.FashionFilm.videos);
  });

  // Inicializa o carrossel de Captação quando o modal é aberto
  $(modals.Captacao.modalId).on('shown.bs.modal', function () {
      initializeCarousel(modals.Captacao.carouselId, modals.Captacao.videos);
  });
});