document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = form.nome.value;
            
            mensagemSucesso.innerText = `A pessoa ${nome} foi cadastrada com sucesso!`;
            mensagemSucesso.style.display = 'block';

            form.reset();
        });
    }
});
