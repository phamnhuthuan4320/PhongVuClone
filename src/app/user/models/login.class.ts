export class Login {
    data: {
        accessToken: string;
        refreshToken: string;
    }

    constructor(data: {
        accessToken: string;
        refreshToken: string;
    }) {
        this.data = data;
    }
}