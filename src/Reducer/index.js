import {createStore, combineReducers} from 'redux';

import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from '../Actions/AcrionType';
import "../Actions";


import clothe from './../images/clothe.png';
import phone from './../images/phone.png';


/*
 Return Cartt Items
 and Add , Remove Theme
 from Cart
 */

const cart = (state = {} , action) => {
    state = read_cookie("cart");
    switch (action.type){
        case ADD_TO_CART:
            state = [...state,action.item];
            bake_cookie('cart', state);
            console.log('from add')
            break;

        case REMOVE_FROM_CART:
            state = state.filter(item => item.id !== action.item.id)
            bake_cookie('cart', state);
            console.log('from remove')
            break;

        case REMOVE_ALL_CART:
            state = []
            delete_cookie('cart');
            break;
        default:
            bake_cookie('cart', state);
            break;

    }
    return state
}


// All Products data
const ProductItems = [
    {
        id : 1,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        fPrice: 15700,
        sale : 45,
        conadition : 'New',
        brand : "DELL",
        rate: "100%",
        left : 30,
    },
    {
        id : 2,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [clothe,clothe],
        price: 15700,
        fPrice: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "60%",
        left : 10,
    },
    {
        id : 3,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [phone,phone],
        price: 15700,
        fPrice: 15700,
        sale : 16,
        conadition : 'New',
        brand : "DELL",
        rate: "75%",
        left : 1000,
    },
    {
        id : 4,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        fPrice: 15700,
        sale : 45,
        conadition : 'New',
        brand : "DELL",
        rate: "100%",
        left : 30,
    },
    {
        id : 5,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [clothe,clothe],
        price: 15700,
        fPrice: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "60%",
        left : 10,
    },
    {
        id : 6,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [phone,phone],
        price: 15700,
        fPrice: 15700,
        sale : 16,
        conadition : 'New',
        brand : "DELL",
        rate: "75%",
        left : 1000,
        section : "example",
    },
    {
        id : 7,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        fPrice: 15700,
        sale : 45,
        conadition : 'New',
        brand : "DELL",
        rate: "100%",
        left : 30,
        section : "example",
    },
    {
        id : 8,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [clothe,clothe],
        price: 15700,
        fPrice: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "60%",
        left : 10,
        section : "example",
    },
    {
        id : 9,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [phone,phone],
        price: 15700,
        fPrice: 15700,
        sale : 16,
        conadition : 'New',
        brand : "DELL",
        rate: "75%",
        left : 1000,
        section : "example",
    },
    {
        id : 10,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        fPrice: 15700,
        sale : 45,
        conadition : 'New',
        brand : "DELL",
        rate: "100%",
        left : 30,
    },
    {
        id : 11,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [clothe,clothe],
        price: 15700,
        fPrice: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "60%",
        left : 10,
        section : "example",
    },
    {
        id : 12,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [phone,phone],
        price: 15700,
        fPrice: 15700,
        sale : 16,
        conadition : 'New',
        brand : "DELL",
        rate: "75%",
        left : 1000,
    },
    {
        id : 13,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        fPrice: 15700,
        sale : 45,
        conadition : 'New',
        brand : "DELL",
        rate: "100%",
        left : 30,
        section : "example",
    },
    {
        id : 14,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [clothe,clothe],
        price: 15700,
        fPrice: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "60%",
        left : 10,
    },
    {
        id : 15,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [phone,phone],
        price: 15700,
        fPrice: 15700,
        sale : 16,
        conadition : 'New',
        brand : "DELL",
        rate: "75%",
        left : 1000,
        section : "example",
    },
    {
        id : 16,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        fPrice: 15700,
        sale : 45,
        conadition : 'New',
        brand : "DELL",
        rate: "100%",
        left : 30,
    },
    {
        id : 17,
        title : "aaaaafa Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [clothe,clothe],
        price: 15700,
        fPrice: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "60%",
        left : 10,
        section : "example",
    },
    {
        id : 18,
        title : "Product Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: [phone,phone],
        price: 15700,
        fPrice: 15700,
        sale : 16,
        conadition : 'New',
        brand : "DELL",
        rate: "75%",
        left : 1000,
    },
    
];

for(let i = 0; i < ProductItems.length; i++){
    if(ProductItems[i].sale > 0){
        ProductItems[i].fPrice = ProductItems[i].sale / 100 * ProductItems[i].price;
    }
}
const products = (state = ProductItems, action) => {
    return state
}



// Section Data
const section_api = [
    {
        id: 1,
        name: "Electronics",
        categories : ["Example", "Example", "Example", "Example", "Example",]
    },
    {
        id: 2,
        name: "example",
        categories : ["Example", "Example", "Example", "Example", "Example",]
    }
];
const sections = (state = section_api, action) => {
    return state
}


const store = createStore(combineReducers({cart, products, sections}));

export default store;