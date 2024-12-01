export interface Route {
    id: number;
    routePath: string;
    routeName: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface Product {
    id: number,
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
}