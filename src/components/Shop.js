import React, {Component} from 'react';
import Products from '../components/Products';
import Basket from '../components/Basket';


class Shop extends Component{
  constructor(props){
        super(props);
        this.state = {
            products:[],
            filteredProducts: [],
            cartItems:[]
        };
        
    }

    

    componentDidMount(){
     
      if(localStorage.getItem("cartItems")){
  this.setState({cartItems:JSON.parse(localStorage.getItem("cartItems"))});
  }
  }


    render(){

        return(


          <div className="container mt-3 pt-3">

          <h1>Shop</h1>
          <hr/>
          <div className="row">
        
          <div className="col-md-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>

          </div>
         <div className="col-lg-4">
          <Basket  handleRemoveFromCart={this.handleRemoveFromCart} cartItems={this.state.cartItems}/>
          </div>
         
          </div>
          </div>



          );

}
}

export default Shop;