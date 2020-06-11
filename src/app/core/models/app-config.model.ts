export interface AppConfig {
    product: ProductAPI;
}

export interface ProductAPI {
    get: {
        url: string
    };
    create: {
        url: string
    };
    update: {
        url: string
    };
    delete: {
        url: string
    };
}