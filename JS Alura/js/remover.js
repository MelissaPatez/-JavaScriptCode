var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode;
    paiAlvo.remove()
});


// pacientes.forEach(function(paciente) {

//     paciente.addEventListener("dblclick", function() {
//         this.remove(); //this esta atrelado ao dono do evento nesse caso o paciente
//     });
 
// });

//this.remove(); this esta atrelado ao dono do evento nesse caso o paciente
//event.target  ; quem sofreu o evento