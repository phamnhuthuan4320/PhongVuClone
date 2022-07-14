export class listPM {
    object: string;
    data: [
        {
            id: string;
            object: string;
            billing_details: {
                address: {
                    city: string;
                    country: string;
                    line1: string;
                    line2: string;
                    postal_code: string;
                    state: string;
                },
                email: string;
                name: string;
                phone: string;
            },
            card: {
                brand: string;
                checks: {
                    address_line1_check: string;
                    address_postal_code_check: string;
                    cvc_check: string;
                },
                country: string;
                exp_month: string;
                exp_year: string;
                fingerprint: string;
                funding: string;
                generated_from: string;
                last4: string;
                networks: {
                    available: [],
                    preferred: string;
                },
                three_d_secure_usage: {
                    supported: boolean
                },
                wallet: string;
            },
            created: string;
            customer: string;
            livemode: boolean;
            metadata: {},
            type: string;
        }
    ];
    has_more: boolean;
    url: string;

    constructor(
        object: string,
        data: [
            {
                id: string;
                object: string;
                billing_details: {
                    address: {
                        city: string;
                        country: string;
                        line1: string;
                        line2: string;
                        postal_code: string;
                        state: string;
                    },
                    email: string;
                    name: string;
                    phone: string;
                },
                card: {
                    brand: string;
                    checks: {
                        address_line1_check: string;
                        address_postal_code_check: string;
                        cvc_check: string;
                    },
                    country: string;
                    exp_month: string;
                    exp_year: string;
                    fingerprint: string;
                    funding: string;
                    generated_from: string;
                    last4: string;
                    networks: {
                        available: [],
                        preferred: string;
                    },
                    three_d_secure_usage: {
                        supported: boolean
                    },
                    wallet: string;
                },
                created: string;
                customer: string;
                livemode: boolean;
                metadata: {},
                type: string;
            }
        ],
        has_more: boolean,
        url: string
    ) {
        this.object = object;
        this.data = data;
        this.has_more = has_more;
        this.url = url;
    }
}