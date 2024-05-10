import React, {useEffect, useState} from "react";
import {FilterMatchMode} from "primereact/api";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand, faReply, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ClientService} from "../../services/admin/ClientService";
import {Avatar} from "primereact/avatar";
import {Image} from "primereact/image";

export const ClientPage = () => {
    const columns = {
        img: 'Image',
        id: 'ID',
        userName: 'User Name',
        email: 'Email',
        tel: 'Phone',
        adress: 'Address',
        isVerified: 'Is Verified',
    };

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [moreInfoDialogVisible, setMoreInfoDialogVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        const fetchAllClients = async () => {
            const response = await ClientService.getClients();
            const data = [...(response || [])];
            setClients(data);
        }
        fetchAllClients();
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
        setSelectedClient(rowData);
        setMoreInfoDialogVisible(true);
    };
    const handleDeleteDialog = (rowData) => {
        setSelectedClient(rowData);
        setDeleteDialogVisible(true);
    };
    const handleDelete = async (rowData) => {
        await ClientService.deleteClient(rowData.id);
        setDeleteDialogVisible(false);
    }

    function getDialogs(rowData) {
        return (
            <div>
                <Dialog header="More Info:" visible={moreInfoDialogVisible && selectedClient.id === rowData.id}
                        onHide={() => setMoreInfoDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <div className="d-flex flex-row align-items-center">
                        <Image src={rowData.img} alt={rowData.id} preview width='100%' className='w-50'/>
                        <div className="m-0 ms-3 d-flex flex-column">
                            {Object.keys(columns).slice(1).map((key) => {
                                return (key === 'isVerified')
                                    ? (<div key={`${rowData.id}-${key}`} className="d-flex">
                                        <strong className="me-2">{columns[key]}: </strong>
                                        <p>{rowData[key] ? 'Yes' : 'No'}</p>
                                    </div>)
                                    : (<div key={`${rowData.id}-${key}`} className="d-flex">
                                        <strong className="me-2">{columns[key]}: </strong>
                                        <p>{rowData[key]}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                </Dialog>
                <Dialog header="Delete:" visible={deleteDialogVisible && selectedClient.id === rowData.id}
                        onHide={() => setDeleteDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}
                        footer={() => (
                            <div>
                                <Button label="No" icon="pi pi-times" onClick={() => setDeleteDialogVisible(false)} className="p-button-text"/>
                                <Button label="Yes" icon="pi pi-check" onClick={() => handleDelete(rowData)} autoFocus className='bg-danger'/>
                            </div>
                        )}>
                    <p className="m-0">
                    Do you really want to delete this client?
                    </p>
                </Dialog>
            </div>
        );
    }

    return (
        <div className="pt-4 bg-light rounded-5">
            <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-center" style={{width: '100%'}}>
                <h1 className="display-6 fw-semibold lh-1">Liste des Clients</h1>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="mb-1 pt-2 text-bold text-white">Liste des Clients</h4>
                                                <div className="table-responsive small col flex-grow-1 rounded-5">
                                                    <DataTable value={clients} paginator rows={10} dataKey="id" filters={filters}
                                                               filterDisplay="row" loading={loading}
                                                               stripedRows
                                                               globalFilterFields={['id', 'userName', 'email', 'tel', 'adress', 'isVerified',]}
                                                               header={header} emptyMessage="No records found">
                                                        {Object.keys(columns).map((key) => {
                                                            if (!['tel', 'adress'].includes(key)) {
                                                                return (key === 'img')
                                                                    ? (<Column key={(rowData) => `${rowData.id}-img`}
                                                                               header={columns[key]}
                                                                               body={(rowData) => <Avatar image={rowData.img} size="large"
                                                                                                          shape="circle"/>}/>)
                                                                    : (<Column className='text-truncate'
                                                                               key={(rowData) => `${rowData.id}-key`}
                                                                               field={key}
                                                                               header={columns[key]}/>);
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