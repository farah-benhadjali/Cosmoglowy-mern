import {useEffect, useState} from "react";
import {CartService} from "../services/CartService";
import {Link} from "react-router-dom";

export const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const columns = ['produitId', 'Prix', 'quantité', 'totale', 'img'];

    useEffect(() => {
        const fetchCart = async () => {
            const data = await CartService.getCart();
            setCart(data);
            setIsLoading(false);
        }
        fetchCart();
    }, []);


    return (
        <div className="container mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb bg-transparent m-0 p-5">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0">Accueil</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Panier</li>
                        </ol>
                    </div>
                </div>
            </div><br/>
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Votre panier</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Totale (TND)</span>
                            <strong>{!isLoading && cart.subTotal}</strong>
                        </li><br/>
                        <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Vider Panier</button><br/>
                            
                        </div><br/>
                        <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Passer au paiement</button>
                            
                        </div>
                        
                    </ul>
                </div>
                
                {!isLoading &&
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Panier des produits</h4>
                        {cart.items.length === 0
                            ? <p className="text-center">Aucun produit dans le panier</p>
                            : <table className="table">
                                <thead>
                                <tr>
                                    {columns.map((key, index) => (
                                        <th key={index} scope="col">{key}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {cart.items.map((product, index) => (
                                    <tr key={index}>
                                        {columns.map((value, index) => (
                                            (index === columns.indexOf("img"))
                                                ? <td key={index}><img src={product[value]} alt={product.Pname} width="100" height="100"/></td>
                                                :
                                                <td key={index}>{(typeof product[value] === "string" && product[value].length > 50) ? product[value].substring(0, 50) + '...' : product[value]}</td>
                                        ))}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
