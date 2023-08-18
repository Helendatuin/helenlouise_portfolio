import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/Helendatuin">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/nochu.mjf?mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://instagram.com/yeshamiee?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;