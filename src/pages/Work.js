import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import { GrWorkshop } from "react-icons/gr";
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container>
          <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <h2 className='display-1 fw-bold'>
              <GrWorkshop/>
              My Work
            </h2>
            <p>Take a look at some of the projects I've worked on:</p>
            <ul>
              <li>
                <h4 className='fw-bold'>Parking Reservation Application</h4>
                <p>This project aims to make it easier for the visitors, teachers, and students at Phinma-University of Pangasinan to find parking spots inside the campus. With the use of this project, we can help them easily track the available parking spaces of the campus for them to save time and to prevent the stress of having to drive a distance and several areas merely to find a parking spot.</p>
              </li>
              <li>
                <h4 className='fw-bold'>UPCITE Events</h4>
                <p>We the founders of this website will treasure all the happenings during the UPCITE events that's why we decided to create this website. This website will showcase the events of College of Information and Technology Education (CITE) at Phinma University of Pangasinan from the year 2022.</p>
              </li>
              <li>
                <h4 className='fw-bold'>Travel Booking Website</h4>
                <p>This website aims to share all of the beautiful famous tourist destinations in the Philippines with our users in order to assist them in exploring the beautiful famous tourist destinations in the Philippines and in knowing and selecting their next travel destination here in the Philippines.</p>
              </li>
            </ul>
          </Col>
          <Col className='projects'>
            <Projects />
          </Col>
        </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default Work;
