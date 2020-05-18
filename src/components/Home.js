import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

render(){

        return(

	<section className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1>Lets Do Some Shopping ...</h1>
             
              <a href="/Shop"><button className="btn m-5 pl-3 pr-3">Shop Now!</button></a>
            </div>
          </div>
          
        </div>
       
      </section>
	

)
}
}

export default Home;