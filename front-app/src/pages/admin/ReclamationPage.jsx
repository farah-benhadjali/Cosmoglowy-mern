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
import {faExpand, faReply, faTrash} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {ReclamationService} from "../../services/admin/ReclamationService";
import {InputTextarea} from "primereact/inputtextarea";

export const ReclamationPage = () => {
    const columns = {
        id: 'ID',
        nom: 'Nom',
        pren: 'Prénom',
        email: 'Email',
        tel: 'Téléphone',
        address: 'Adresse',
        sujet: 'Sujet',
        msg: 'Message'
    };

    const [reclamation, setReclamation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [moreInfoDialogVisible, setMoreInfoDialogVisible] = useState(false);
    const [replayDialogVisible, setReplayDialogVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [replay, setReplay] = useState('');
    const [selectedReclamation, setSelectedReclamation] = useState(null);

    useEffect(() => {
        const fetchAllReclamation = async () => {
            const response = await ReclamationService.getReclamations();
            const data = [...(response || [])];
            setReclamation(data);
        }
        fetchAllReclamation();
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
        setSelectedReclamation(rowData);
        setMoreInfoDialogVisible(true);
    };
    const handleReplayDialog = (rowData) => {
        setSelectedReclamation(rowData);
        setReplayDialogVisible(true);
    };
    const handleDeleteDialog = (rowData) => {
        setSelectedReclamation(rowData);
        setDeleteDialogVisible(true);
    };
    const handleReplayToReclamation = (event) => {
        // TODO: handle update product
    };
    const handleDelete = async (rowData) => {
        await ReclamationService.deleteReclamation(rowData.id);
        setDeleteDialogVisible(false);
    }

    function getDialogs(rowData) {
        return (
            <div>
                <Dialog header="More Info:" visible={moreInfoDialogVisible && selectedReclamation.id === rowData.id}
                        onHide={() => setMoreInfoDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <div className="m-0 d-flex flex-column">
                        {Object.keys(columns).map((key) => {
                            return (
                                <div key={`${rowData.id}-${key}`} className="d-flex">
                                    <strong className="me-2">{columns[key]}: </strong>
                                    <p>{rowData[key]}</p>
                                </div>
                            );
                        })}
                    </div>
                </Dialog>
                <Dialog header="Update:" visible={replayDialogVisible && selectedReclamation.id === rowData.id}
                        onHide={() => setReplayDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <p className="m-0">
                        <form className='d-flex flex-column gap-2' onSubmit={(e) => handleReplayToReclamation(e)}>
                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="CEmail">Email:</label>
                                <InputText id="CEmail" value={rowData.email} disabled/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="subject">Subject:</label>
                                <InputText id="subject" value={rowData.sujet} disabled/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="message">Message:</label>
                                <InputTextarea id="message" value={rowData.msg} disabled/>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <label htmlFor="replay">Replay:</label>
                                <InputTextarea id="replay" value={replay} onChange={(e) => setReplay(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </p>
                </Dialog>
                <Dialog header="Delete:" visible={deleteDialogVisible && selectedReclamation.id === rowData.id}
                        onHide={() => setDeleteDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                        footer={() => (
                            <div>
                                <Button label="No" icon="pi pi-times" onClick={() => setDeleteDialogVisible(false)} className="p-button-text"/>
                                <Button label="Yes" icon="pi pi-check" onClick={() => handleDelete(rowData)} autoFocus className='bg-danger'/>
                            </div>
                        )}>
                    <p className="m-0">
                        Do you really want to delete this reclamation?
                    </p>
                </Dialog>
            </div>
        );
    }

    return (
        <div className="pt-4 bg-light rounded-5">
            <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-center" style={{width: '100%'}}>
                <h1 className="display-6 fw-semibold lh-1">Liste Des Réclamations</h1>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="mb-1 pt-2 text-bold text-white">All Reclamations</h4>
                                                <div className="table-responsive small col flex-grow-1 rounded-5">
                                                    <DataTable value={reclamation} paginator rows={10} dataKey="id" filters={filters}
                                                               filterDisplay="row" loading={loading}
                                                               stripedRows
                                                               globalFilterFields={['id', 'nom', 'pren', 'email', 'tel', 'address', 'sujet', 'msg',]}
                                                               header={header} emptyMessage="No records found">
                                                        {Object.keys(columns).map((key) => {
                                                            if (!['tel', 'address','msg'].includes(key)) {
                                                                return (
                                                                    <Column className='text-truncate'
                                                                            key={(rowData) => `${rowData.id}-key`}
                                                                            field={key}
                                                                            header={columns[key]}/>
                                                                );
                                                            }
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
                                                                            <FontAwesomeIcon icon={faReply}
                                                                                             className='fs-5 text-primary'
                                                                                             style={{cursor: 'pointer'}}
                                                                                             onClick={() => handleReplayDialog(rowData)}/>
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
        </div>
    )
}