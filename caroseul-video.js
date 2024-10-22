var currentIndex = 0;
var totalVideos = $('.video-container').length; // Total de vídeos baseado no HTML

// Função para parar todos os vídeos
function stopAllVideos() {
    $('.video-container iframe').each(function() {
        // Remove o 'src' de todos os iframes para parar os vídeos
        $(this).attr('src', '');
    });
}

// Função para iniciar o vídeo atual
function playCurrentVideo() {
    var currentVideoId = $('.video-container').eq(currentIndex).data('video-id');
    var iframe = $('.video-container').eq(currentIndex).find('iframe');

    // Define o src do iframe com o ID correto do vídeo
    iframe.attr('src', 'https://www.youtube.com/embed/' + currentVideoId + '?autoplay=1');
}

// Atualiza o carrossel para exibir o vídeo correto
function updateCarousel() {
    // Parar todos os vídeos antes de mudar o ativo
    stopAllVideos();

    // Atualiza o vídeo ativo
    $('.video-container').removeClass('active').eq(currentIndex).addClass('active');
    
    // Toca o vídeo atual
    playCurrentVideo();
}

// Evento para o botão 'Anterior'
$('#prev').click(function () {
    if (currentIndex === 0) {
        currentIndex = totalVideos - 1; // Volta ao último vídeo
    } else {
        currentIndex--;
    }
    updateCarousel();
});

// Evento para o botão 'Próximo'
$('#next').click(function () {
    if (currentIndex === totalVideos - 1) {
        currentIndex = 0; // Volta ao primeiro vídeo
    } else {
        currentIndex++;
    }
    updateCarousel();
});

// Inicializa o primeiro vídeo ao carregar a página
$(document).ready(function() {
    playCurrentVideo();
});
