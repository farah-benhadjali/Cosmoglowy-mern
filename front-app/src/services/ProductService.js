import axios from 'axios';
export class ProductService {
    static get4Products = async () => {
        return [
            {
                id:1,
                category: "Yeux",
                souscategory: "PALETTES YEUX",
                Pname: "Revolution RELOADED NEWTRALS",
                Price: 36.90,
                Desc: "Revolution PALETTE FARD À PAUPIERE 'RELOADED NEWTRALS 2'",
                reference: "OE2P-2",
                img: "/assets/images/products/fard-revolution1.jpg",
                qte: 76
            },
            {
                id:2,
                category: "Yeux",
                souscategory: "Mascara",
                Pname: "SMOKY LASH",
                Price: 85.90,
                Desc: "SMOKY LASH est un mascara ultra pigmenté pour sublimer les cils au maximum et intensifier le regard.",
                reference: "LPM6-1",
                img: "/assets/images/products/mascara1.png",
                qte: 20
            },
            {
                id:3,
                category: "Yeux",
                souscategory: "Eyeliner",
                Pname: "VINYL EFFECT LONGLASTING",
                Price: 39,
                Desc: "Artdeco Eyeliner liquide longue tenue avec effet haute brillance.",
                reference: "LPM6-1",
                img: "/assets/images/products/eyeliner.jpg",
                qte: 20
            },
            {
                id:4,
                category: "Teint",
                souscategory: "FOND DE TEINT",
                Pname: "CONCEAL & DEFINE",
                Price: 40,
                Desc: "REVOLUTION FOND DE TEINT CONCEAL & DEFINE 'FULL COVERAGE'",
                reference: "MSID-3",
                img: "/assets/images/products/fondrevo.jpg",
                qte: 124
            },
            {
                id:5,
                category: "Teint",
                souscategory: "Poudre",
                Pname: "PRO GLOW",
                Price: 132,
                Desc: "Make up forever highlighter Pro Glow.",
                reference: "LPM6-1",
                img: "/assets/images/products/proh.png",
                qte: 10
            },
            {
                id:6,
                category: "Teint",
                souscategory: "BASE",
                Pname: "PRO GLOW",
                Price: 43,
                Desc: "Artdeco Base de maquillage sans silicone effet lissant 41.",
                reference: "LPM6-1",
                img: "/assets/images/products/base.jpg",
                qte: 10
            },
            {
                id:7,
                category: "Lévres",
                souscategory: "Rouge à Lèvres",
                Pname: "FOR EVER MATTE",
                Price: 90,
                Desc: "Make up forever ROUGE ARTIST FOR EVER MATTE.<br/>une finition lisse et mate pendant 24h, sans aucun transfert !",
                reference: "LPM6-1",
                img: "/assets/images/products/ROUGE-AR.png",
                qte: 10
            },
            {
                id:8,
                category: "Yeux",
                souscategory: "PALETTES YEUX",
                Pname: "RELOADED NEWTRALS",
                Price: 50,
                Desc: "Artdeco PALETTE FARD À PAUPIERE 'RELOADED NEWTRALS 2'",
                reference: "OE2P-2",
                img: "../assets/images/products/fard-artdeco.jpg",
                qte: 76
            },
          
        ];
    }
    static getProducts = async () => {
        return [
            ...(await ProductService.get4Products()),
        ].map((p, index) => ({...p, id: `P-${index + 1}`}));
    }

    static getProductById = async (id) => {
        console.log((await ProductService.getProducts()).filter(p => p.id === id))
        return (await ProductService.getProducts()).find(p => p.id === id);
    }
}
export default ProductService;
