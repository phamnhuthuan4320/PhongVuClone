export class productDetail {
    public data: {
        _id: string;
        name: string;
        description: string;
        sku: string;
        price: number;
        quantity: number;
        image: string;
        category: {
            _id: string;
            name: string;
            description: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            __v: number;
        },
        warranty: {
            months: number;
            description: string;
        },
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        __v: number;
    }

    constructor(data:{
            _id: string;
            name: string;
            description: string;
            sku: string;
            price: number;
            quantity: number;
            image: string;
            category: {
                _id: string;
                name: string;
                description: string;
                image: string;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                __v: number;
            },
            warranty: {
                months: number;
                description: string;
            },
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            __v: number;
        }
    ) {
        this.data = data;
    }
}