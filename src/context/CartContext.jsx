import React, { createContext, useState, useEffect, useContext } from 'react';
import SnackBar from '../components/SnackBar'; // تأكد من المسار

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 1. State للتحكم في السناك بار
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState('');

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // دالة مساعدة لفتح السناك بار
    const showSnack = (message) => {
        setSnackMessage(message);
        setSnackOpen(true);
    };

    // دالة لقفل السناك بار (هنبعتها للكومبوننت)
    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackOpen(false);
    };

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find((item) => item.id === product.id);
            if (isItemInCart) {
                showSnack('Quantity updated!'); // 2. نداء لتغيير الـ State
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            showSnack('Added to cart successfully!'); // 2. نداء لتغيير الـ State
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // 2. Decrease Quantity (الجديد)
    // اللوجيك: لو الكمية أكبر من 1 نقصها، لو 1 امسح المنتج خالص (دي الـ UX الشائعة)
    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === productId) {
                    showSnack('Quantity updated!');
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter((item) => item.quantity > 0);
        });
    };

    // 3. Remove Specific Item (زرار الحذف/سلة المهملات)
    const removeFromCart = (productId) => {
        showSnack('Product removed from cart!');
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    // 4. Clear Cart (مسح الكل)
    const clearCart = () => {
        showSnack('Cart cleared!');
        setCartItems([]); // رجعها مصفوفة فاضية
    };

    // دالة مساعدة تحسب السعر الكلي (Total Price)
    // بنحطها هنا عشان نستخدمها في أي مكان بسهولة
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                getCartTotal, // صدرنا الدالة دي كمان
            }}
        >
            {children}
            <SnackBar
                open={snackOpen}
                message={snackMessage}
                handleClose={handleSnackClose}
            />
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);