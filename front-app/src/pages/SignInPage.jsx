import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";

export const SignInPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({email: '', password: '', role:['Admin','Client']});

    const handleSingIn = () => {
        localStorage.setItem('token', 'token');
        (data.role.includes('Admin'))
        ? navigate('/admin')
        : navigate('/') ;
    }
    const handleInputEmail = (e) => setData({...data, email: e.target.value});
    const handleInputPassword = (e) => setData({...data, password: e.target.value});

    return (
        <>
            <main className="container-fluid form-signin w-100 m-auto" style={{height: '70vh'}}>
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb bg-transparent m-0 p-5">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0">Accueil</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Login</li>
                        </ol>
                    </div>
                </div>
            </div>
                    <div className="row rounded-5 justify-content-center py-1">
                        <form className="col-lg-3" onSubmit={handleSingIn}>
                            <h1 className="h3 mb-3 fw-normal text-center">Connectez-vous à votre compte</h1><br/>

                            <div className="form-floating">
                                <input type="email" className="form-control" placeholder="name@example.com"
                                       onChange={(e) => handleInputEmail(e)}/>
                                <label htmlFor="floatingInput">Adresse Email</label>
                            </div><br/>
                            <div className="form-floating">
                                <input type="password" className="form-control" placeholder="Mot de Passe"
                                       onChange={(e) => handleInputPassword(e)}/>
                                <label htmlFor="floatingPassword">Mot de Passe</label>
                            </div>
                            <br/>
                            <button className="btn btn-primary w-100 py-2" type="submit">Log In</button><br/><hr/>
                            <p className="justify-content-center text-center py-3 "><a href="/front-app/src/pages/SignUpPage.jsx">Mot de Passe oublier ?!</a></p>
                        </form><br/>
                        
                    </div>

            </main>
        </>
    )
}