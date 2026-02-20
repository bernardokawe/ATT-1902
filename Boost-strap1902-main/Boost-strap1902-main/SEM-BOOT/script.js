let x = document.getElementById("menu");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");    


function openMenu() {x.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';

}

function closeMenu() {
    x.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';

}



function mostrarAlerta(){
    alert("Para mais informações, visite nosso site: www.boost-strap.com.br");
}