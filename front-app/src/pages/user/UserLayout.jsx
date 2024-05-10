import {Link, Outlet, Route, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {APP_NAME, APP_NAME_ABBREVIATION} from "../../utils/Constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {ProfilePage} from "./ProfilePage";
import {UpdateProfileForm} from "./UpdateProfileForm";
import {OrdersPage} from "./OrdersPage";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {LogOutButton} from "../../components/LogOutButton";
import {Footer} from "../Footer";
import {UserService} from "../../services/UserService";

export const UserLayout = () => {
    const userId = 1; // TODO: Get userId from auth context
    const location = useLocation();
    const path = location.pathname;

    const [user, setUser] = useState({})

    useEffect(() => {
        const fectchUserData = async () => {
            const data = await UserService.getUserProfile(userId);
            setUser(data);
        }
        fectchUserData();
    }, []);

    return (
        <>
            <main className="d-flex flex-nowrap" style={{minHeight: '100vh'}}>
                <div className="d-none d-md-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "280px"}}>
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto mx-auto link-body-emphasis text-decoration-none">
                        <h1 className="text-primary fs-3 open-sans-700">{APP_NAME}</h1>
                    </Link>
                    <hr/>

                    <ul className="nav nav-pills flex-column gap-2">
                        <li className="nav-item">
                            <Link to="/user" className={`nav-link ${path === '/user' ? 'active' : ''}`} aria-current="page">
                                <FontAwesomeIcon icon={faHome}/> <span className="ms-3">Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${userId}/orders`} className={`nav-link ${path.includes('/orders') ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faBoxOpen}/> <span className="ms-3">Orders</span>
                            </Link>
                        </li>
                    </ul>

                    <hr className="mt-auto"/>

                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center link-body-emphasis text-decoration-none">
                            <img src={user.profilePic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>{user?.username}</strong>
                        </div>
                        <LogOutButton/>
                    </div>
                </div>
                <div className="d-flex d-md-none flex-column flex-shrink-0 py-3 bg-body-tertiary" style={{width: '4.5rem'}}>
                    <Link to="/" className="d-flex align-items-center mx-auto link-body-emphasis text-decoration-none">
                        <h1 className="text-primary fs-3 open-sans-700">{APP_NAME_ABBREVIATION}</h1>
                    </Link>
                    <hr/>

                    <ul className="nav nav-pills flex-column gap-2 align-items-center">
                        <li className="nav-item">
                            <Link to="/user" className={`nav-link ${path === '/user' ? 'active' : ''}`} aria-current="page">
                                <FontAwesomeIcon icon={faHome}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${userId}/orders`} className={`nav-link ${path.includes('/orders') ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faBoxOpen}/>
                            </Link>
                        </li>
                    </ul>

                    <hr className="mt-auto"/>

                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <div className="link-body-emphasis text-decoration-none" aria-expanded='true' data-bs-toggle="dropdown">
                            <img src={user.profilePic} alt={user.username} width="32" height="32" className="rounded-circle"/>
                        </div>
                        <LogOutButton/>
                    </div>
                </div>

                <div className="d-flex flex-column flex-grow-1">
                    <div className="mb-auto">
                        <Outlet/>
                    </div>
                    <Footer/>
                </div>
            </main>
        </>
    )
}