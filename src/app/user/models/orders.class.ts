export class orders {
    limit: string;
    page: string;
    totalPage: string;
    totalRow: string;
    data: [
        _id: string,
        totalPrice: string,
        address: {
            fullName: string,
            phone: string,
            address: string,
            ward: string,
            district: string,
            city: string,
            country: string,
            fullAddress: string
        }
    ]

    constructor(
        limit: string,
        page: string,
        totalPage: string,
        totalRow: string,
        data: [
            _id: string,
            totalPrice: string,
            address: {
                fullName: string,
                phone: string,
                address: string,
                ward: string,
                district: string,
                city: string,
                country: string,
                fullAddress: string
            }
        ]
    ) {
        this.limit = limit;
        this.page = page;
        this.totalPage = totalPage;
        this.totalRow = totalRow;
        this.data = data;
    }
}