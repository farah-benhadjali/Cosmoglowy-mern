import {ProductService} from "./ProductService";

export class OrderService {
    static async getOrders(userId) {
        return [
            {
                category: [],
                souscategory: [],
                product: [...(await ProductService.get4Products())],
                Cname: "Order n° 1",
                Desc: "1ere order makeup.",
            },
            {
                category: [],
                souscategory: [],
                product: [...(await ProductService.get4Products())],
                Cname: "Order n° 2",
                Desc: "2eme order makeup.",
            },
        ];
    }
}