import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {OrderService} from "../../services/OrderService";
import {ProductService} from "../../services/ProductService";

export const OrdersPage = () => {
    const {userId} = useParams();
    const [orders, setOrders] = useState([]);
    const columns = ['id', 'Nom', 'Description', 'produits'];

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await OrderService.getOrders(userId);
            setOrders(data);
        };
        fetchOrders();
    }, []);

    return (
        <div className="my-3 mx-4 d-flex flex-column" style={{minHeight: '75vh'}}>
            <h2 className="col">Total Orders: {orders.length}</h2>
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
                    {orders.map((order, index) => (
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
    );
}