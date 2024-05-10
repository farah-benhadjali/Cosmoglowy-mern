import {useEffect, useState} from "react";
import {ProductService} from "../services/ProductService";
import {ProductItem} from "../components/ProductItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const StorePage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPageNumber, setTotalPageNumber] = useState(0);
    const pageSize = 12;

    useEffect(() => {
        const fetchData = async () => {
            const data = await ProductService.getProducts();
            setTotalPageNumber(Math.ceil(data.length / pageSize));
            setProducts(data);
            setFilteredProducts(data.slice(pageNumber, pageNumber + pageSize));
        }
        fetchData();
    }, [pageNumber]);

    const handleIncrementPageNumber = () => {
        setPageNumber(pageNumber + 1);
    };
    const handleDecrementPageNumber = () => {
        setPageNumber(pageNumber - 1)
    };
    const handleSearch = (event) => {
        const search = event.target.value;
        const filteredProducts = products.filter(product => product.Pname.toLowerCase().includes(search.toLowerCase()));
        setFilteredProducts(filteredProducts);
    };
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
            <div className="container-fluid bg-light py-2">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title pb-2 text-dark text-capitalize">Liste des produits</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <ol className="breadcrumb bg-transparent m-0 p-2 align-items-center justify-content-center">
                            <li className="breadcrumb-item">
                                <Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0">Accueil</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Produits</li>
                        </ol>
                    </div>
                </div>
            </div><br/>
                <div className="d-flex justify-content-end mb-3">
                    <div className="input-group w-25 rounded-5" style={{boxShadow: "0 0 0 0.25rem rgba(189, 195, 199, 0.6"}}>
                        <span className="input-group-text rounded-start-5" id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch}/>
                        </span>
                        <input type="text"
                               className="form-control rounded-end-5"
                               placeholder="Search"
                               aria-label="Search"
                               aria-describedby="basic-addon1"
                               onChange={handleSearch}/>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-5">
                    {
                        (filteredProducts.length === 0)
                            ? (
                                <div className="d-flex justify-content-center align-items-center w-100" style={{height: '40vh'}}>
                                    <div className="z-1 text-center">
                                        <div className="text-900 font-bold text-8xl mb-4 display-1 fw-semibold">Oops!</div>
                                        <p className="line-height-3 mt-0 mb-5 text-700 text-xl font-medium">There is nothing here</p>
                                    </div>
                                </div>
                            )
                            : filteredProducts.map((product, index) => (
                                <ProductItem product={product} itemKey={product.id} key={`product-${index}`}/>
                            ))
                    }
                </div>
                {/* Pagination */}
                <nav className="pt-4" aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <button onClick={() => handleDecrementPageNumber()} className="page-link">Précédent</button>
                        </li>
                        {
                            Array.from({length: totalPageNumber}, (_, index) => (
                                <li className="page-item" key={`btn-page-${index}`}>
                                    <button onClick={() => handleIncrementPageNumber()} className="page-link">{index +1}</button>
                                </li>
                            ))
                        }
                        <li className="page-item">
                            <button onClick={() => handleIncrementPageNumber()} className="page-link">Suivant</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}