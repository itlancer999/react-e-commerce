import React from 'react';
import './Products.css';
import Util from '../components/Util';
import {connect} from 'react-redux';
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends React.Component {
	componentDidMount() {
    this.props.fetchProducts();
  }

	render(){
		const productItems = this.props.products.map((product) => (
      <div className="col-sm-4 pb-5" key={product.id}>
			<div className="thumbnail text-center">
				<a href={`#${product.id}`}>
					<img src={`products/${product.sku}_2.jpg`} alt={product.title} width="120px" height="140px" />
					<p>{product.title}</p>
          		</a>

				<b>{Util.formatCurrency(product.price)}</b>

		        <button
		        className="btn btn-primary"
		        onClick={() => this.props.addToCart(this.props.cartItems, product)}
		        >
		        Add to cart
		        </button> 
			</div>
      </div>
    ));

	return <div className="row">{productItems}</div>;
	}
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.items
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);


