
/*  Recuadro mensaje de bienvenida */
function modalBienvenida(){
    document.getElementById("modalBienvenida").style.display="block";
    document.getElementById("tituloEncabezado").style.animationPlayState="paused";
    document.getElementById("subtituloEncabezado").style.animationPlayState="paused";
    document.getElementById("menu").style.display="none";
    document.documentElement.style.overflow="hidden";
}

/*  Cerrar recuadro mensaje de bienvenida */
function cerrarMBB(){
    document.getElementById("modalBienvenida").style.display="none";
    document.getElementById("tituloEncabezado").style.animationPlayState="running";
    document.getElementById("subtituloEncabezado").style.animationPlayState="running";
    document.getElementById("menu").style.display="block";
    document.documentElement.style.overflow="auto";
} 

/*  Recuadro mensaje de reserva */
function modalReserva(){
    document.getElementById("modalReserva").style.display="block";
    document.documentElement.style.overflow="hidden";

    var nombre = document.getElementById("formNombre").value;
    var numero = document.getElementById("formNumero").value;
    var fecha = document.getElementById("formFecha").value;
    var phone = document.getElementById("formPhone").value;

    var mensaje;

    /*  Comprobación de que los campos requeridos del formulario sean completados */

   (function formCheck(){
        if (!document.getElementById("formNombre").checkValidity()){
            mensaje= "Introduce un valor correcto en nombre.";
            document.getElementById("mensajeReserva").innerHTML= mensaje;

        }  else if (!document.getElementById("formNumero").checkValidity()){
            mensaje= "Introduce un valor correcto en número.";
            document.getElementById("mensajeReserva").innerHTML= mensaje;

        } else if (!document.getElementById("formFecha").checkValidity()){
            mensaje= "Introduce un valor correcto en fecha.";
            document.getElementById("mensajeReserva").innerHTML= mensaje;

        } else if (!document.getElementById("formPhone").checkValidity()){
            mensaje= "Introduce un valor correcto en teléfono.";
            document.getElementById("mensajeReserva").innerHTML= mensaje;
        }
        
        else{
            mensaje="Hola " + nombre + " su reserva para su evento para "+ numero + " de personas"+
            " para el día" + fecha+ " ha sido reservado. Se le enviará la confirmación al siguiente número telefónico " + phone+ "."
        
            document.getElementById("mensajeReserva").innerHTML=mensaje;
      
    
    }
    }  )();
}

/*  Cerrar cuadro de confirmación de la reserva */
function cerrarMBR(){
    document.getElementById("modalReserva").style.display="none";
    document.documentElement.style.overflow="auto";
    document.getElementById("FormNombre"). value;
    document.getElementById("FormNumero"). value;
    document.getElementById("FormFecha"). value;
    document.getElementById("FormPhone"). value;
}

//codigo para menú
var posPreviaScroll= document.documentElement.scrollTop;
window.onscroll = function() {esconderMostrarMenu()};
function esconderMostrarMenu(){
    var posActualScroll = document.documentElement.scrollTop;

    if(posPreviaScroll>posActualScroll){
        document.getElementById("nav-menu").style.top= "0";


        if (posActualScroll>200){
            document.getElementById("nav-menu").style.height= "50px";
            document.getElementById("nav-menu").style.fontSize= "1.75rem";
            document.getElementById("menu").style.lineHeight= "50px";
            document.getElementById("submenu").style.top= "50px";
            document.getElementById("logo").style.padding= "10px";
            document.getElementById("logo").classList.add("scroll-img");
            
         
        }else{
            document.getElementById("nav-menu").style.height= "150px";
            document.getElementById("nav-menu").style.fontSize= "2rem";
            document.getElementById("menu").style.lineHeight= "150px";
            document.getElementById("submenu").style.top= "100px";
            document.getElementById("logo").classList.remove("scroll-img");
           
        }
    }else{

        if (posActualScroll<200){
            document.getElementById("nav-menu").style.height= "50px";
            document.getElementById("nav-menu").style.fontSize= "1.75rem";
            document.getElementById("menu").style.lineHeight= "50px";
            document.getElementById("logo").style.padding= "10px";
            document.getElementById("logo").classList.add("scroll-img");
        }else{
            document.getElementById("nav-menu").style.top= "-150px";
           // document.getElementById("logo").classList.remove("scroll-img");
        }
    }

    posPreviaScroll = posActualScroll;
}


