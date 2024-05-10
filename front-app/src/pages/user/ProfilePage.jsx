import {useEffect, useState} from "react";
import {UserService} from "../../services/UserService";

export const ProfilePage = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userId = 1; // TODO: Get userId from auth context
        const fectchUserData = async () => {
            const data = await UserService.getUserProfile(userId);
            setUser(data);
        }
        fectchUserData();
    }, []);

    const handleUpdateProfile = (e) => {
        
    };
    return (
        <>
            <div className="row g-5 mt-4 mx-4 bg-light rounded-5">
                <div className="col-md-5 col-lg-4 d-flex justify-content-center align-items-center">
                    <div style={{
                        width: '30vh',
                        height: '30vh',
                        maxWidth: '100%',
                        maxHeight: '75vh',
                        backgroundImage: `url(${user.profilePic})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: "50%",
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)',
                    }}>
                    </div>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Informations sur le profil</h4>
                    <form className="needs-validation" noValidate="" onSubmit={(e)=>handleUpdateProfile(e)}>
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder={user.username} required=""/>
                                    <div className="invalid-feedback">
                                    Votre nom d'utilisateur est requis.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder={user.email} required=""/>
                                <div className="invalid-feedback">
                                Veuillez entrer une adresse e-mail valide pour les mises à jour d'expédition.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Adresse</label>
                                <input type="text" className="form-control" id="address" placeholder={user.adress} required=""/>
                                <div className="invalid-feedback">
                                S'il vous plaît entrez votre adresse de livraison.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Téléphone</label>
                                <input type="text" className="form-control" id="address" placeholder={user.tel} required=""/>
                                <div className="invalid-feedback">
                                Veuillez entrer votre numéro de téléphone.
                                </div>
                            </div>

                        </div>

                        <hr className="my-4"/>
                        <div className="w-100 d-flex justify-content-end">
                            <button className="w-25 btn btn-primary btn-lg" type="submit">Modifier le profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}