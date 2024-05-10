import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

export const ProductItem = ({product, itemKey}) => {
    return (
        <Link to={`/product/${product.id}`} className="link-body-emphasis link-underline-opacity-0">
            <div className="col" key={itemKey}>
                <div className="card" style={{width: '18rem'}}>
                    <img src={product.img} className="card-img-top" alt={product.Pname}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.Pname}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <strong>{product.Price.toFixed(2)} TND</strong>
                            <div onClick={() => alert('Added To Cart!')}
                               className="primary fs-4 py-2 px-3 ms-2">
                                <FontAwesomeIcon icon={faCartShopping}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}