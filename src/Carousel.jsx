import React from 'react';
import { shortList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Carousel = () => {
    const [slide, setSlide] = useState(shortList);
    const [currentPerson, setCurrentPerson ] = useState(0);
    
    const prevSlide = () => {
      setCurrentPerson((oldPerson) => {
        const result = (oldPerson - 1 + slide.length) % slide.length;
        return result;
      }); 
    };

    const nextSlide = () => {
      setCurrentPerson((oldPerson) => {
        const result = (oldPerson + 1) % slide.length;
        return result;
      });
    };

    useEffect(() => {
      setInterval(() => {
        nextSlide



      } )
    })

    

  return (
    <div className='slider-container'>
    {slide.map((item, index) => {
        const { id, image, name, title, quote } = item
        return( 
          <article className='slide' style={{ transform: `translateX(${100 * (index - currentPerson)}%)`, opacity: index === currentPerson ? 1 : 0,
          visibility: index === currentPerson ? 'visible' : 'hidden'}} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
          </article>
        );
    })}
     <button type='button' className='prev' onClick={prevSlide}><FiChevronLeft /></button>
     <button type='button' className='next' onClick={nextSlide}><FiChevronRight /></button>
    </div>
  )
}

export default Carousel;