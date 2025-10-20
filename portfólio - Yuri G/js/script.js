// Espera o documento HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Inicializa a funcionalidade do carrossel de projetos.
     */
    function iniciarCarrossel() {
        const carrosselInner = document.querySelector('.carrossel-inner');
        const images = document.querySelectorAll('.carrossel img');
        
        if (!carrosselInner || images.length === 0) return; 

        const totalImages = images.length;
        let currentIndex = 0;

        function updateCarousel() {
            currentIndex = (currentIndex + 1) % totalImages;
            const offset = currentIndex * -(100 / totalImages);
            carrosselInner.style.transform = `translateX(${offset}%)`;
        }

        setInterval(updateCarousel, 3000); // Roda a cada 3 segundos
    }

    /**
     * Inicializa a funcionalidade de virar os cards de forma precisa.
     */
    function iniciarFlipCards() {
        // Para cards de competência: o clique em qualquer lugar da 'frente' vira o card.
        const competenciaCardFronts = document.querySelectorAll('.card-front.card-competencia');
        competenciaCardFronts.forEach(cardFront => {
            cardFront.addEventListener('click', () => {
                const cardContainer = cardFront.closest('.card-container');
                if (cardContainer) {
                    cardContainer.classList.toggle('is-flipped');
                }
            });
        });

        // Para TODOS os cards (competência e projetos): o botão de voltar/descrição vira o card.
        const flipButtons = document.querySelectorAll('.flip-button');
        flipButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); 
                const cardContainer = button.closest('.card-container');
                if (cardContainer) {
                    cardContainer.classList.toggle('is-flipped');
                }
            });
        });
    }

    /**
     * Controla a visibilidade do botão "Voltar ao Topo".
     */
    function iniciarBotaoVoltarAoTopo() {
        const btn = document.getElementById('voltar-ao-topo-btn');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            // Mostra o botão após rolar 300 pixels
            if (window.scrollY > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
    }

    /**
     * Controla a visibilidade da barra de navegação lateral.
     */
    function iniciarSidebarNav() {
        const sidebar = document.getElementById('sidebar-nav');
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const triggerPoint = headerHeight + navHeight + 50; // Ponto para mostrar a sidebar

        if (!sidebar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > triggerPoint) {
                sidebar.classList.add('visible');
            } else {
                sidebar.classList.remove('visible');
            }
        });
    }

    // Chama as funções para iniciar as funcionalidades da página
    iniciarCarrossel();
    iniciarFlipCards();
    iniciarBotaoVoltarAoTopo(); 
    iniciarSidebarNav(); 
});