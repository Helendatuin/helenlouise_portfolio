import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Projects from '../components/Projects';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  return (
    <>
    <section>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Row className='py-5 my-2' >
              <Col className='w-100 d-flex justify-content-center items-center'>
                <Image src='haha.jpg' className='' width={350} roundedCircle/>
              </Col>
              <Col className='d-flex flex-column'>
              <h3 className='display-6 fw-semibold'>Hi! I'm</h3>
                <h1 className='display-3 fw-bold'>
                  Helen Louise Datuin
                </h1>
                <h3 className='display-6 fw-semibold'>and I'm an Aspiring Web Developer</h3>
                <p>
                  "Believing in myself to be a great achiever"
                </p>
                <div className='d-flex align-items-center gap-2'>
                  <Link to='/work'>
                    <Button className='btn-lg' variant='dark'>View Work</Button>
                  </Link>
                  <SocialLinks />
                </div>
              </Col>
            </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
      <Row className='mt-5 bg-dark rounded text-light p-5'>
        <Row>
          <Col>
            <h1 className='display-1 fw-bold'>About Me</h1>
            <hr />
            <p>Hi, my name is Helen Louise G. Datuin and I’m 19 years old. I'm a student at PHINMA-University of Pangasinan and I’m currently taking a bachelor of science in information technology degree. Creating and designing websites is my favorite thing to do. I love what I’m doing and it gives me happiness while in the process of doing it. Because with the help of my instructors and my classmates, I was able to do apps and websites throughout my previous school years. Aside from developing and designing apps and websites, I also enjoy photography, dancing, and cooking. I also want to be a photographer someday and hope that I will be able to do so. I’m still working on improving myself to be greater in the field of information technology and I’m willing and dedicated to gain more experiences on this field because I love what I’m doing. Let’s share our passions and work together!
            </p>
            </Col>
            <Col>
              <h3 className='display-1 fw-bold'>Tech Stack</h3>
              <div className='display-1'>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
              </div>
            </Col>
          </Row>
          <h3 className='display-1 fw-bold'>Recent Projects</h3>
          <Projects />
         </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
          <div className='d-flex flex-column justify-content-center text-center'>
            <h1 className='display-1 fw-bold'>Thank you for visiting!</h1>
            <p>Please feel free to contact me if you need any further information.
            </p>
           <div className='d-flex justify-content-center'>
            <SocialLinks/>
           </div>
          </div>
      </motion.div>
      </AnimatePresence>
    </section>
    </>
  );
};

export default Home;