/* Para que se muestre y se oculte el submenu */

function marcarPestana(contenidoAMostrar, tabClicada){
    var listaConPestanas = document.getElementsByClassName ("contenedorProductos");

    for (var i=0; i<listaConPestanas.length; i++){
        listaConPestanas[i].style.display="none";
    }
    document.getElementById(contenidoAMostrar).style.display="block";

    var tabLinks= document.getElementsByClassName("etiquetaPestanas");

    for (var i=0; i<tabLinks.length; i++){
        tabLinks[i].classList.remove("pestanaActiva");
    }
    document.getElementById(tabClicada).classList.add("pestanaActiva");


    var productosP= document.getElementsByClassName("producto");
    for (var i=0; i<productosP.length; i++){
        productosP[i].classList.remove("contAnimado");
    }


    var productosC = document.getElementById(contenidoAMostrar).children;

    for (var i=0; i<productosC.length; i++){
        productosC[i].classList.add("contAnimado");
    }
}



/* Lightbox de galeria */

var listaRutaImgGal = [];
var numeroIMG=0;

function modalLightBoxG(){
    document.getElementById("modalLightBoxG").style.display= "block";
    document.documentElement.style.overflow= 'hidden';
    
    var listaImgGal = document.getElementsByClassName("imgGaleria");
    
    listaRutaImgGal = []
    for (var i=0; i<listaImgGal.length; i++){
        listaRutaImgGal.push(listaImgGal[i].src);
    }

    document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src='C:/Users/Marta/OneDrive/Escritorio/DAW/Interfaces/media/img1.png'>";

}

function readyLightBox(){
    var listaImgGal = document.getElementsByClassName("imgGaleria");

    for (var i=0; i<listaImgGal.length; i++){
        listaRutaImgGal.push(listaImgGal[i].src);
    }

    for (var i=0; i<listaImgGal.length; i++){
        listaImgGal[i].addEventListener('click', openLightBox);
    }

    function openLightBox(){
        var rutaImgClicada = event.currentTarget.src;
        numeroIMG = listaRutaImgGal.indexOf(rutaImgClicada);
        document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG] +">";
        document.getElementById("modalLightBoxG").style.display= "block";
        document.documentElement.style.overflow= 'hidden';
        document.getElementById("nav-menu").style.display="none";
        closeLightBox();
    }

    function closeLightBox(){
        window.addEventListener("click", function(event){

            if(!event.target.matches(".imageLightBox") && !event.target.matches (".imgGaleria") && !event.target.matches (".lbButton") && !event.target.matches(".fa-solid")){
                document.getElementById("modalLightBoxG").style.display= "none";
                document.documentElement.style.overflow= 'auto';
                document.getElementById("nav-menu").style.display="block";
            }

        });
    }
}


function nextImgGal(){
    numeroIMG++;

    if(numeroIMG == listaRutaImgGal.length){
        numeroIMG = 0;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG] +">";
}

function prevImgGal(){
    numeroIMG--;

    if(numeroIMG <0){
        numeroIMG = listaRutaImgGal.length-1;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG] +">";
}

/* Carrusel automatico de inicio */
var bgCounter=0;
function heroSlideShow(){

    var listaInmgBg=[
        "url('../Media/hero1.jpg')",
        "url('../Media/hero2.jpg')",
        "url('../Media/hero3.jpg')"
    ];
    bgCounter++;

    if (bgCounter == listaInmgBg.length){
        bgCounter=0;
    }
   // document.getElementsByClassName("header").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))," + listaInmgBg[bgCounter];
}

var counterNext=0;
var counterMain=0;
function slideShowAnim(){
    var listaImgAnim = document.getElementsByClassName("fondosHero");
    counterNext++;
    counterMain =counterNext-1;

if (counterNext==listaImgAnim.length){
    counterNext=0;
}
if (counterMain<0){
    counterMain = listaImgAnim.length-1;
}


    for (var i=0; i<listaImgAnim.length; i++){
        listaImgAnim[i].classList.remove("nextSlide");
        listaImgAnim[i].classList.remove("mainSlide");
        listaImgAnim[i].classList.remove("hiddenSlide");

        if(i==counterNext){
            listaImgAnim[i].classList.add("nextSlide");
        } else if(i==(counterMain)){
            listaImgAnim[i].classList.add("mainSlide");
        } else{
            listaImgAnim[i].classList.add("hiddenSlide");
        }
    }
}