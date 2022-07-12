export class address {
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
        isDefault: boolean;
        user: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
        fullAddress: string;
        id: string;

    constructor(
        _id: string,
        fullName: string,
        phone: string,
        address: string,
        ward: string,
        district: string,
        city: string,
        country: string,
        latitude: string,
        longitude: string,
        isDefault: boolean,
        user: string,
        createdAt: string,
        updatedAt: string,
        __v: number,
        fullAddress: string,
        id: string
    ){
        this._id = _id;
        this.fullName = fullName;
        this.phone =phone;
        this.address =address;
        this.ward =ward;
        this.district =district;
        this.city =city;
        this.country =country;
        this.latitude =latitude;
        this.longitude =longitude;
        this.isDefault =isDefault;
        this.user =user;
        this.createdAt =createdAt;
        this.updatedAt =updatedAt;
        this.__v =__v;
        this.fullAddress =fullAddress;
        this.id =id;
    }
}