import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";

export const LogOutButton = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        console.log('logging out');
        navigate('/');
    };
    return (
        <Link to='/'
              className="primary btn-primary fs-4 py-2 px-3 ms-2"
              onClick={() => handleLogOut()}>
            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        </Link>
    )
}