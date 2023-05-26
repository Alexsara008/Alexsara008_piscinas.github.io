const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `

<!-- inicio de header -->
<header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark bd-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index.html">El MANANTIAL</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="servicios.html" aria-current="page">Servicios <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="galeria.html">Galería</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="precios.html">Precios</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Instalaciones</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="piscinas.html">Piscinas</a>
                            <a class="dropdown-item" href="canchas.html">Canchas</a>
                            <a class="dropdown-item" href="zonahumeda.html">Zona Húmeda</a>
                        </div>
                    </li>
                </ul>

                
            </div>
      </div>
    </nav>
</header>
<!-- fin de header -->

`;

footer.innerHTML = `
<!-- inicio footer -->

<footer>
    <div  style="background-color: #212529;color: aliceblue; padding: 15px;" class="row">

        <div class="col-md-4 text-center">
             <b> <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/423px-Google_Contacts_icon_%282022%29.svg.png" height="20px" width="20px
                " class="img-fluid rounded-top" alt=""> Contacto <br>09552415454 </p></b>
            <b> <p>Redes Sociales <br>

                 <img src="https://www.facebook.com/images/fb_icon_325x325.png" width="25px" height="25px" alt=""> <a name="" id="" href="https://www.facebook.com/groups/825091058271320" target="_blank" role="button">Facebook</a> <br>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" width="25px" height="25px" alt=""> <a name="" id="" href="https://www.instagram.com/" target="_blank" role="button">Instagram</a>
            </p></b>
        </div>

        <div class="col-md-4 text-center">
            <p>Dirección: <br>
                Calle San Isidro Labrador y Juan Abel  Echeverría <br>
                Latacunga - Ecuador <br><br>
                Derechos Reservados <br> Sara &copy; 2023
            </p>
        </div>

        <div class="col-md-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042521.7156933215!2d-81.04139454374999!3d-0.9233581999999977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d460fd1691a7ff%3A0x62bec746adf74c55!2sComplejo%20Tur%C3%ADstico%20Sol%20Caribe!5e0!3m2!1ses!2sec!4v1685126683786!5m2!1ses!2sec" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>

</footer>
<!-- fin footer -->

`;