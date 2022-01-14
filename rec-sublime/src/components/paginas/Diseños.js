import React from 'react';
import '../../styles/diseños.css';

function Diseños() {
    return (
        <div id="diseños" className="w-100 bg-dark py-3">
            <div className="container">
                <div className="w-100 text-center text-white my-2">
                    <h2>Diseños</h2>
                </div>
                <div className="row d-flex justify-content-center diseñoRow my-2">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/Tazas2.png')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/TazasMarrones.png')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/Tazas3.png')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center diseñoRow my-2">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/Remera2.jpg')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/RemeraHombre2.png')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/Remera3.jpg')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center diseñoRow my-2">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/TazaSanLorenzo.jpg')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/TazaStich.png')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="divDiseño m-2">
                            <img src={require('../../images/TazaAnime1.jpg')} alt="Tazas" className="imgDiseño"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Diseños;