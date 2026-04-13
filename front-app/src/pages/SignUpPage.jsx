import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_BASE_URL} from "../utils/Constants";

export const SignUpPage = () => {
    const AUTH_API = `${API_BASE_URL}/authadmin`;

    const navigate = useNavigate();

    const [inputName, setName] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [inputPhone, setPhone] = useState('');
    const [inputAddress, setAddress] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        fetch(`${AUTH_API}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: inputName,
                email: inputEmail,
                password: inputPassword,
                phone: inputPhone,
                address: inputAddress
            })
        }).then(response => {
            if (response.ok) {
                console.log('User created successfully');
                navigate('/sign-in');
            } else {
                console.log('Error while creating user');
            }
        })
            .catch((error) => console.error('Error:', error));

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
                            <input type="text"
                                   className="form-control"
                                   id="inputName"
                                   value={inputName}
                                   onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="inputName">Votre Nom</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="email"
                                   className="form-control"
                                   id="inputEmail"
                                   value={inputEmail}
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="inputEmail">Adresse Email</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="password"
                                   className="form-control"
                                   id="inputPassword"
                                   value={inputPassword}
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="inputPassword">Mot de Passe</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="tel"
                                   className="form-control"
                                   id="inputPhone"
                                   value={inputPhone}
                                   onChange={(e) => setPhone(e.target.value)}/>
                            <label htmlFor="inputPhone">Téléphone</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text"
                                   className="form-control"
                                   id="inputAddress"
                                   value={inputAddress}
                                   onChange={(e) => setAddress(e.target.value)}/>
                            <label htmlFor="inputAddress">Adresse</label>
                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">Enregistrer</button>
                    </form>
                </div>
            </main>
        </>
    )
}