        const links = [
            "https://tplogin.teleperformance.com.br/tploginweb",
            "https://srt.facebook.com/",
            "https://minhaescala.teleperformance.com.br/pt_BR/group/webstation/my-schedule?%20&viewFormat=monthly",
            "https://www.github.com",
            "https://www.seadc.ccms.teleperformance.com/ccms-bin/home.pl"
        ];

        const botao = document.getElementById('abrirLinksBtn');
        const aviso = document.getElementById('popup-warning');

        // Exibe o aviso ao usuário para prepará-lo
        window.onload = () => {
            aviso.style.display = 'block';
        };

        botao.addEventListener('click', () => {
            let i = 0;
            function abrirProximoLink() {
                if (i < links.length) {
                    // Adicione esta linha para atualizar o texto do botão
                    botao.textContent = `Abrindo link ${i + 1}/${links.length}`;

                    const novaJanela = window.open(links[i], '_blank');

                    if (!novaJanela || novaJanela.closed || typeof novaJanela.closed === 'undefined') {
                        alert("O navegador bloqueou um ou mais pop-ups. Por favor, permita-os para continuar.");
                        return;
                    }

                    i++;
                    if (i < links.length) {
                        setTimeout(abrirProximoLink, 500);
                    } else {
                        // Opcional: Atualize o texto do botão para o original quando todos os links forem abertos
                        botao.textContent = 'Abrir Links';
                    }
                }
            }
            abrirProximoLink();
        });
