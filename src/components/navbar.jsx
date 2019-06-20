import React, { Component } from 'react';
import Order from './order';

class NavBar extends Component {
    render() { 
        const {totalProductOrder, prodCounters, product}  = this.props;
        
        return ( 
            <header className="my-cart">
            <div className="my-cart-content">
                <div className="btn-my-cart">
                    <span className="my-cart-text">
                        <span className="my-cart-title">My Cart</span>
                        <i className="my-cart-icon fas fa-shopping-cart"></i>
                        <span className="prod-count">{  totalProductOrder ? '(' + totalProductOrder + ')' : '' }</span>
                    </span>					
                    <ul className="my-items">
                         {  totalProductOrder ? 
                            <Order 
                                prodCounters={prodCounters} 
                                myProducts={product} /> : 
                                <li>No Orders Yet</li> 
                        }                        
                    </ul>
                </div>			
            </div>
        </header>
         );
    }
}

export default NavBar;