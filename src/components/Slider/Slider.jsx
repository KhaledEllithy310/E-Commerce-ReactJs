import { Carousel } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './Slider.css'
import img1 from '../../assets/images/book (1).jpg'
import img2 from '../../assets/images/book (2).jpg'
import img3 from '../../assets/images/book (3).jpg'

const Slider = () => {
  return (
    <>
      <Container className='slider'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <img className='d-block w-100' src={img1} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img2} alt='Second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img3} alt='Third slide' />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default Slider
