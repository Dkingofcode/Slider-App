import Slider from 'react-slick';
import { shortList } from './data';
import { FaQuoteRight  } from 'react-icons/fa';


const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return(
        <section className='slick-container'>
            <Slider {...settings} >
            {shortList.map((person, index) => {
                const {id, image, name, title, quote } = person;

                  return(
                    <article>
                      <img src={image} alt={name} className="person-img" />
                      <h5 className='name'>{name}</h5>
                      <p className='title'>{title}</p>
                      <p className='text'>{quote}</p>
                      <FaQuoteRight className='icon'/>
                    </article>
                  );
            })}
            </Slider>
        </section>
    )
}
















