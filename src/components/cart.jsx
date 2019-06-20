import React, { Component } from 'react';

class Cart extends Component {
    render() { 
        const {product, activeSize, onSizeOrder, onSelectSize} = this.props;        
        return (
            <div className="prod-container">
                <div className="section section-img">
                    <img src={ product.imgUrl } alt="tees"/>
                </div>
                <div className="section section-details">
                    <p className="prod-name">{ product.name }</p>
                    <p className="prod-amount">${ product.price.toFixed(2) }</p>
                    <p className="prod-info">{ product.info }</p>
                    <div className="prod-sizes">
                        <p> 
                            <span className="req-star">size</span>
                            <span className="selected-size">{ activeSize ? activeSize.size : '' }</span>
                        </p> 
                        <ul>
                            { product.availableSizes.map(size => 
                                <li onClick={() => onSelectSize(size)} 
                                    key={ size.sid }
                                    className={ this.getClass(size.sid, activeSize) }
                                    >
                                        { size.size }
                                </li>
                            )}              
                        </ul>
                    </div>
                    <button 
                        className="btn btn-add-cart" 
                        id="btnAddCard"
                        onClick={() => onSizeOrder(activeSize)}
                        >Add To Cart
                    </button>
                </div>
            </div>
          );
    }
    
    getClass(sid, activeSize) {
        if(activeSize.sid){
            return (sid === activeSize.sid) ? 'active' : ''
        }        
    }
}
 
export default Cart;
