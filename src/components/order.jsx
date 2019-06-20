import React from 'react';

const Order = ({prodCounters, myProducts}) => {
   
        return ( 
            prodCounters.map(size => 
                <li key ={size.sid}>
                    <div className="my-item-img">
                        <img src={ myProducts.imgUrl } alt='t-shirt'/>
                    </div>
                    <div className="my-item-details">
                        <p className="item-name">{ myProducts.name }</p>
                        <p>
                            <span className="item-quantity">{ size.count }</span> x 
                            <b className="item-amount">${ myProducts.price.toFixed(2)}</b>
                        </p>
                        <p>
                            Size: <span className="item-size">{ size.size }</span>
                        </p>
                    </div>	
                </li>    
            
            )
        );
}
 
export default Order;