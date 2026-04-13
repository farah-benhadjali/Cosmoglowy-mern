import React, {useState, useEffect, useRef} from 'react';
import {FilterMatchMode} from 'primereact/api';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {IconField} from 'primereact/iconfield';
import {InputIcon} from 'primereact/inputicon';

import {ProductsService} from "../../services/admin/ProductsService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {faExpand, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Dialog} from "primereact/dialog";
import {InputNumber} from "primereact/inputnumber";
import {FileUpload} from "primereact/fileupload";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";


export const ProductsPage = () => {
    const toast = useRef(null);
    const columns = {
        id: 'Id',
        reference: 'Reference',
        img: 'Image',
        Pname: 'Nom',
        // Desc: 'Description',
        category: 'Categorie',
        souscategory: 'Sous Categorie',
        Price: 'Prix',
        qte: 'Quantité',
    };
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [moreInfoDialogVisible, setMoreInfoDialogVisible] = useState(false);
    const [editDialogVisible, setEditDialogVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [addProductDialogVisible, setAddProductDialogVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        id: '',
        reference: '',
        Pname: '',
        Desc: '',
        category: '',
        souscategory: '',
        Price: '',
        qte: '',
        img: '',
    });

    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await ProductsService.getProducts();
            const data = [...(response || [])];
            setProducts(data);
        }
        fetchAllProducts();
        setLoading(false);
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = {...filters};

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="d-flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"/>
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Chercher"/>
                </IconField>
            </div>
        );
    };

    const header = renderHeader();

    const handleMoreInfosDialog = (rowData) => {
        setSelectedProduct(rowData);
        setMoreInfoDialogVisible(true);
    };
    const handleEditDialog = (rowData) => {
        setSelectedProduct(rowData);
        setEditDialogVisible(true);
    };
    const handleDeleteDialog = (rowData) => {
        setSelectedProduct(rowData);
        setDeleteDialogVisible(true);
    };
    const handleAddProductDialog = () => {
        setAddProductDialogVisible(true);
    };
    const handleUpdateProduct = (event) => {
        // TODO: handle update product
    };

    const handleAdd = async (rowData) => {
        await ProductsService.addProduct(rowData);
        setAddProductDialogVisible(false);
    }
    const handleDelete = async (rowData) => {
        const updatedProducts = products.filter(product => product.id !== rowData.id);
        setProducts(updatedProducts);
      };
    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    };

    function getDialogs(rowData) {

        return (
            <div>
                <Dialog header="Plus d'informations " visible={moreInfoDialogVisible && selectedProduct.id === rowData.id}
                        onHide={() => setMoreInfoDialogVisible(false)}
                        style={{width: '70vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <div className="m-0 d-flex">
                        <div className='d-flex justify-content-center w-50 mx-2'>
                            <img src={rowData.img} alt={rowData.Pname} className='rounded-5'/>
                        </div>
                        <div>
                            {Object.keys(columns).map((key) => {
                                return (
                                    <div key={`${rowData.id}-${key}`} className="d-flex justify-content-between">
                                        <strong className="m-0">{columns[key]}: </strong>
                                        <p>{rowData[key]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Dialog>
                <Dialog header="Modifier un produit" visible={editDialogVisible && selectedProduct.id === rowData.id}
                        onHide={() => setEditDialogVisible(false)}
                        style={{width: '60vw'}} breakpoints={{'1000px': '80vw', '641px': '120vw'}}>
                    <p className="m-0">
                        <form className='d-flex flex-column gap-2' onSubmit={(e) => handleUpdateProduct(e)}>
                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Pname">Nom</label>
                                <InputText id="Pname" value={rowData.Pname}/>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Desc">Desc</label>
                                <InputText id="Desc" value={rowData.Desc}/>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Price">Prix</label>
                                <InputNumber id="Price" value={rowData.Price}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="category">Categorie</label>
                                <InputText id="category" value={rowData.category}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="souscategory">Sous Categorie</label>
                                <InputText id="souscategory" value={rowData.souscategory}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="qte">Quantité</label>
                                <InputNumber value={rowData.qte}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="img">Image</label>
                                <Toast ref={toast}></Toast>
                                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Modifier</button>
                        </form>
                    </p>
                </Dialog>
                <Dialog header="Supprimer un produit " visible={deleteDialogVisible && selectedProduct.id === rowData.id}
                        onHide={() => setDeleteDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                        footer={() => (
                            <div>
                                <Button label="Non" icon="pi pi-times" onClick={() => setDeleteDialogVisible(false)} className="p-button-text"/>
                                <Button label="Oui" icon="pi pi-check" onClick={() => handleDelete(rowData)} autoFocus className='bg-danger'/>
                            </div>
                        )}>
                    <p className="m-0">
                    Voulez-vous vraiment supprimer ce produit?
                    </p>
                </Dialog>
            </div>
        );
    }

    return (
        <div className="pt-4 bg-light rounded-5">
            <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-center" style={{width: '100%'}}>
                <h1 className="display-6 fw-semibold lh-1">Liste Des Produits </h1>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="d-flex flex-column h-100">
                                                <div className="d-flex justify-content-between">
                                                    <h4 className="mb-1 pt-2 text-bold text-white">All Products</h4>
                                                    <Button label="Ajouter Produit" icon="pi pi-plus" onClick={() => handleAddProductDialog()}
                                                            className="p-button-success"/>
                                                </div><br></br>
                                                <div className="table-responsive small col flex-grow-1 rounded-5">
                                                    <DataTable value={products} paginator rows={10} dataKey="id" filters={filters}
                                                               filterDisplay="row" loading={loading}
                                                               stripedRows
                                                               globalFilterFields={['id', 'reference', 'Pname', 'Desc', 'category', 'souscategory']}
                                                               header={header} emptyMessage="No product found.">
                                                        {Object.keys(columns).map((key) => {
                                                            return key === 'img' ?
                                                                <Column key={(rowData) => `${rowData.id}-${key}`} field={key} header={columns[key]}
                                                                        body={(rowData) => <img src={rowData[key]}
                                                                                                alt={rowData['Pname']}
                                                                                                className="w-75"/>}/>
                                                                : <Column className='text-truncate'
                                                                          key={(rowData) => `${rowData.id}-key`}
                                                                          field={key}
                                                                          header={columns[key]}/>;
                                                        })}
                                                        <Column key={(rowData) => `${rowData.id}-actions`}
                                                                header='Actions'
                                                                body={(rowData) => {
                                                                    return (
                                                                        <div className='d-flex gap-3'>
                                                                            <FontAwesomeIcon icon={faExpand}
                                                                                             className='fs-5 text-success'
                                                                                             style={{cursor: 'pointer'}}
                                                                                             onClick={() => handleMoreInfosDialog(rowData)}/>
                                                                            <FontAwesomeIcon icon={faEdit}
                                                                                             className='fs-5 text-primary'
                                                                                             style={{cursor: 'pointer'}}
                                                                                             onClick={() => handleEditDialog(rowData)}/>
                                                                            <FontAwesomeIcon icon={faTrash}
                                                                                             className='fs-5 text-danger'
                                                                                             style={{cursor: 'pointer'}}
                                                                                             onClick={() => handleDeleteDialog(rowData)}/>
                                                                            {getDialogs(rowData)}
                                                                        </div>
                                                                    )
                                                                }}/>
                                                    </DataTable>
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
            <Dialog header="Ajouter un produit" visible={addProductDialogVisible}
                    onHide={() => setAddProductDialogVisible(false)}
                    style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                <p className="m-0">
                    <form className='d-flex flex-column gap-2' onSubmit={(e) => handleAdd(e)}>
                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Pname">Nom :</label>
                            <InputText id="Pname" value={newProduct.Pname}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="reference">Reference:</label>
                            <InputText id="reference" value={newProduct.reference}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Desc">Description:</label>
                            <InputText id="Desc" value={newProduct.Desc}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Price">Prix:</label>
                            <InputNumber id="Price" value={newProduct.Price}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="category">Categorie :</label>
                            <InputText id="category" value={newProduct.category}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="souscategory">Sous-Categorie:</label>
                            <InputText id="souscategory" value={newProduct.souscategory}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="qte">Quantité:</label>
                            <InputNumber value={newProduct.qte}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="img">Image :</label>
                            <Toast ref={toast}></Toast>
                            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                </p>
            </Dialog>
        </div>
    )
}

