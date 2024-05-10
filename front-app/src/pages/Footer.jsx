import {Link} from "react-router-dom";
import {APP_NAME} from "../utils/Constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <>
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <div className="bi" width="30" height="24">
                            <h1 className="text-primary fs-3 open-sans-700">{APP_NAME}</h1>
                        </div>
                    </Link>
                    <span className="mb-3 mb-md-0 text-black">© 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link to="/sign-in" className="primary btn-primary fs-4 py-2 ms-2">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link to="/sign-in" className="primary btn-primary fs-4 py-2 ms-2">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link to="/sign-in" className="primary btn-primary fs-4 py-2 ms-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}