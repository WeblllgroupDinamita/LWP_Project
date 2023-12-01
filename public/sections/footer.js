class Footer extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`<div class="row mt-5">
        <div class="col col-md-1"></div>
        <div class="col col-md-1"></div>
        <div class="col col-md-2">2022-2023</div>
        <div class="col col-md-2 columns">
            <!--Social Media Section-->
            <h5>Redes Sociales</h5>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
        </div>
        <!--More Information-->
        <div class="col col-md-2 columns">
            <h5>Resource</h5>
            <p>Cool Stuff</p>
            <p>More books</p>
        </div>
        <!--About Us Button to go-->
        <div class="col col-md-2 columns">
            <h5>About</h5>
            <a href="aboutUs.html" class="btn btn-primary">Saber Más</a>
        </div>
        <div class="col col-md-1"></div>
        <div class="col col-md-1"></div>
    </div>
    <!--Copyright Sectionn-->
    <div id="copyR">
        <hr
            style="width: 65%; margin: 50px 0px 0px 19%; height: 1px ;border:none;color:black;background-color:black;">
        <p class="fst-italics" style="padding-top: 20px; text-align: center;">Copyright @2023 Todos los derechos Reservados a LWP</p>
    </div>` 
    }     
}

customElements.define('footer-component', Footer);