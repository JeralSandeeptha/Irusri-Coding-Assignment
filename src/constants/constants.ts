import { Route } from "../types/models";

export const routes: Route[] = [
    { id: 1, routeName: 'Home', routePath: '/home' },
    { id: 2, routeName: 'Products', routePath: '/' },
    { id: 3, routeName: 'About', routePath: '/about' },
    { id: 4, routeName: 'Contact', routePath: '/contact' },
];

export const categories = [
    { id: 1 , name: 'Electronics' },
    { id: 2 , name: 'Fashion' },
    { id: 3 , name: 'Home & Kitchen' },
    { id: 4 , name: 'Beauty & Personal Care' },
    { id: 5 , name: 'Music' },
    { id: 6 , name: 'Toys & Games' },
    { id: 7 , name: 'Books & Stationery' },
    { id: 8 , name: 'Groceries' },
    { id: 9 , name: 'Baby & Kids' },
    { id: 10 , name: 'Others' },
];

export const priceRanges = [
    { id: 1, name: '$0 - $50', min: 0, max: 50 },
    { id: 2, name: '$50 - $100', min: 50, max: 100 },
    { id: 3, name: '$100 - $500', min: 100, max: 500 },
    { id: 4, name: '$500 - $1000', min: 500, max: 1000 },
    { id: 5, name: '$1000 - $1500', min: 1000, max: 1500 },
    { id: 6, name: '$1500 - $2500', min: 1500, max: 2500 },
    { id: 7, name: '$2500 - $5000', min: 2500, max: 5000 },
    { id: 8, name: '$5000 - $10000', min: 5000, max: 10000 },
    { id: 9, name: '$10000+', min: 10000, max: Infinity },
];

export const products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "description": "High-quality wireless headphones with noise cancellation. Click the single product for more details. Thank you. This is a awesome product.",
        "price": 99.99,
        "image": "https://images.unsplash.com/photo-1676315636995-a5d5df17b192?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category":"earphone"
    },
    {
        "id": 2,
        "name": "Gaming Mouse",
        "description": "Ergonomic gaming mouse with customizable buttons. Click the single product for more details. Thank you. This is a awesome product.",
        "price": 49.99,
        "image": "https://images.unsplash.com/photo-1632160871990-be30194885aa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category":"mouse"
    },
    {
        "id": 3,
        "name": "Smartwatch",
        "description": "Feature-packed smartwatch with heart rate monitoring. Click the single product for more details. Thank you. This is a awesome product.",
        "price": 149.99,
        "image": "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category":"watch"
    },
    {
        "id": 4,
        "name": "Portable Charger",
        "description": "Compact 10000mAh portable charger for your devices. Click the single product for more details. Thank you. This is a awesome product.",
        "price": 29.99,
        "image": "https://images.unsplash.com/photo-1706275787516-75a9b7ca7247?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category":"chargers"
    },
    {
        "id": 5,
        "name": "4K Monitor",
        "description": "27-inch 4K UHD monitor with vibrant colors. Click the single product for more details. Thank you. This is a awesome product.",
        "price": 399.99,
        "image": "https://images.unsplash.com/photo-1527800792452-506aacb2101f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category":"monitors"
    }
]