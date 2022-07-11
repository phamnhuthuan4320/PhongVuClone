export class user {
    email: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    dob: Date;
    gender: string;

    constructor(email: string,
        password: string,
        phone: string,
        firstName: string,
        lastName: string,
        dob: Date,
        gender: string) {
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
    }
}