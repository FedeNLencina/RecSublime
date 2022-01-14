import React from 'react';
import '../../styles/navBarInferior.css';

function NavBarInferior(){
    return (
        <div id="navInferior" className="w-100 bg-dark pt-3">
            <div className= "container">
                <ul class="navLinks d-flex justify-content-center">
                    <li>
                        <a class="nav-link active text-white linkBottom" aria-current="page" href="#">Home</a>
                    </li>
                    <li>
                        <a class="nav-link active text-white linkBottom" aria-current="page" href="#about">About</a>
                    </li>
                    <li>
                        <a class="nav-link active text-white linkBottom" href="#diseños">Diseños</a>
                    </li>
                    <li>
                        <a class="nav-link active text-white linkBottom" href="#https://www.instagram.com/rec_sublime_/?hl=es-la" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <a class="nav-link active text-white linkBottom" href="#contact">Contacto</a>
                    </li>
                </ul>
                
            </div>
            <div class="d-flex justify-content-center copyright">
                <p class="text-light fs-4 pt-3">©Rec Sublime</p>
            </div>
        </div>
        
    )
}

export default NavBarInferior;