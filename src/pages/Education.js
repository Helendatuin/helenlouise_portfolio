import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container>
          <h2 className='display-6 fw-bold'>My Education</h2>
          <p>These are my academic qualifications:</p>
          <Container>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className='fw-bold m-2'>Elementary</span>| Year 2009-2015</Accordion.Header>
            <Accordion.Body>
            <h5 className='fw-bold m-2'>Calasiao Central School (2009-2015)</h5>
              - Consistent Honor Student
              <br />
              <br />
            <h5 className='fw-bold m-2'>Salvacion Elementary School (2013-2015)</h5>
              - First Honorable Mention of Graduating Class 2015 of Salvacion Elementary School

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><span className='fw-bold m-2'>Junior Highschool</span>| Year 2015-2019</Accordion.Header>
            <Accordion.Body>
            <h5 className='fw-bold m-2'>Bued National Highschool (2015-2019)</h5>
              - Top 5 Honor Student for Grade 7
              <br />
              - Top 8 Honor Student for Grade 8
              <br />
              - Special Achievement Award for Grade 10

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><span className='fw-bold m-2'>Senior Highschool</span> | Year 2019-2021</Accordion.Header>
            <Accordion.Body>
            <h5 className='fw-bold m-2'>PHINMA University of Pangasinan (2019-2021)</h5>
              - Consistent Honor Student since Grade 11
              <br />
              - Academic Excellence-With Honors for Grade 11 during the Second, Third, and Fourth Quarter of Academic Year 2019-2021
              <br />
              - Academic Excellence-With Honors for Grade 12 during the First Quarter Academic Year 2020-2021
              <br />
              - Academic Excellence-With High Honors for Grade 12 during the Second, Third, and Fourth Quarter of Academic Year 2020-2021
              
            
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><span className='fw-bold m-2'>College</span> | 2021-Present</Accordion.Header>
            <Accordion.Body>
            <h5 className='fw-bold m-2'> PHINMA University of Pangasinan (2021-present)</h5>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          </Container>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
