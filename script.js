let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = false;
    }
}
function seleccionar(){
   //oculto el menu una vez que selecciono la opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("habilidad");
        habilidades[5].classList.add("equipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}


//detectar el scrolling para la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}