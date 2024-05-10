import {ProductService} from "../ProductService";

export class OrderService {
    static getLast5Orders = async () => {
        return [
            {
                category: [],
                souscategory: [],
                product: [...((await ProductService.get4Products()).slice(0, 2))],
                Cname: "Order n° 1",
                Desc: "1ere order makeup.",
            },
            {
                category: [],
                souscategory: [],
                product: [...((await ProductService.get4Products()).slice(0, 3))],
                Cname: "Order n° 2",
                Desc: "2eme order makeup.",
            },
        ];
    }

    static getAllOrders = async () => {
        return [
            {
                id: "614b71a44b19d8c5c856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product1',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product1",
                        Price: 10,
                        Desc: "Product Desc1",
                        reference: "Ref1",
                        img: "/assets/images/products/1.png",
                        qte: 100
                    },
                    {
                        id: 'Product2',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product2",
                        Price: 20,
                        Desc: "Product Desc2",
                        reference: "Ref2",
                        img: "/assets/images/products/3.png",
                        qte: 200
                    },
                    {
                        id: 'Product8',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product2",
                        Price: 20,
                        Desc: "Product Desc2",
                        reference: "Ref2",
                        img: "/assets/images/products/4.png",
                        qte: 200
                    }
                ],
                Cname: "Order n° 1",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: '614b71b14b19d8c5c856d45c',
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product3',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product3",
                        Price: 15,
                        Desc: "Product Desc3",
                        reference: "Ref3",
                        img: "/assets/images/products/2.png",
                        qte: 150
                    },
                    {
                        id: 'Product4',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product4",
                        Price: 25,
                        Desc: "Product Desc4",
                        reference: "Ref4",
                        img: "/assets/images/products/4.png",
                        qte: 250
                    }
                ],
                Cname: "Order n° 2",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b71a44b19d8c5c996d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product5',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product5",
                        Price: 12,
                        Desc: "Product Desc5",
                        reference: "Ref5",
                        img: "/assets/images/products/5.png",
                        qte: 120
                    },
                    {
                        id: 'Product6',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product6",
                        Price: 22,
                        Desc: "Product Desc6",
                        reference: "Ref6",
                        img: "/assets/images/products/1.png",
                        qte: 220
                    }
                ],
                Cname: "Order n° 3",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b71a44b1mlkjc5c856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product7',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product1",
                        Price: 10,
                        Desc: "Product Desc1",
                        reference: "Ref1",
                        img: "/assets/images/products/1.png",
                        qte: 100
                    },
                    {
                        id: 'Product8',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product2",
                        Price: 20,
                        Desc: "Product Desc2",
                        reference: "Ref2",
                        img: "/assets/images/products/3.png",
                        qte: 200
                    }
                ],
                Cname: "Order n° 4",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: '614b71b14b1qsd8c5c856d45c',
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product9',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product3",
                        Price: 15,
                        Desc: "Product Desc3",
                        reference: "Ref3",
                        img: "/assets/images/products/2.png",
                        qte: 150
                    },
                    {
                        id: 'Product10',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product4",
                        Price: 25,
                        Desc: "Product Desc4",
                        reference: "Ref4",
                        img: "/assets/images/products/4.png",
                        qte: 250
                    }
                ],
                Cname: "Order n° 5",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b7qxc4b19d8c5c856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product11',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product5",
                        Price: 12,
                        Desc: "Product Desc5",
                        reference: "Ref5",
                        img: "/assets/images/products/5.png",
                        qte: 120
                    },
                    {
                        id: 'Product12',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product6",
                        Price: 22,
                        Desc: "Product Desc6",
                        reference: "Ref6",
                        img: "/assets/images/products/1.png",
                        qte: 220
                    }
                ],
                Cname: "Order n° 6",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b71a44blgk8c5c856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product13',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product1",
                        Price: 10,
                        Desc: "Product Desc1",
                        reference: "Ref1",
                        img: "/assets/images/products/1.png",
                        qte: 100
                    },
                    {
                        id: 'Product14',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product2",
                        Price: 20,
                        Desc: "Product Desc2",
                        reference: "Ref2",
                        img: "/assets/images/products/3.png",
                        qte: 200
                    }
                ],
                Cname: "Order n° 7",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: '614b71b1423hd8c5c856d45c',
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product15',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product3",
                        Price: 15,
                        Desc: "Product Desc3",
                        reference: "Ref3",
                        img: "/assets/images/products/2.png",
                        qte: 150
                    },
                    {
                        id: 'Product16',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product4",
                        Price: 25,
                        Desc: "Product Desc4",
                        reference: "Ref4",
                        img: "/assets/images/products/4.png",
                        qte: 250
                    }
                ],
                Cname: "Order n° 8",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b71a44b19d9e9e856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product17',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product5",
                        Price: 12,
                        Desc: "Product Desc5",
                        reference: "Ref5",
                        img: "/assets/images/products/5.png",
                        qte: 120
                    },
                    {
                        id: 'Product18',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product6",
                        Price: 22,
                        Desc: "Product Desc6",
                        reference: "Ref6",
                        img: "/assets/images/products/1.png",
                        qte: 220
                    }
                ],
                Cname: "Order n° 9",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b72224b19d8c5c856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product19',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product1",
                        Price: 10,
                        Desc: "Product Desc1",
                        reference: "Ref1",
                        img: "/assets/images/products/1.png",
                        qte: 100
                    },
                    {
                        id: 'Product20',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product2",
                        Price: 20,
                        Desc: "Product Desc2",
                        reference: "Ref2",
                        img: "/assets/images/products/3.png",
                        qte: 200
                    }
                ],
                Cname: "Order n° 10",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: '614b71b14b9i9ic5c856d45c',
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product21',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product3",
                        Price: 15,
                        Desc: "Product Desc3",
                        reference: "Ref3",
                        img: "/assets/images/products/2.png",
                        qte: 150
                    },
                    {
                        id: 'Product22',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product4",
                        Price: 25,
                        Desc: "Product Desc4",
                        reference: "Ref4",
                        img: "/assets/images/products/4.png",
                        qte: 250
                    }
                ],
                Cname: "Order n° 11",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            },
            {
                id: "614b71a44b19dsd5c856d452",
                category: [],
                souscategory: [],
                product: [
                    {
                        id: 'Product23',
                        category: "614b71a44b19d8c5c856d452",
                        souscategory: "614b71b14b19d8c5c856d45c",
                        Pname: "Product5",
                        Price: 12,
                        Desc: "Product Desc5",
                        reference: "Ref5",
                        img: "/assets/images/products/5.png",
                        qte: 120
                    },
                    {
                        id: 'Product24',
                        category: "614b71b14b19d8c5c856d45c",
                        souscategory: "614b71a44b19d8c5c856d452",
                        Pname: "Product6",
                        Price: 22,
                        Desc: "Product Desc6",
                        reference: "Ref6",
                        img: "/assets/images/products/1.png",
                        qte: 220
                    }
                ],
                Cname: "Order n° 12",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
            }
        ];
    }
}