
let buttonMenuAbrir = document.querySelector(".menu-lateral__toggle");
let buttonMenuFechar = document.querySelector(".menu-aberto__btn-close");

var fundo = document.querySelector('main');
let menuContainer = document.querySelector('.menu-aberto');


function mostrarMenu(){
    menuContainer.classList.remove('menu-abrindo');
    menuContainer.style.opacity="1";
}

fundo.addEventListener('animationend', function(item){

    console.log(item)

    // menuContainer.addEventListener('animationend', mostrarMenu);

    if(item.animationName == 'inverterFundo'){
        fundo.classList.remove('fundo-invertido');
        fundo.classList.add('fundo-invertido-processo');

        menuContainer.classList.add('menu-abrindo');
    }else{
        menuContainer.style.opacity="0";
        fundo.classList.remove('animacao-fundo-original');
        fundo.classList.remove('fundo-invertido-processo');
    }


});

menuContainer.addEventListener('animationend', function(item){
    
    if(item.animationName == 'abrirMenu'){
        menuContainer.classList.remove('menu-abrindo');
        menuContainer.style.opacity="1";
    }else{
        menuContainer.style.opacity='0';
        menuContainer.classList.add('menu-aberto--disabled');

        fundo.classList.add('animacao-fundo-original');
        fundo.classList.remove('fundo-invertido-processo');
        // fundo.classList.remove('fundo-invertido-processo');

        menuContainer.classList.remove('menu-fechado');
        menuContainer.classList.remove('menu-abrindo');

    }

});


function abrirMenu(){
    menuContainer.classList.remove('menu-aberto--disabled');
    var fundo = document.querySelector('main');

    fundo.classList.add('fundo-invertido');

}

function fecharMenu(){
    var fundo = document.querySelector('main');

    menuContainer.classList.add('menu-fechado');
    
}

buttonMenuAbrir.addEventListener('click', abrirMenu);
buttonMenuFechar.addEventListener('click', fecharMenu);