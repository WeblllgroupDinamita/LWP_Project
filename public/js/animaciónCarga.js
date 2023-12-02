window.addEventListener("load", function () {
document.body.style.opacity = "1";
});

window.onload = function () {
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');

setTimeout(() => {
    loader.classList.add('hide');
    content.classList.remove('hide');
}, 2000);
}

function validarcontraseña() {
var contraseña = document.getElementById("contraseña").value;

if (contraseña == "") {
    alert("Por favor, complete el campo del formulario");
    return false;
}

return true;
}

function validarLogin() {
var correo = document.getElementById("correo").value;
var contra = document.getElementById("contra").value;


if (contra == ""|| correo =="") {
    alert("Por favor, complete los campos del formulario");
    document.getElementById("correo").focus();
    return false;
}
if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo)) ) {
    alert("Agrega el formato de correo");
    document.getElementById("correo").focus();
    return false;
}



return true;
}
function validarSignUp() {
    var username = document.getElementById("username").value;
    var Gmail = document.getElementById("Gmail").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;
    var ahno = document.getElementById("ahno").value;

    var temas = document.getElementById("temas").value;
    var texto = document.getElementById("texto").value;



if (username == "" || Gmail =="" || mes =="" || dia =="" || ahno =="" || temas =="" || texto == "") {
    alert("Por favor, complete los campos del formulario");
    return false;
}
if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Gmail)) ) {
    alert("Agrega el formato de correo");
    document.getElementById("Gmail").focus();
    return false;
}

return true;
}