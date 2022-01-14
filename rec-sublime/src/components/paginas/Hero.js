import React from 'react';
import '../../styles/hero.css';


function Hero () {
    return (
        <div className="hero" id="hero">
            <div className="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center logoContainer">
                        <img src={require('../../images/RecSublime2.jpeg')}alt="Logo" class="logo"></img>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="container slogan">
                            <p>"El estilo no tiene reglas, las creas tú" </p>
                            <p>¡Tazas personalizadas y estampado de remeras!</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero;