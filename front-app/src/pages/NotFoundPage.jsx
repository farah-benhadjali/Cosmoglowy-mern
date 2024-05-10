import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return(
        <>
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4 text-dark">Page non trouvée</h1>
                        <p className="mb-4 text-dark">
Nous sommes désolés, la page que vous recherchez n’existe pas sur notre site ! Peut-être aller chez nous à 
                            page d'accueil ou essayez d'utiliser une recherche?</p>
                        <Link className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" to="/">Retourner à page d'Accueil</Link>
                    </div>
                </div>
            </div>

        </>
    )
}