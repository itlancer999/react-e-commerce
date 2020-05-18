import React, {Component} from 'react';
import './Navigation.css';
import { Navbar, Nav} from 'react-bootstrap';


class Navigation extends Component {
 /* constructor(props){
    super(props);
	this.state = {
    bg: "transparent",
   
        };
        
}

  listenScrollEvent = (e) => {
    if (window.scrollY > 20) {
      this.setState({ bg: "light" });
    } else {
      this.setState({ bg: "transparent" });
    } 
  };



  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);

  
 }*/


render() {
    return (
 <Navbar collapseOnSelect expand="lg" bg="light">
  <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    
    <Nav className="ml-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/shop">Shop</Nav.Link>
     
      
      {/*<Nav.Link href="#">
        <span>
        <i className="fa fa-shopping-cart"></i>
        <span className="badge badgeWarning" id="lblCartCount"></span>
       </span>
      </Nav.Link>*/}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
  }
}

export default Navigation;