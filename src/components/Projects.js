import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel className='d-flex w-100'>
        <Carousel.Item>
          <div>
            <Image src="/park.jpg" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>Parking Reservation Application</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <Image src="/upcite.png" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>UPCITE Events</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <Image src="/travel.png" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>Travel Booking Website</h3>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  )
}

export default Projects
