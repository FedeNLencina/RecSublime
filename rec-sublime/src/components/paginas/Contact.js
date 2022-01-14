import React from 'react';

function Contact(){
    return (
        <div id="contact" className="w-100 bg-dark py-3">
            <div className="container">
                <div className="w-100 text-center text-white my-2">
                    <h2>Contacto</h2>
                </div>
                <div className="row my-5">
                    <div className="col-6 divContact d-flex flex-column align-items-center p-2">
                        <a class="linkContact d-flex justify-content-center" href="https://www.instagram.com/rec_sublime_/?hl=es-la" target="_blank" rel="noreferrer" className="my-4">
                            <i class="fab fa-instagram text-white fs-1"></i>
                        </a>
                        <p class="text-white text-center fs-5">Instagram</p>
                    </div>
                    <div className="col-6 divContact d-flex flex-column align-items-center p-2">
                        <a class="linkContact d-flex justify-content-center" href="https://wa.link/3b07dh" target="_blank" rel="noreferrer" className="my-4">
                            <i class="fab fa-whatsapp text-white fs-1"></i>
                        </a>
                        <p class="text-white text-center fs-5">WhatsApp</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;
