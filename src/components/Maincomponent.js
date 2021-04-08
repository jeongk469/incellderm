import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Headercomponent';
import Home from './Homecomponent';
import Footer from './Footercomponent';
//import Contact from './Contactcomponent';
//import Testimonial from './Testimonialcomponent';
import {products} from '../shared/productinfo';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: products 

    };
  }
  
  render() {

      const HomePage = () => {
          return(
              <Home products = {this.state.product}/>
          );
        } 
      
      // const ContactPage = () => {
      //   return(
      //       <Contact 
      //       />
      //   );
      // } 

      // const TestimonialPage = () => {

      //   return(
      //     <Testimonial/>
      //   )

      // }


    return (
      
      <div>
      <div>
      <Header />
      <div>
            <Switch>
            <Route path='/home' component={HomePage} />
            {/* <Route path='/contact' component = {ContactPage} />
            <Route path='/testimonial' component = {TestimonialPage} /> */}
                {/* <Route exact path='/aboutus' component={AboutPage}/> 
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={ContactPage}/> */}
            <Redirect to="/home" />
            </Switch>

      </div>
      <Footer />
    </div>
    </div>
    );
  }
}

export default Main;