import {Link, Outlet, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {UserService} from "../../services/UserService";
import {APP_NAME, APP_NAME_ABBREVIATION} from "../../utils/Constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxesPacking, faBoxOpen, faHome, faLayerGroup, faTableCellsLarge, faTriangleExclamation, faUsers} from "@fortawesome/free-solid-svg-icons";
import {LogOutButton} from "../../components/LogOutButton";
import {Footer} from "../Footer";

import {PrimeReactProvider} from 'primereact/api';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const AdminLayout = () => {
    const userId = 1; // TODO: Get userId from auth context
    const location = useLocation();
    const path = location.pathname;

    const [user, setUser] = useState({})

    useEffect(() => {
        const fectchUserData = async () => {
            const data = await UserService.getAdminProfile(userId);
            setUser(data);
        }
        fectchUserData();
    }, []);

    return (
        <PrimeReactProvider>
            <main className="d-flex flex-nowrap" style={{minHeight: '100vh'}}>
                <div className="d-none d-md-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "280px"}}>
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto mx-auto link-body-emphasis text-decoration-none">
                        <h1 className="text-primary fs-3 open-sans-700">{APP_NAME}</h1>
                    </Link>
                    <hr/>

                    <ul className="nav nav-pills flex-column gap-2">
                        <li className="nav-item">
                            <Link to="/admin" className={`nav-link ${path === '/admin' ? 'active' : ''}`} aria-current="page">
                                <FontAwesomeIcon icon={faHome}/> <span className="ms-3">Tableau de bord</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/products' className={`nav-link ${path === '/admin/products' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faBoxesPacking}/> <span className="ms-3">Produits</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/category' className={`nav-link ${path === '/admin/category' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faLayerGroup}/> <span className="ms-3">Categories</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/sub-category' className={`nav-link ${path === '/admin/sub-category' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faTableCellsLarge}/> <span className="ms-3">Sous-Categories</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/reclamations' className={`nav-link ${path === '/admin/reclamations' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faTriangleExclamation}/> <span className="ms-3">Reclamations</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/clients' className={`nav-link ${path === '/admin/clients' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faUsers}/> <span className="ms-3">Clients</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/orders' className={`nav-link ${path === '/admin/orders' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faBoxOpen}/> <span className="ms-3">Orders</span>
                            </Link>
                        </li>
                    </ul>

                    <hr className="mt-auto"/>

                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center link-body-emphasis text-decoration-none">
                            <img src={user.profilePic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>{user.username}</strong>
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
                            <Link to="/admin" className={`nav-link ${path === '/admin' ? 'active' : ''}`} aria-current="page">
                                <FontAwesomeIcon icon={faHome}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/products' className={`nav-link ${path === '/admin/products' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faBoxesPacking}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/category' className={`nav-link ${path === '/admin/category' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faLayerGroup}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/sub-category' className={`nav-link ${path === '/admin/sub-category' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faTableCellsLarge}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/reclamations' className={`nav-link ${path === '/admin/reclamations' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faTriangleExclamation}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/clients' className={`nav-link ${path === '/admin/clients' ? 'active' : ''}`}
                                  aria-current="page">
                                <FontAwesomeIcon icon={faUsers}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin/orders' className={`nav-link ${path === '/admin/orders' ? 'active' : ''}`}
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
        </PrimeReactProvider>
    );
}
