import pr1_1 from '../assets/products/Image (1).png'
import pr1_2 from '../assets/products/Image (2).png'
import pr1_3 from '../assets/products/Image.png'
import pr2_1 from '../assets/products/img4.png'
import pr2_2 from '../assets/products/img5.png'
import pr2_3 from '../assets/products/img6.png'
export const products = {
    data: [
        {
            id: 1,
            title: "Timeless A-line Evening Dress",
            price: 109.99,
            category: "Women",
            fit: "A-line",
            img: [pr1_1, pr1_2, pr1_3],
            description: "A classic A-line evening dress with a fitted bodice and flowing skirt, perfect for formal occasions.",
            material: "Silk",
            rate: 4.5
        },
        {
            id: 2,
            title: "Elegant Sheath Dress",
            price: 129.99,
            category: "Accessories",
            fit: "Sheath",
            img: [pr2_1, pr2_2, pr2_3],
            description: "A sleek sheath dress that hugs the body, ideal for cocktail parties and upscale events.",
            material: "Satin",
            rate: 5
        },

    ]
}