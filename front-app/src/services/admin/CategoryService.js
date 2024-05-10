import mongoose from "mongoose";

export class CategoryService {
    static getAllCategories = async () => {
        return [
            {
                Cname: "Yeux",
                Desc: "Yeux",
                souscategory: [
                    {
                        scname: "Mascara",
                        scDesc: "Mascara Yeux"
                    },
                    {
                        scname: "PALETTES",
                        scDesc: "PALETTES YEUX"
                    },
                    {
                        scname: "Eyeliner",
                        scDesc: "Eyeliner YEUX"
                    }
                ]
            },
            {
                Cname: "Teint",
                Desc: "Teint",
                souscategory: [
                    {
                        scname: "FOND DE TEINT",
                        scDesc: "FOND DE TEINT"
                    },
                    {
                        scname: "Poudre",
                        scDesc: "Poudre"
                    },
                    {
                        scname: "Base",
                        scDesc: "Base"
                    }
                ]
            },
            {
                Cname: "Lévres",
                Desc: "Lévres",
                souscategory: [
                    {
                        scname: "Rouge à Lèvres",
                        scDesc: "Rouge à Lèvres"
                    }
                    
                ]
            },
        ];
    }
    static deleteCategory = async (id) => {
        // TODO: Implement deleteProduct
        return true;
    }

    static addCategory = async (category) => {
    }

    static updateCategory = async (category) => {
    }

    static getSubCategories = async (category) => {
        return [...new Set([
            ...(await CategoryService.getAllCategories()).map((c) => [...c.souscategory]).flat()
        ])];
    }

    static addSubCategory = async (category, subCategory) => {
    }

    static deleteSubCategory = async (category, subCategory) => {
    }

    static updateSubCategory = async (category, subCategory) => {
    }
}