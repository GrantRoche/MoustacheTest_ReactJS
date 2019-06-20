import React, { Component } from 'react';
import NavBar from './components/navbar';
import Cart from './components/cart';

class App extends Component {
  state = {
    product: {
      pid: 1,
      name: 'Classic Tee',
      price: 75,
      imgUrl: './img/classic-tee.jpg',
      availableSizes: [ 
        { sid: 1, size: 'S' },
        { sid: 2, size: 'M' },
        { sid: 3, size: 'L' }
      ],
      info: 'Dolor sit amet, consectetur adipiscing elit_ Haec et tu ita posuisti, et verba vestra sunt Quod autem ratione actum est. id officium appellamus dolor sit amet. consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est. id officium appellamus'
    },    
    activeSize: {},
    prodCounters: []
  }

  handleOrder = (size) => {
    if(!this.state.activeSize.sid){
      alert("No size selected.");
    }else{
      let index;
      const prodCounters = [...this.state.prodCounters];      
      
      if(prodCounters.indexOf(size) === -1){
        size.count = 1;
        index = prodCounters.indexOf(size) ;
        prodCounters.push(size);
      }else{
        index = prodCounters.indexOf(size)
        prodCounters[index].count++;
      }     
      this.setState({prodCounters});
    }
  }

  handleSize = (size) =>{
    const activeSize = this.state.activeSize;
    activeSize[0] = {...size };
    this.setState({activeSize : activeSize[0]});
  }

  render(){
    return (      
      <React.Fragment>
        <div className="main-container">
          <NavBar 
            product={this.state.product}
            totalProductOrder = {(this.state.prodCounters.length) ? this.state.prodCounters.length : 0}
            prodCounters = {this.state.prodCounters}
          />
          <div className="container">
            <Cart 
              product={this.state.product}
              activeSize={this.state.activeSize}
              onSizeOrder={this.handleOrder}
              onSelectSize={this.handleSize}
            />
          </div>      
        </div>      
      </React.Fragment>
    );
  }  
}

export default App;
