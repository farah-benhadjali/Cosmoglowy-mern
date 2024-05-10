import {ProductService as service} from '../ProductService';

export class ProductsService {
    static getProducts = async () => {
        const products = await service.getProducts();
        products.forEach((product, index) => {
            product.id = `P-${index}`;
        });
        return products;
    }

    static deleteProduct = async (id) => {
        // TODO: Implement deleteProduct
        return true;
    }

    static  addProduct = async (rowData) =>{
        // TODO: Implement addProduct
        return true;
    }
}