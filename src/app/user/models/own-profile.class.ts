export class ownProfile{
    data: {
        _id: string;
        email: string;
        phone: string;
        isEmailVerified: boolean;
        isPhoneVerified: boolean;
        firstName: string;
        lastName: string;
        avatar: string;
        cover: string;
        role: string;
        dob: string;
        gender: string;
        status: string;
    }

    constructor(data: {
        _id: string;
        email: string;
        phone: string;
        isEmailVerified: boolean;
        isPhoneVerified: boolean;
        firstName: string;
        lastName: string;
        avatar: string;
        cover: string;
        role: string;
        dob: string;
        gender: string;
        status: string;
    }){
        this.data = data;
    }
}