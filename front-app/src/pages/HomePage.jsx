import React, {useEffect, useState} from "react";
import {HeroSection} from "../components/HeroSection";
import {faBoxOpen, faCreditCard, faHeadset, faTruck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {ProductService} from "../services/ProductService";
import {ProductItem} from "../components/ProductItem";


export const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await ProductService.get4Products();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <HeroSection/>
            <div className="py-5 bg-white text-black">
                <div className="container">
                    <div className="bg-primary">
                        <div className="row py-5 px-3 ">
                            <div className="col-lg-3 col-sm-6">
                                <div className="d-flex flex-column flex-sm-row justify-content-center">
                                    <FontAwesomeIcon icon={faTruck}
                                                     className="fs-4 align-self-center mb-2 mb-sm-0 me-auto me-sm-3"/>
                                    <div className="media-body">
                                        <h4 className="fs-5">Livraison gratuite</h4>
                                        <p className="fs-6">Sur toutes commandes supérieures à 100 TND</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="d-flex flex-column flex-sm-row justify-content-center">
                                    <FontAwesomeIcon icon={faBoxOpen}
                                                     className="fs-4 align-self-center mb-2 mb-sm-0 me-auto me-sm-3"/>
                                    <div className="media-body">
                                        <h4 className="fs-5">Retours sans frais</h4>
                                        <p className="fs-6">Les retours sont gratuits sous 3 jours</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="d-flex flex-column flex-sm-row justify-content-center">
                                    <FontAwesomeIcon icon={faCreditCard}
                                                     className="fs-4 align-self-center mb-2 mb-sm-0 me-auto me-sm-3"/>
                                    <div className="media-body">
                                        <h4 className="fs-5">Paiement 100% Sécurisé</h4>
                                        <p className="fs-6">Votre paiement est en sécurité avec nous.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="d-flex flex-column flex-sm-row justify-content-center">
                                    <FontAwesomeIcon icon={faHeadset}
                                                     className="fs-4 align-self-center mb-2 mb-sm-0 me-auto me-sm-3"/>
                                    <div className="media-body">
                                        <h4 className="fs-5">Assistance 24h/24 et 7j/7</h4>
                                        <p className="fs-6">Contactez-nous 24h/24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="align-items-center">
                <div className="col-12">
                    <div className="text-center">
                        <h2 className="display-4 fw-medium pb-3 mb-3">Notre Produits</h2>
                        
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {products.map((product, index) => (
                        <ProductItem product={product} itemkey={`${product.id}-${index}`}/>
                    ))}
                </div>
            </div>

            <div className="w-75 m-auto my-4">
                <hr/>
            </div>

            <div className="align-items-center">
                <div className="col-12">
                    <div className="text-center">
                        <h2 className="display-4 fw-medium pb-3 mb-3">Notre Partenaires</h2>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="row w-100 justify-content-center">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div className="align-self-center col-md-1 col-sm-2" key={item}>
                            <div className="card" style={{width: '7rem', border: 'none'}}>
                                <img src={`assets/images/brands/${item}.png`} alt={`brand-${item}`}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
            <div className="w-75 m-auto my-4">
                <hr/>
            </div>
            <div className="text-center">
                        <h2 className="display-4 fw-medium pb-3 mb-3">Contacter CosmoGlowy</h2>
                    </div>
            {/* Contact Us */}
            <div className="container col-lg-6">
                <div className="row bg-body-secondary rounded-5 justify-content-center py-1">
                    <div className="col-lg-9">
                        <div className="contact-form mt-5 ">
                            <form action="#" method="post">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="inputName" className="form-label">Votre Nom</label>
                                        <input type="name" className="form-control" id="inputName"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputSurname" className="form-label">Votre Prénom</label>
                                        <input type="surname" className="form-control" id="inputSurname"/>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="inputEmail" className="form-label">Votre Email</label>
                                        <input type="text" className="form-control" id="inputEmail" placeholder="john@gmail.com"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputName" className="form-label">Votre Téléphone</label>
                                        <input type="name" className="form-control" id="inputName"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputSurname" className="form-label">Votre Address</label>
                                        <input type="surname" className="form-control" id="inputSurname"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputSubject" className="form-label">Sujet</label>
                                        <input type="text" className="form-control" id="inputSubject"/>
                                    </div>
                                    <label htmlFor="inputMessage">Message</label>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Ajouter un message ou une reclamation ici. Merci."
                                            id="inputMessage"
                                            style={{height: '150px'}}>
                                        </textarea>
                                        
                                    </div>
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary text-black">Contacter</button>
                                    </div>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}