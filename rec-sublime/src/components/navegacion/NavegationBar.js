import React from 'react';
import './NavegationBar.css'

function NavegationBar(){
    return(
        <div id ="home">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid py-4">
                    <div class="d-flex justify-content-center w-50">
                        <h2 class="text-white tituloNav">Rec Sublime</h2>
                    </div>
                    <button class="navbar-toggler btn btn-outline-dark border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon rounded-circle"></span>
                    </button>
                    <div class="collapse navbar-collapse w-50" id="navbarNavAltMarkup">
                        <div class="container d-flex justify-content-start justify-content-lg-around w-100 ">
                            <ul class="navbar-nav listaLinks">
                                <li>
                                    <a class="nav-link active text-white fs-5 mx-3" aria-current="page" href="#about">About us</a>
                                </li>
                                <li>
                                    <a class="nav-link active text-white fs-5 mx-3" href="#diseños">Diseños</a>
                                </li>
                                <li>
                                    <a class="nav-link active text-white fs-5 mx-3" href="#https://www.instagram.com/rec_sublime_/?hl=es-la" target="_blank">Instagram</a>
                                </li>
                                <li>
                                    <a class="nav-link active text-white fs-4 mx-3" href="#contact">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavegationBar;