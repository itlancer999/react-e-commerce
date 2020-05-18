import React, {Component} from 'react';
import Util from '../components/Util';
import { connect } from "react-redux";
import { removeFromCart,clearCart } from "../actions/cartActions";

class Basket extends Component {
     render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <span>
            You have {cartItems.length} items in the basket. <hr /></span>
          
        )}

        {cartItems.length > 0 &&
          <div>
            <ul> 
              {this.props.cartItems.map((item) => (
                  <li key={item.id}>
                    <b>{item.title}</b>
                    
                    
                    <span className="px-3">{item.count} x {Util.formatCurrency(item.price)}</span>



                      <i className="fa fa-trash px-3" onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                      }></i>
                  </li>
                ))}
            </ul>
            <span>Total: {Util.formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}</span>
            <br/>
            <button
                onClick={() => {alert("Thank you for order.");this.props.clearCart(this.props.cartItems)}}
                className="btn btn-primary"
              >
                Checkout
              </button>
          </div>

        }

      </div>
      )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { removeFromCart,clearCart })(Basket);