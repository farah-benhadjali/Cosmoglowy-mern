import {UserService} from "./UserService";

export class CartService {
    static getCart = async () => {
        const items = [
            {
                client: await UserService.getUserProfile(1),
                produitId: 'P-2',
                quantité: 4,
                Prix: 11.90,
                img: "/assets/images/products/fard-artdeco.jpg",
                totale: 11.90 * 4
            },
            {
                client: await UserService.getUserProfile(1),
                produitId: 'P-3',
                quantité: 2,
                Prix: 21.51,
                img: "../assets/images/products/mascara1.png",
                totale: 21.51 * 2
            },
        ];
        return {
            items: [...items],
            subTotal: items.reduce((acc, item) => acc + item.totale, 0)
        };
    }
}