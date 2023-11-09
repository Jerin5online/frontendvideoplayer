import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
              <Navbar className="bg-dark">
              <Container>
                <Navbar.Brand>
              <Link to={'/'} style={{textDecoration:"none",color:"white",fontSize:"30px", fontFamily:"fantasy"}}><i class="fa-solid fa-video  text-warning me-2" style={{}}></i>{' '}
                 Video Player</Link>
                </Navbar.Brand>
              </Container>
            </Navbar>
      
    
  )
}

export default Header
