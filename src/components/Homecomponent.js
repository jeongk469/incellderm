import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import Example from './Carouselcomponent';


function Home(props) {

  return(

    
    <React.Fragment>

        {/* Jumbotron */}
       
          
              <Example/>
      {/* <Jumbotron>
          <div class="container h-100">
              <div class="row h-100 align-items-start justify-content-start text-left">
                  <div class="col-lg-10 align-self-end">
                      <h1 class="text-uppercase text-white font-weight-bold">Liscensed General Contractor in Orange County</h1>
                      
                  </div>
                  <div class="col-lg-8 align-self-baseline">
                      <p class="text-white-75 font-weight-light mb-5"> </p>
                      <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                  </div>
              </div>
          </div>
      </Jumbotron> */}
          

      


      {/* Testimonials */}
      <section class="services section-bg">
      
          <div class="container">
            <div class="section-title">
              <h2>Testimonials</h2>
              <hr class="divider my-4" />
            </div>

            <div class="row">
              <div class="col-md-4 mt-3">
                  <div class="testimonial-1 rounded"><i class="fa fa-quote-left fa-lg"></i>
                      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div class="d-flex flex-row align-items-center"><img class="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div class="ml-2 about"><span class="d-block name">Giralle Cross</span><span class="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mt-3">
                  <div class="testimonial-1 rounded"><i class="fa fa-quote-left fa-lg"></i>
                      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div class="d-flex flex-row align-items-center"><img class="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div class="ml-2 about"><span class="d-block name">Giralle Cross</span><span class="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>

              <div class="col-md-4 mt-3">
                  <div class="testimonial-1 rounded"><i class="fa fa-quote-left fa-lg"></i>
                      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/><br/></p>
                      <div class="d-flex flex-row align-items-center"><img class="rounded-circle" src="https://i.imgur.com/sKDeBrg.jpg" width="40" />
                          <div class="ml-2 about"><span class="d-block name">Giralle Cross</span><span class="place">Operator Trade, Little AR, TX</span></div>
                      </div>
                  </div>
              </div>
      
            </div>

            <div class="row justify-content-center mt-5">
            <a class="btn btn-outline-dark btn-md" href="#about">View More</a>
            </div>

            

          </div>
      </section>
      
      

      </React.Fragment>

    



  );
}

export default Home;