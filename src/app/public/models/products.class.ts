export class products {
    public page: number;
    public limit: number;
    public totalRow: number;
    public totalPage: number;
    public data: [
        {
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
    ]

    constructor(page: number, limit: number, totalRow: number, totalPage: number, data: [
        {
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
    ]) {
        this.page = page;
        this.limit = limit;
        this.totalRow = totalRow;
        this.totalPage = totalPage;
        this.data = data;
    }
}