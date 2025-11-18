// services/productService.js
import api from './api';

// جلب كل المنتجات
export const getProducts = async () => {
    const { data } = await api.get('api/products?populate=*');
    return data;
};

// جلب منتج واحد
export const getProductById = async (id) => {
    const { data } = await api.get(`/products/${id}`);
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
