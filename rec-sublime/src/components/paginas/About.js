import React from 'react';
import '../../styles/about.css'

function About () {
    return (
        <div className="bg-dark p-3">
            <div className="container">
                <div className= "text-white text-center my-4" id="about"> 
                    <h2>About us</h2>
                </div>
                <div className="row my-2 d-flex justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-white m-3">
                        <p>Realizamos tazas personalizadas y estampados de remeras con diseños personalizados. Como decoradores de porcelana, cerámica, sabemos la importancia que tiene para nuestros clientes un marcaje de calidad y duradero. En nuestro amplio catálogo de tazas,
                        podrás elegir entre multitud de piezas para personalizar. Una vez hayas elegido el diseño que más se adapte a tu colección, nos encargaremos de personalizarla y de entregartela
                        en tiempo y forma.</p>
                    </div>
                </div>
                <div className="row my-2 d-flex justify-content-center w-100">
                    <div className="col-lg-5 col-md-6 col-sm-12 tarjeta d-flex flex-column justify-content-center align-content-center m-4 tarjeta">
                        <h3 className="text-white text-center">Tazas</h3>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={require("../../images/TazasBlancas.png")} alt="tazaMuestra" className="tazaMuestra m-3"></img>
                        </div>
                        <p className="text-center text-white my-3">Para crear tu propia coleccion de tazas, para proyectos de marketing, o simplimente brindar un regalo, disponemos de diseños personalizados
                           a elección propia.
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 tarjeta d-flex flex-column justify-content-center align-content-center m-4 tarjeta">
                        <h3 className="text-white text-center">Remeras</h3>
                        <div className="w-100 d-flex justify-content-center">
                            <img src={require("../../images/Remera1.jpg")} alt="remeraMuestra" className="remeraMuestra m-3"></img>
                        </div>
                        <p className="text-center text-white my-3">Brindamos estampados personalizados de remeras a eleccion para brindar regalos originales o tambien para proyetos de marketing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;