let tecla = document.querySelectorAll('.tc'); //recebe todas as teclas
let somNota = document.getElementById('somNota')
tecla.forEach((t)=>{          //forEach : percorre toda a variavel tecla
    t.addEventListener('click',()=>{
        somNota.src = 'sound/'+ t.id + '.mp3';
        somNota.play();
    });    // coloca um escutador de evento
});