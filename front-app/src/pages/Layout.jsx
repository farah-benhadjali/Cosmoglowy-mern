import {Link, Outlet, useLocation} from "react-router-dom";
import {APP_NAME} from "../utils/Constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartShopping, faRightToBracket, faUser, faUserPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Footer} from "./Footer";
import {LogOutButton} from "../components/LogOutButton";

export const Layout = () => {
    const location = useLocation();
    const path = location.pathname;
    const [isOpened, setIsOpened] = useState(false);
    const handleMenuState = () => setIsOpened(!isOpened);

    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container px-0">
                    <nav className="navbar navbar-light navbar-expand-xl ms-auto fixed">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-primary display-6 open-sans-700">{APP_NAME}</h1>
                        </Link>
                        <button className="navbar-toggler py-2 px-3" type="button" onClick={() => handleMenuState()}>
                            {isOpened ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
                        </button>
                        <div className={`navbar-collapse bg-light py-2 ${!isOpened && 'collapse'}`} id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link to="/" className={`nav-item nav-link text-black fs-4  ${path === '/' ? 'active' : ''}`}>
                                    Accueil
                                </Link>
                                <Link to="/store" className={`nav-item nav-link text-black fs-4  ${path === '/store' ? 'active' : ''}`}>
                                    Produits
                                </Link>
                                <Link to="/contact-us" className={`nav-item nav-link text-black fs-4 ${path === '/contact-us' ? 'active' : ''}`}>
                                    Contact
                                </Link>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                                <Link to="/cart" className="primary fs-4 py-2 px-3 ms-2">
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                </Link>
                                {localStorage.getItem('token') !== null
                                    ? <>
                                        <Link to="/user" className="primary btn-primary fs-4 py-2 px-3 ms-2">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </Link>
                                        <LogOutButton/>
                                    </>
                                    : <>
                                        <Link to="/sign-in" className="primary btn-primary fs-4 py-2 px-3 ms-2">
                                            <FontAwesomeIcon icon={faRightToBracket}/>
                                        </Link>
                                        <Link to="/sign-up" className="primary btn-primary fs-4 py-2 px-3 ms-2">
                                            <FontAwesomeIcon icon={faUserPlus}/>
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}