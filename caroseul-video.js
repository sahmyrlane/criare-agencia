var players = [];
var currentIndex = 0;
var totalVideos = $('.video-container').length; // Total de vídeos baseado no HTML

// Função para criar players do YouTube
function onYouTubeIframeAPIReady() {
    $('.video-container').each(function(index) {
        var videoId = $(this).data('video-id'); // Obtém o ID do vídeo do atributo data
        players[index] = new YT.Player('player' + (index + 1), {
            videoId: videoId,
            events: {
                'onReady': onPlayerReady
            }
        });
    });
}

function onPlayerReady(event) {
    // Função chamada quando o player estiver pronto
}

function stopAllVideos() {
    players.forEach(function(player) {
        player.stopVideo();  // Para todos os vídeos
    });
}

function updateCarousel() {
    // Parar o vídeo atual
    stopAllVideos();

    // Atualiza o vídeo ativo
    $('.video-container').removeClass('active').eq(currentIndex).addClass('active');
}

$('#prev').click(function () {
    if (currentIndex === 0) {
        currentIndex = totalVideos - 1; // Volta ao último vídeo
    } else {
        currentIndex--;
    }
    updateCarousel();
});

$('#next').click(function () {
    if (currentIndex === totalVideos - 1) {
        currentIndex = 0; // Volta ao primeiro vídeo
    } else {
        currentIndex++;
    }
    updateCarousel();
});