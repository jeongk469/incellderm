import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron
} from 'reactstrap';
import {products} from '../shared/productinfo';





const Example = (props) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === products.length - 2 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? products.length - 2 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = products.filter((item) => item.id !== 3).map((item) => {

    
    

    return (
      <CarouselItem
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
       

          <Jumbotron style={{background: `url(${item.src})`}}>
            <div class="container h-100">
                <div class="row h-100 align-items-start justify-content-start text-left ">
                    
                    <div class="col-md-5 col-sm-5 col-xs-3 text-center align-self-center subjumbo" >
                      <h4 class="mt-3 text-uppercase">{item.title}</h4>
                      <button class="mb-3 btn btn-outline-dark btn-xl" href="#about">See Product</button>
                    </div>
                    {/* <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 font-weight-light mb-5"> </p>
                        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div> */}
                </div>

            {/* <div class="col-md-6 align-self-middle subjumbo" >
                    <h4 class="text-uppercase">{item.title}</h4>
                    </div> */}
            </div>
          </Jumbotron>
        
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={3000}
      
    >
      <CarouselIndicators items={products} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;