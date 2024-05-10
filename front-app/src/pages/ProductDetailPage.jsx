import React, {useEffect, useState} from "react";
import {ProductItem} from "../components/ProductItem";
import {ProductService} from "../services/ProductService";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const ProductDetailPage = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [similarProducts, setSimilarProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetail = async () => {
            const data = await ProductService.getProductById(id);
            setProductDetail(data);
        }
        const fetchSimilarProducts = async () => {
            const data = await ProductService.get4Products();
            setSimilarProducts(data);
        }
        fetchProductDetail();
        fetchSimilarProducts();
    }, [id]);

    const handleIncrementQuantity = () => {
        if (quantity < productDetail.qte) setQuantity(quantity + 1);
    }

    const handleDecrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const handleAddToCart = () => {

    };
    const handleBuyNow = () => {

    };
    return (
        <>
            <section className="py-5">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb bg-transparent m-0 p-3">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0">Accueil</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Produits Dédaillés</li>
                        </ol>
                    </div>
                </div>
            </div>
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <div data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image"
                                     style={{height: '80vh', display: "flex", justifyContent: 'center'}}>
                                    <img style={{maxWidth: '80%', maxHeight: '80vh', margin: 'auto'}} className="rounded-4 fit"
                                         src='../assets/images/products/ROUGE-AR.png' alt='ml'/>
                                </div>
                            </div>
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">FOR EVER MATTE</h4>

                                <div className="mb-3">
                                    <span className="h5">90 <sup>TND</sup></span>
                                    <span className="text-muted">/per piece</span>
                                </div>

                                <p>Make up forever ROUGE ARTIST FOR EVER MATTE.<br/>une finition lisse et mate pendant 24h, sans aucun transfert !</p>

                                <div className="row">
                                    <dt className="col-3">Categories</dt>
                                    <dd className="col-9">Lévres</dd>

                                    <dt className="col-3">Sous-Categories</dt>
                                    <dd className="col-9">Rouge à lévres</dd>

                                    <dt className="col-3">Reference </dt>
                                    <dd className="col-9">LPM6-1</dd>

                                    <dt className="col-3">Quantité  </dt>
                                    {9 > 0
                                        ? <dd className="col-9">10 <span className="text-success">In Stock</span></dd>
                                        : <dd className="col-9 text-danger">Out of stock</dd>
                                    }
                                </div>

                                <hr/>

                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                    <div className="col-md-3 col-5 mb-3">
                                        <label className="mb-2 d-block text-center">Quantité</label>
                                        <div className="input-group mb-3" style={{width: '150px'}}>
                                            <button className="btn btn-white border border-secondary rounded-start-circle" type="button"
                                                    id="button-addon1"
                                                    data-mdb-ripple-color="dark"
                                                    onClick={() => handleIncrementQuantity()}>
                                                <FontAwesomeIcon icon={faPlus} className="text-white"/>
                                            </button>
                                            <input type="text" className="form-control text-center border border-secondary "
                                                   value={quantity}
                                                   aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                            <button className="btn btn-white border border-secondary rounded-end-circle" type="button"
                                                    id="button-addon2"
                                                    data-mdb-ripple-color="dark"
                                                    onClick={() => handleDecrementQuantity()}>
                                                <FontAwesomeIcon icon={faMinus} className="text-white"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btn-group col-md-5 col-6 mb-3" role="group" aria-label="Basic example">
                                        <button type="button" className="rounded-2 px-3 py-2 bg-success-subtle" onClick={() => handleBuyNow()}>
                                            Acheter
                                        </button>
                                        <button type="button" className="rounded-2 px-3 py-2 bg-primary-subtle" onClick={() => handleAddToCart()}>
                                            Ajouter aux panier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
            </section>
            <section className="bg-light border-top py-4">
                <div className="container">
                    <div className="row gx-4">
                        <div className="align-items-center">
                            <div className="col-12">
                                <div className="text-center">
                                    <h2 className="display-4 fw-medium pb-3 mb-3">Produits similaires</h2>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                                {similarProducts.map((product, index) => (
                                    <ProductItem product={product} itemKey={`${product.id}-${index}-4`}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
