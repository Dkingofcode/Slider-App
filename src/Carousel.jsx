import React from 'react'
import { shortList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
    const [slide, setSlide] = useState(shortList);

    const prevSlide = () => {

    }

    const nextSlide = () => {

    }

  return (
    <div className='slider-container'>
    {slide.map((item, index) => {
        const { id, image, name, title, quote } = item
        return( 
          <article className='slide' style={{ transform: `translateX(${100 * (index - currentPerson)})`}} key={id}>
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