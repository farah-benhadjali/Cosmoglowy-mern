import {useEffect, useState} from "react";
import {OrderService} from "../../services/admin/OrderService";

export const DashboardPage = () => {
    const columns = ['id', 'Nom', 'Description', 'produits'];
    const [last5Orders, setLast5Orders] = useState([]);

    useEffect(() => {
        const fetchLast5Orders = async () => {
            const data = await OrderService.getLast5Orders();
            setLast5Orders(data);
        }
        fetchLast5Orders();
    }, []);

    return (
        <div className="row g-5 mt-4 mx-4 bg-light rounded-5">
            <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-center" style={{width: '100%'}}>
                <h1 className="display-6 fw-semibold lh-1">Tableau de bord</h1>

                <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row">
                                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">L'argent d'aujourd'hui</p>
                                                        <h5 className="font-weight-bolder mb-0">
                                                            53,000 TND
                                                            <sup className="text-success text-sm font-weight-bolder">+55%</sup>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                                        <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Les utilisateurs d'aujourd'hui</p>
                                                        <h5 className="font-weight-bolder mb-0">
                                                            2,300
                                                            <sup className="text-success text-sm font-weight-bolder">+3%</sup>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                                        <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Nouveaux clients</p>
                                                        <h5 className="font-weight-bolder mb-0">
                                                            +3,462
                                                            <sup className="text-danger text-sm font-weight-bolder">-2%</sup>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                                        <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="numbers">
                                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">les ventes</p>
                                                        <h5 className="font-weight-bolder mb-0">
                                                            103,430 TND
                                                            <sup className="text-success text-sm font-weight-bolder">+5%</sup>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="col-4 text-end">
                                                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                                        <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                                <div className="d-flex flex-column h-100">
                                                    <h4 className="mb-1 pt-2 text-bold">5 dernières commandes</h4>
                                                    <p className="text-sm">Commandes passées par les clients</p>
                                                    <div className="table-responsive small col flex-grow-1">
                                                        <table className="table table-striped table-sm">
                                                            <thead>
                                                            <tr>
                                                                {columns.map((column, index) => (
                                                                    <th key={index} scope="col">{column}</th>
                                                                ))}
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {last5Orders.map((order, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{order.Cname}</td>
                                                                    <td>{order.Desc}</td>
                                                                    <td>
                                                                        {order.product.map((product, index) => (
                                                                            <img key={index} src={product.img} alt={product.name} width="50"/>
                                                                        ))}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}