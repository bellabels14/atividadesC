document.addEventListener('DOMContentLoaded', function() {
    const bulbo = document.getElementById('bulbo');
    const ligarBtn = document.getElementById('ligar');
    const desligarBtn = document.getElementById('desligar');
    
    // Cores da lâmpada
    const cores = {
        ligada: '#ffeb3b',  // Amarelo
        desligada: '#ccc'   // Cinza
    };
    
    // Funções para controlar a lâmpada
    function ligar() {
        bulbo.style.fill = cores.ligada;
    }
    
    function desligar() {
        bulbo.style.fill = cores.desligada;
    }
    
    // Event listeners
    ligarBtn.addEventListener('click', ligar);
    desligarBtn.addEventListener('click', desligar);
});