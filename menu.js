let menuOpened = false;
document.querySelector(".burger_menu").addEventListener('click', e=>{
    if(menuOpened === false){
        document.querySelector('nav').classList.add('open');
        menuOpened = true;
    }else{
        document.querySelector('nav').classList.remove('open');
        menuOpened = false;
    }
})