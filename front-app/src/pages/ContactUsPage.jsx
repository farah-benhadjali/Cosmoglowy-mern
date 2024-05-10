import {Link} from "react-router-dom";


export const ContactUsPage = () => {
    function handleSubmit(e) {

    }

    return (
        <>

            {/* Contact Us */}
            <div className="container col-lg-6">
            <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb bg-transparent m-0 p-2 ">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0">Accueil</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </div>
                </div>
                <div className="row bg-body-secondary rounded-5 justify-content-center py-5">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            
                            <p className="title text-capitalize">
                            <h4 className="title pb-1 text-capitalize text-primary">INFORMATIONS</h4>
                            CosmoGlowy, Route de la Marsa Tunisie<hr/>
                            <h4 className="title pb-1 text-dark text-capitalize text-primary">Appelez-nous</h4>
                            +216 21 161 000
                            <hr/>
                            <h4 className="title pb-1 text-dark text-capitalize text-primary">Envoyez-nous un e-mail</h4>
                            
                            parfemeriebeaute@gmail.com
                            <hr/>
                            <h4 className="title pb-1 text-dark text-capitalize text-primary">Horaire</h4>
                            Lundi - Vendredi :
                            9h - 21h<br/>
                            Samedi - Dimanche :
                            9h - 19h
                                </p>
                                
                        </div>
                        <hr></hr>
                        <h2 className="title pb-1 text-dark text-center text-capitalize">CONTACTEZ-NOUS</h2>
                        <div className="contact-form mt-5 ">
                            <form action="#" method="post" onSubmit={(e) => handleSubmit(e)}>
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
                                        <button type="submit" className="btn btn-primary">Contacter</button>
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