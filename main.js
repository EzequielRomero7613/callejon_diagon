// declarando el nombre del boton y tomandolo por el id
let mybutton = document.getElementById("btn_up");

// cuando se desplaza mas de 20px del top del catalogo, muestra el boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando le da click, sube hasta el titulo
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}


//boton de wpp

$(document).ready(function () {
  $(".btnWhatsApp").click(function () {
    $("#cajadecontactoWhatsApp").toggle("slow");
  });
});


