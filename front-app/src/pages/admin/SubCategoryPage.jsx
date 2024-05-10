import React, {useEffect, useState} from "react";
import {FilterMatchMode} from "primereact/api";
import {CategoryService} from "../../services/admin/CategoryService";
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

export const SubCategoryPage = () => {
    const columns = {
        scname: 'sous-Categorie Nom',
        scDesc: 'Description',
    };

    const [subCategories, setSubCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [moreInfoDialogVisible, setMoreInfoDialogVisible] = useState(false);
    const [editDialogVisible, setEditDialogVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [addSubCateoryDialogVisible, setAddSubCateoryDialogVisible] = useState(false);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [newSubCategory, setNewSubCategory] = useState({scname: '', scDesc: ''});

    useEffect(() => {
        const fetchAllSubCategories = async () => {
            const response = await CategoryService.getSubCategories();
            const data = [...(response || [])];
            console.log(data)
            setSubCategories(data);
        }
        fetchAllSubCategories();
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
        setSelectedSubCategory(rowData);
        setMoreInfoDialogVisible(true);
    };
    const handleEditDialog = (rowData) => {
        setSelectedSubCategory(rowData);
        setEditDialogVisible(true);
    };
    const handleDeleteDialog = (rowData) => {
        setSelectedSubCategory(rowData);
        setDeleteDialogVisible(true);
    };
    const handleUpdateSubCategory = (event) => {
        // TODO: handle update product
    };
    const handleAddSubCategory = (event) => {
        // TODO: handle update product
    };

    const handleDelete = async (rowData) => {
        await CategoryService.deleteCategory(rowData.id);
        setDeleteDialogVisible(false);
    }

    const handleChangeSubCategory = (e) => {
        return undefined;
    };

    function getDialogs(rowData) {
        return (
            <div>
                <Dialog header="More Info:" visible={moreInfoDialogVisible && selectedSubCategory.scname === rowData.scname}
                        onHide={() => setMoreInfoDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <div className="m-0 d-flex flex-column">
                        {Object.keys(columns).map((key) => {
                            return (
                                <div key={`${rowData.scname}-${key}-sub-category`} className="d-flex">
                                    <strong className="me-2">{columns[key]}: </strong>
                                    <p>{rowData[key]}</p>
                                </div>
                            );
                        })}
                    </div>
                </Dialog>
                <Dialog header="Update:" visible={editDialogVisible && selectedSubCategory.Cname === rowData.Cname}
                        onHide={() => setEditDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <p className="m-0">
                        <form className='d-flex flex-column gap-2' onSubmit={(e) => handleUpdateSubCategory(e)}>
                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Cname">Category Name:</label>
                                <InputText id="Cname" value={rowData.Cname}/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="Desc">Description:</label>
                                <InputText id="Desc" value={rowData.Desc}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </p>
                </Dialog>
                <Dialog header="Delete:" visible={deleteDialogVisible && selectedSubCategory.Cname === rowData.Cname}
                        onHide={() => setDeleteDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                        footer={() => (
                            <div>
                                <Button label="No" icon="pi pi-times" onClick={() => setDeleteDialogVisible(false)} className="p-button-text"/>
                                <Button label="Yes" icon="pi pi-check" onClick={() => handleDelete(rowData)} autoFocus className='bg-danger'/>
                            </div>
                        )}>
                    <p className="m-0">
                        Do you really want to delete this sub-category?
                    </p>
                </Dialog>
            </div>
        );
    }

    return (
        <div className="pt-4 bg-light rounded-5">
            <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-center" style={{width: '100%'}}>
                <h1 className="display-6 fw-semibold lh-1">Liste des Sous-Catégories</h1>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="d-flex flex-column h-100">
                                                <div className="d-flex justify-content-between">
                                                    <h4 className="mb-1 pt-2 text-bold text-white">All Sub Categories</h4>
                                                    <Button label="Add Category" icon="pi pi-plus" onClick={() => setAddSubCateoryDialogVisible(true)}
                                                            className="p-button-success"/>
                                                </div>
                                                <div className="table-responsive small col flex-grow-1 rounded-5">
                                                    <DataTable value={subCategories} paginator rows={10} dataKey="Cname" filters={filters}
                                                               filterDisplay="row" loading={loading}
                                                               stripedRows
                                                               globalFilterFields={['Cname', 'Desc']}
                                                               header={header} emptyMessage="No sub-categories found.">
                                                        {Object.keys(columns).map((key) => {
                                                            return (
                                                                <Column className='text-truncate'
                                                                        key={(rowData) => `${rowData.Cname}-key-sub-category`}
                                                                        field={key}
                                                                        header={columns[key]}/>
                                                            );
                                                        })}
                                                        <Column key={(rowData) => `${rowData.Cname}-actions-sub-category`}
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
            <Dialog header="Add Category:" visible={addSubCateoryDialogVisible}
                    onHide={() => setAddSubCateoryDialogVisible(false)}
                    style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                <p className="m-0">
                    <form className='d-flex flex-column gap-2' onSubmit={(e) => handleAddSubCategory(e)}>
                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Cname">Category Name:</label>
                            <InputText id="Cname" value={newSubCategory.Cname}
                                       onChange={(e) => setNewSubCategory({...newSubCategory, Cname: e.target.value})}/>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <label htmlFor="Desc">Description:</label>
                            <InputText id="Desc" value={newSubCategory.Desc}
                                       onChange={(e) => setNewSubCategory({...newSubCategory, Desc: e.target.value})}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </p>
            </Dialog>
        </div>
    )
}