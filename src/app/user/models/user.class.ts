export class User {
    email: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    dob: Date;
    gender: boolean;

    constructor(email: string,
        password: string,
        phone: string,
        firstName: string,
        lastName: string,
        dob: Date,
        gender: boolean) {
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
    }
}