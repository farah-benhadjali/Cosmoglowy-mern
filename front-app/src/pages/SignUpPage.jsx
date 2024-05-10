import {Link} from "react-router-dom";

export const SignUpPage = () => {
    const handleSignUp = (e) => {

    }
    return (
        <>
            <main className="container-fluid form-signin w-100 m-auto">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb bg-transparent m-0 p-4">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0">Accueil</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Registre</li>
                        </ol>
                    </div>
                </div>
            </div>
                    <div className="row  rounded-5 justify-content-center py-0">
                        <form className="col-lg-4" onSubmit={(e) => handleSignUp(e)}>
                            <h1 className="h2 mb-3 fw-normal text-center">Créer Votre Compte</h1>
                             <br/>
                            <div className="form-floating my-3">
                                <input type="text" className="form-control" id="inputName"/>
                                <label htmlFor="inputName">Votre Nom</label>
                            </div>
                            <div className="form-floating my-3">
                                <input type="email" className="form-control" id="inputEmail"/>
                                <label htmlFor="inputEmail">Adresse Email</label>
                            </div>
                            <div className="form-floating my-3">
                                <input type="password" className="form-control" id="inputPassword"/>
                                <label htmlFor="inputPassword">Mot de Passe</label>
                            </div>
                            <div className="form-floating my-3">
                                <input type="tel" className="form-control" id="inputPhone"/>
                                <label htmlFor="inputPhone">Téléphone</label>
                            </div>
                            <div className="form-floating my-3">
                                <input type="text" className="form-control" id="inputAddress"/>
                                <label htmlFor="inputAddress">Adresse</label>
                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit">Enregistrer</button>
                        </form>
                    </div>
            </main>
        </>
    )
}