import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList() {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            try {
                const products  = await axios.get("http://localhost:8000/api/products");
                setProducts(products.data);

            } catch(error) {
                console.log(error);
            }

            setLoading(false);
        }

        fetchProducts();
    }, [])

    return (<>
        {loading && <p className='text-center text-2sm'>Please wait</p>}
        {!loading && (
            products.map(product => (
            <div className='max-w-sm rounded overflow-hidden shadow-lg p-3 -mt-9' key={product.id}>
                <img src="https://source.unsplash.com/dQdyO9jsixA" className='rounded'/>
                <div className='px-6 py-4'>
                    <p className='font-bold text-md text-center'>{product.product_name}</p>
                    <p className='font-thin text-sm text-center py-4'>
                        {product.description}
                    </p>
                    <p className='font-bold text-lg text-red-400 text-center'>
                        $ {product.unit_price}
                    </p>
                    <div className='text-center'>
                        <p className='text-sm mt-3'>Review</p>
                        ⭐⭐⭐⭐⭐
                    </div>
                    <button className='rounded-full bg-indigo-500 text-white text-sm mt-4 p-2 py-2 px-4'>Add to Cart</button>
                </div>
            </div>
            ))
        )}

    </>)
}