document.addEventListener("DOMContentLoaded", () => {
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');
    const content = document.getElementById('content');
    const input = document.querySelector('.input');
    const h1 = content.querySelector('h1');
    const p = content.querySelector('p');
    const searchIndicator = document.getElementById('search-indicator');

    leftCurtain.addEventListener('animationend', () => {
        leftCurtain.style.display = 'none';
        rightCurtain.style.display = 'none';
        content.style.display = 'block';
        content.style.animation = 'fadeIn 2s forwards';
    });

    input.addEventListener('focus', () => {
        h1.style.animation = 'fadeOut 1s forwards';
        p.style.animation = 'fadeOut 1s forwards';
        input.style.transition = 'all 0.5s';
        input.style.marginTop = '20px';
        content.classList.add('shrink-content');
        searchIndicator.style.opacity = '1';
    });

    input.addEventListener('blur', () => {
        h1.style.animation = 'fadeIn 1s forwards';
        p.style.animation = 'fadeIn 1s forwards';
        input.style.transition = 'all 0.5s';
        input.style.marginTop = '0';
        content.classList.remove('shrink-content');
        searchIndicator.style.opacity = '0';
    });

    // Event listener for Enter key
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission

            if (input.value.trim() === "") {
                showMessage();
            } else {
                showLoader();
            }
        }
    });

    // Empty message
    function showMessage() {
        content.innerHTML = `
            <div class="message-box">
                <div class="big-face">( ͡° ͜ʖ ͡°)</div>
                <div class="message">hmm... você não digitou nada</div>
                <button class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                    <div class="text">Voltar</div>
                </button>
            </div>
        `;

        const backButton = document.querySelector('.button');
        backButton.addEventListener('click', () => {
            location.reload(); // reload nessa porra
        });
    }

    // Not Empty
    function showLoader() {
        content.innerHTML = `
            <div class="loader">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        `;

        setTimeout(showErrorMessage, 7000);
    }

    // mensagem de erro
    function showErrorMessage() {
        content.innerHTML = `
            <div class="message-box">
                <div class="big-face">(ㆆ_ㆆ)</div>
                <div class="message">oops, parece que ouve um erro não conseguimos achar uma resposta apropriada</div>
                <div class="message">gostaria de ver sugestões do nosso algoritmo para você?</div>
                <button class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                    <div class="text">Ver mais</div>
                </button>
            </div>
        `;

        const moreButton = document.querySelector('.button');
        moreButton.addEventListener('click', showMore);
    }

    // ver mais função
    function showMore() {
        content.innerHTML = `
            <div class="image-container">
                <img src="rose.png" alt="Rose">
                <div class="text">mensagem substituida pq o wilson pediu, mas eu pedia minha namorada em casamento na época</div>
            </div>
        `;
    }
});
//ta fuçando aqui pq gata? se pica
