// services/productService.js
import api from './api';
import { products } from '../services/products';

// جلب كل المنتجات
export const getProducts = async (category) => {
    // let url = "/api/products?populate=*";
    // if (category && category !== "All") {
    //     url += `&filters[category][$eq]=${category}`;
    // }
    // const { data } = await api.get(url);
    if (!category || category === "All") return products.data; // لو All، ارجع كل المنتجات
    const data = products.data.filter(p => p.category === category) || [];
    return data;
};

// جلب منتج واحد
export const getProductById = async (id) => {
    // const { data } = await api.get(`/api/products/${id}?populate=*`);
    // console.log(data);
    const data = products.data.find(p => p.id === parseInt(id));
    return data;
};

// إنشاء منتج جديد
export const createProduct = async (product) => {
    const { data } = await api.post('/products', product);
    return data;
};

// تحديث منتج
export const updateProduct = async (id, product) => {
    const { data } = await api.put(`/products/${id}`, product);
    return data;
};

// حذف منتج
export const deleteProduct = async (id) => {
    const { data } = await api.delete(`/products/${id}`);
    return data;
};
