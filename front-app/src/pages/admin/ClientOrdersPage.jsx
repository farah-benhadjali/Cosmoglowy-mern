import React, {useEffect, useState} from "react";
import {FilterMatchMode} from "primereact/api";
import {ClientService} from "../../services/admin/ClientService";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import {Dialog} from "primereact/dialog";
import {Image} from "primereact/image";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Avatar} from "primereact/avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand, faTrash} from "@fortawesome/free-solid-svg-icons";
import {OrderService} from "../../services/admin/OrderService";
import {classNames} from "primereact/utils";
import {DataView} from "primereact/dataview";

export const ClientOrdersPage = () => {
    const columns = {
        id: 'ID',
        Cname: 'Order Name',
        Desc: 'Description',
        product: 'Products',
    };

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const [moreInfoDialogVisible, setMoreInfoDialogVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fetchAllOrders = async () => {
            const response = await OrderService.getAllOrders();
            const data = [...(response || [])];
            setOrders(data);
        }
        fetchAllOrders();
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
        setSelectedOrder(rowData);
        setMoreInfoDialogVisible(true);
    };
    const handleDeleteDialog = (rowData) => {
        setSelectedOrder(rowData);
        setDeleteDialogVisible(true);
    };
    const handleDelete = async (rowData) => {
        await ClientService.deleteClient(rowData.id);
        setDeleteDialogVisible(false);
    }

    // const itemTemplate = (product, index) => {
    //     if (!product) {
    //         return;
    //     }
    //
    //     return (
    //         <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
    //             <div className="p-4 border-1 surface-border surface-card border-round">
    //                 <div className="flex flex-wrap align-items-center justify-content-between gap-2">
    //                     <div className="flex align-items-center gap-2">
    //                         <i className="pi pi-tag"></i>
    //                         <span className="font-semibold">{product.category}</span>
    //                     </div>
    //                 </div>
    //                 <div className="flex flex-column align-items-center gap-3 py-5">
    //                     <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
    //                          alt={product.name}/>
    //                     <div className="text-2xl font-bold">{product.name}</div>
    //                 </div>
    //                 <div className="flex align-items-center justify-content-between">
    //                     <span className="text-2xl font-semibold">Quantity: {product.qte}</span>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    // const listTemplate = (items) => {
    //     return <div className="grid grid-nogutter">{items.map((product, index) => itemTemplate(product, 'grid', index))}</div>;
    // };

    function getDialogs(rowData) {
        return (
            <div>
                <Dialog header="More Info:" visible={moreInfoDialogVisible && selectedOrder.id === rowData.id}
                        onHide={() => setMoreInfoDialogVisible(false)}
                        style={{width: '50vw'}} breakpoints={{'960px': '75vw', '641px': '100vw'}}>
                    <div className="d-flex flex-column">
                        {Object.keys(columns).map((key) => {
                            return (key === 'product')
                                ? (<div key={`${rowData.id}-${key}-info`} className="d-flex">
                                    <strong className="me-2">{columns[key]}: </strong>
                                    <div className="album flex-grow-1">
                                        <div className="container-fluid">
                                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0">
                                                {rowData[key].map((product) => (
                                                    <div className="card border-0 mt-1 me-1 bg-transparent" key={`${product.id}-more-infos`}>
                                                        <div className="row g-0">
                                                            <div className="col-md-4">
                                                                <img src={product.img} className="img-fluid rounded-start" alt="..."/>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="card-body">
                                                                    <p className='m-0'>{product.name}</p>
                                                                    <p className='m-0'>Quantity: {product.qte}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                : (<div key={`${rowData.id}-${key}-info`} className="d-flex">
                                    <strong className="me-2">{columns[key]}: </strong>
                                    <p>{rowData[key]}</p>
                                </div>)
                        })}
                    </div>
                </Dialog>
                <Dialog header="Delete:" visible={deleteDialogVisible && selectedOrder.id === rowData.id}
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
                <h1 className="display-6 fw-semibold lh-1">Orders</h1>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                        <div className="container-fluid py-4">
                            <div className="row mt-4">
                                <div className="card">
                                    <div className="card-body p-3">
                                        <div className="row">
                                            <div className="d-flex flex-column h-100">
                                                <h4 className="mb-1 pt-2 text-bold">All Orders</h4>
                                                <div className="table-responsive small col flex-grow-1 rounded-5">
                                                    <DataTable value={orders} paginator rows={10} dataKey="id" filters={filters}
                                                               filterDisplay="row" loading={loading}
                                                               stripedRows
                                                               globalFilterFields={['id', 'Cname', 'Desc', 'product']}
                                                               header={header} emptyMessage="No records found">
                                                        {Object.keys(columns).map((key) =>
                                                            (key === 'img')
                                                                ? (<Column key={(rowData) => `${rowData.id}-img`}
                                                                           header={columns[key]}
                                                                           body={(rowData) => <Avatar image={rowData.img} size="large"
                                                                                                      shape="circle"/>}/>)
                                                                : (key === 'product')
                                                                    ? (<Column key={(rowData) => `${rowData.id}-products`}
                                                                               header={columns[key]}
                                                                               body={(rowData) => {
                                                                                   return (
                                                                                       <div className='d-flex flex-column text-truncate'>
                                                                                           {rowData[key].map((product) => (
                                                                                               <div key={`${rowData.id}-product-${product.id}`}
                                                                                                    className='d-flex gap-3 my-1 align-items-center'>
                                                                                                   <Avatar image={product.img}
                                                                                                           size="large"
                                                                                                           shape="circle"/>
                                                                                                   <div className='d-flex flex-column'>
                                                                                                       <p className='m-0'>{product.name}</p>
                                                                                                       <p className='m-0'>Quantity: {product.qte}</p>
                                                                                                   </div>
                                                                                               </div>
                                                                                           ))}
                                                                                       </div>
                                                                                   )
                                                                               }}/>)
                                                                    : (<Column key={(rowData) => `${rowData.id}-${key}`}
                                                                               field={key}
                                                                               header={columns[key]}/>))}
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