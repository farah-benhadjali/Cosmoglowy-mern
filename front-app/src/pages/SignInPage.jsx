import {useNavigate} from "react-router-dom";
import {useState, useEffect, useReducer, useContext} from "react";
import {Link} from "react-router-dom";
import classes from "./Login.module.css";
import AuthStore from "./auth-Store";

const emailReducer = (prevState, actions) => {
    switch (actions.type) {
        case "user 9a3ed yekteb":
            return {value: actions.payload, isValid: actions.payload.includes("@")};
        case "user nzel el barra":
            return {value: prevState.value, isValid: prevState.value.includes("@")};
        default:
            return {value: "", isValid: null};
    }
};
const passwordReducer = (prevState, actions) => {
    switch (actions.type) {
        case "user 9a3ed yekteb":
            return {
                value: actions.payload,
                isValid: actions.payload.trim().length > 6,
            };
        case "user nzel el barra":
            return {
                value: prevState.value,
                isValid: prevState.value.trim().length > 6,
            };
        default:
            return {value: "", isValid: null};
    }
};
export const SignInPage = () => {
    const AUTH_API = 'http://localhost:4000/api/authadmin/signin';
    const navigate = useNavigate();
    const auth = useContext(AuthStore);

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });
    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;

    useEffect(() => {
        const time = setTimeout(() => {
            console.log("effect");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 1000);
        return () => {
            clearTimeout(time);
            console.log("clean-up");
        };
    }, [emailIsValid, passwordIsValid]);
    const emailChangeHandler = (event) => {
        dispatchEmail({type: "user 9a3ed yekteb", payload: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({
            type: "user 9a3ed yekteb",
            payload: event.target.value,
        });

    };

    const validateEmailHandler = () => {
        dispatchEmail({type: "user nzel el barra"});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: "user nzel el barra"});
    };

    const handleSingIn = (event) => {
        event.preventDefault();
        (emailState.value.includes('parfemeriebeaute@gmail.com'))
            ? navigate('/admin')
            : navigate('/');

        const response = fetch(AUTH_API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: emailState.value,
                password: passwordState.value,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                throw new Error(errorMessage);
            });
        }).then((data) => {
            console.log(data);
            (data.role === 'admin') ? navigate('/admin') : navigate('/');
        }).catch((err) => {
            console.log(err);
        });
        localStorage.setItem('token', 'token');
        //auth.loginHandler(emailState.value, passwordState.value);
    }

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

                        <div className={`${emailState.isValid === false ? classes.invalid : ""}`}>
                            <label htmlFor="floatingInput">Adresse Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com"
                                   id="email"
                                   value={emailState.value}
                                   onChange={emailChangeHandler}
                                   onBlur={validateEmailHandler}/>

                        </div>
                        <br/>
                        <div className={`${
                            passwordState.isValid === false ? classes.invalid : ""
                        }`}>
                            <label htmlFor="floatingPassword">Mot de Passe</label>
                            <input type="password" className="form-control" placeholder="Mot de Passe"
                                   id="password"
                                   value={passwordState.value}
                                   onChange={passwordChangeHandler}
                                   onBlur={validatePasswordHandler}/>
                        </div>
                        <br/>
                        <div className={classes.actions}>
                            <button className="btn btn-primary w-100 py-2" type="submit" disabled={!formIsValid}>Log In</button>
                            <br/>
                            <hr/>
                        </div>

                        <p className="justify-content-center text-center py-3 "><a href="/front-app/src/pages/SignUpPage.jsx">Mot de Passe oublier
                            ?!</a></p>
                    </form>
                    <br/>

                </div>

            </main>
        </>
    )
}

export default SignInPage;