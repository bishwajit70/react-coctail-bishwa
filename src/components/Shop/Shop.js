import React, { useEffect, useState } from 'react';
import SingleCocktail from '../SingleCocktail/SingleCocktail';
import './Shop.css'

const Shop = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setCocktails(data.drinks))
    }, [])
    
    const [orders, setOrders] = useState([])
    const handleOrder = (order) => {
        const newOrders = [...orders, order];
        setOrders(newOrders);
    }

    const [orderDetails, setOrderDetails]=useState([])
    const handleDetail =(details)=>{
        const newOrderDetails = [...orderDetails, details]
        setOrderDetails(newOrderDetails)
    }


    return (
        <div className='container shop-container pt-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        {
                            cocktails.map(cocktail => <SingleCocktail
                                key={cocktail.idDrink}
                                cocktail={cocktail}
                                handleOrder={handleOrder}
                                handleDetail={handleDetail}

                            ></SingleCocktail>)
                        }
                    </div>
                </div>

                <div className='col-md-3 order bg-warning  ms-auto'>
                    <div>
                        <h1>Order Summary</h1>
                        {
                            orders.map(order => <p className='text-start px-3' key={order.idDrink}>
                                {order.strDrink} : {order.strCategory}
                            </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;