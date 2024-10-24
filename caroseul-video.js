document.addEventListener("DOMContentLoaded", function () {
    // Inicializa variáveis para as setas e containers de vídeo
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const videoContainers = document.querySelectorAll(".video-container");
    let currentSlide = 0;
  
    // Função para atualizar o vídeo do slide ativo
    function updateSlide() {
      // Remove o iframe dos outros slides e pausa o vídeo
      videoContainers.forEach((container, index) => {
        const iframe = container.querySelector("iframe");
        if (iframe) {
          iframe.src = ""; // Limpa o src para pausar
        }
        container.classList.remove("active"); // Remove a classe ativa
      });
  
      // Ativa o vídeo no slide atual
      const activeContainer = videoContainers[currentSlide];
      activeContainer.classList.add("active");
  
      // Configura o iframe para carregar o vídeo
      const iframe = activeContainer.querySelector("iframe");
      const videoId = activeContainer.getAttribute("data-video-id");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
  
    // Evento para clicar na seta "anterior"
    prev.addEventListener("click", function () {
      currentSlide = (currentSlide - 1 + videoContainers.length) % videoContainers.length;
      updateSlide();
    });
  
    // Evento para clicar na seta "próxima"
    next.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % videoContainers.length;
      updateSlide();
    });
  
    // Carrega o primeiro vídeo ao abrir o modal
    updateSlide();
  });
  