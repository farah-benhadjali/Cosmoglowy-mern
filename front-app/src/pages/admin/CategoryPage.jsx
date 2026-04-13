import React, {useEffect, useRef, useState} from "react";
import {FilterMatchMode} from "primereact/api";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand, faTrash} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {CategoryService} from "../../services/admin/CategoryService";
import {Chips} from "primereact/chips";
import { Axios  } from "axios";

export const CategoryPage = () => {
    const toast = useRef(null);
    const columns = {
        Cname: 'Categorie Nom',
        Desc: 'Description',
    };

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [moreInfoDialogVisible, setMoreInfoDialogVisible] = useState(false);
    const [editDialogVisible, setEditDialogVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [addCategoryDialogVisible, setAddCategoryDialogVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategory, setNewCategory] = useState({Cname: '', Desc: '', souscategory: []});

    useEffect(() => {
        const fetchAllCategories = async () => {
            const response = await CategoryService.getAllCategories();
            const data = [...(response || [])];
            setCategories(data);
        }
        fetchAllCategories();
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
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search"/>
                </IconField>
            </div>
        );
    };

    const header = renderHeader();

    const handleMoreInfosDialog = (rowData) => {
        setSelectedCategory(rowData);
        setMoreInfoDialogVisible(true);
    };
    const handleEditDialog = (rowData) => {
        setSelectedCategory(rowData);
        setEditDialogVisible(true);
    };
    const handleDeleteDialog = (rowData) => {
        setSelectedCategory(rowData);
        setDeleteDialogVisible(true);
    };
    const handleUpdateCategories = (event) => {
        // TODO: handle update product
    };
    const handleAddCategories = () => {
        // TODO: handle update product
    };

    const handleDelete = async (rowData) => {
        const updatedProducts = categories.filter(category => category.id !== rowData.id);
        setCategories(updatedProducts);
    }

    const handleChangeSubCategory = (e) => {
        return undefined;
    };
    const handleAddSubCategory = (e) => {
        setNewCategory({...e.target.value, souscategory: e.target.value.map(sc => ({scname: sc, scDesc: sc}))});
    };

    function getDialogs(rowData) {
        return (
            <div>
                <Dialog header="Plus d'informations" visible={moreInfoDialogVisible && selectedCategory.Cname === rowData.Cname}
                        onHide={() => setMoreInfoDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <div className="m-0 d-flex flex-column">
                        {Object.keys(columns).map((key) => {
                            return (
                                <div key={`${rowData.id}-${key}`} className="d-flex">
                                    <strong className="me-2">{columns[key]}: </strong>
                                    <p>{key === 'souscategory' ? rowData[key].map(sc => sc.scname).join(', ') : rowData[key]}</p>
                                </div>
                            );
                        })}
                    </div>
                </Dialog>
                <Dialog header="Modifier catégorie" visible={editDialogVisible && selectedCategory.Cname === rowData.Cname}
                        onHide={() => setEditDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <p className="m-0">
                        <form className='d-flex flex-column gap-2' onSubmit={(e) => handleUpdateCategories(e)}>
                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Cname">Categorie Nom</label>
                                <InputText id="Cname" value={rowData.Cname}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Desc">Description</label>
                                <InputText id="Desc" value={rowData.Desc}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="subCategory">Sous Categorie</label>
                                <Chips value={rowData.souscategory.map(sc => sc.scname)}
                                       onChange={(e) => handleChangeSubCategory(e)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Modifier</button>
                        </form>
                    </p>
                </Dialog>
                <Dialog header="Supprimer une catégorie" visible={deleteDialogVisible && selectedCategory.Cname === rowData.Cname}
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
                <h1 className="display-6 fw-semibold lh-1">Liste des Categories</h1>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="d-flex flex-column h-100">
                                                <div className="d-flex justify-content-between">
                                                    <h4 className="mb-1 pt-2 text-bold text-white">All Categories</h4>
                                                    <Button label="Ajouter Categorie" icon="pi pi-plus" onClick={() => setAddCategoryDialogVisible(true)}
                                                            className="p-button-success"/>
                                                </div>
                                                <div className="table-responsive small col flex-grow-1 rounded-5">
                                                    <DataTable value={categories} paginator rows={10} dataKey="id" filters={filters}
                                                               filterDisplay="row" loading={loading}
                                                               stripedRows
                                                               globalFilterFields={['Cname', 'Desc', 'souscategory']}
                                                               header={header} emptyMessage="No categories found.">
                                                        {Object.keys(columns).map((key) => {
                                                            return key === 'souscategory'
                                                                ? <Column className='text-truncate'
                                                                          key={(rowData) => `${rowData.scname}-key`}
                                                                          field={key}
                                                                          header={columns[key]}
                                                                          body={(rowData) => <p>{rowData.Cname}</p>}/>
                                                                : <Column className='text-truncate'
                                                                          key={(rowData) => `${rowData.Cname}-key`}
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
            <Dialog header="Ajouter une catégorie" visible={addCategoryDialogVisible}
                    onHide={() => setAddCategoryDialogVisible(false)}
                    style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                <p className="m-0">
                    <form className='d-flex flex-column gap-2' onSubmit={(e) => handleAddCategories(e)}>
                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Cname">Category Name:</label>
                            <InputText id="Cname" value={newCategory.Cname}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Desc">Description:</label>
                            <InputText id="Desc" value={newCategory.Desc}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="subCategory">Sub Category:</label>
                            <Chips value={newCategory.souscategory.map(sc => sc.Cname)}
                                   onChange={(e) => handleAddSubCategory(e)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </p>
            </Dialog>
        </div>
    )
}