class Menu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
    <img src="images/LWP_Logo(Hat).png" alt="" width="25%"  class="d-inline-block align-text-top">
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aboutUs.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contactos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="addPDF.html">PDF's</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="content.html">Contenido de Actividades</a>
                </li>
            <li class="nav-item">
            <a class="nav-link" href="ModulePDF.html">Modulos</a>
        </li>
                <li class="nav-item">
                    <a class="nav-link" href="suggestions.html">Sugerencias</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink_02" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Usuarios
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink_02">
                        <li><a class="dropdown-item" href="signup.html">Registrar nuevo usuario</a></li>
                        <li><a class="dropdown-item" href="login.html">Autenticar usuario</a></li>
                        <li><a class="dropdown-item" onclick="salir()">Cerrar sesión</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>`
    }
}

customElements.define('menu-component', Menu);