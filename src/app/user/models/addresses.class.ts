export class addresses {
    data: [
        {
            _id: string;
            fullName: string;
            phone: string;
            address: string;
            ward: string;
            district: string;
            city: string;
            country: string;
            latitude: string;
            longitude: string;
            isDefault: boolean
            user: string;
            createdAt: string;
            updatedAt: string;
            __v: number,
            fullAddress: string;
            id: string;
        }
    ]

    constructor(data: [
        {
            _id: string;
            fullName: string;
            phone: string;
            address: string;
            ward: string;
            district: string;
            city: string;
            country: string;
            latitude: string;
            longitude: string;
            isDefault: boolean
            user: string;
            createdAt: string;
            updatedAt: string;
            __v: number,
            fullAddress: string;
            id: string;
        }
    ]){
        this.data = data;
    }
}