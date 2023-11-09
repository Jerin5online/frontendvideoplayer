import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 align-item-center justify-content-between w-100'>
  <Col></Col>
  <Col lg={5}>
  <h2 className='mt-5'>Welcome to <span style={{color:"orange",fontFamily:"fantasy"}}>Video player</span></h2>
  <p style={{textAlign:"justify"}} className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quae odit numquam dolores quaerat repudiandae id iste quia recusandae quos, obcaecati at vero consequatur 
    reiciendis excepturi assumenda dolorem perferendis debitis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolorum nisi unde tempore exercitationem quasi beatae explicabo. Voluptatum obcaecati, numquam nihil,
     illum dolorem libero placeat ea modi molestiae harum incidunt.</p>
    <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning w-40'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>

  </Col>

  <Col></Col>


  <Col lg={5} style={{ marginRight:"50px",marginBottom:"20px"}}>
    <img style={{width:"600px", height:"550px", marginRight:"30px"}} src="https://i.gifer.com/PbK7.gif" alt="no image" />
  </Col>



    </Row>
    <h2 className="container d-flex justify-content-center align-items-center" style={{fontFamily:"fantasy",color:"orange",marginTop:"150px"}}>Features</h2>

    <div className="container d-flex justify-content-center align-items-center w-100 mt-5" style={{gap:"3.2em"}}>
    
    <Card className='p-4 ' style={{ width:'22rem'}}>
      <Card.Img style={{width:"100%",height:"300px"}} variant="top" src="https://images.8tracks.com/imgix/i/009/534/851/giphy__8_-6555.gif?rect=0,0,500,500&q=65&fit=max" />
      <Card.Body>
        <Card.Title style={{ fontSize:"30px",fontFamily:"serif", color:"white" }}>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4' style={{ width: '22rem'}}>
      <Card.Img style={{width:"100%",height:"300px"}} variant="top" src="https://media.tenor.com/y5DrU1cjqkYAAAAd/sound-waves.gif" />
      <Card.Body>
        <Card.Title style={{ fontSize:"30px",fontFamily:"serif", color:"orange" }}>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:"100%",height:"300px"}} variant="top" src="https://cdnb.artstation.com/p/assets/images/images/040/097/227/original/phazed-psychedelic-energy-hands-6-850.gif?1627859795" />
      <Card.Body>
        <Card.Title style={{ fontSize:"30px",fontFamily:"serif", color:"white" }}>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="container border border-2 rounded border-primary pt-5 mt-5 mb-5">
      <Row>
      <Col lg={5} >
        <h3 className='text-warning' style={{fontFamily:"serif"}}>Simple fast and Powerful</h3>
        <p className='mt-3'> <span className='fs-5 fw-bolder' style={{color:"white"}}>Play Everything </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores voluptatum nemo quia sequi optio aspernatur ab iusto repellat, dignissimos omnis libero sunt perferendis!</p>
        <p> <span className='fs-5 fw-bolder'  style={{color:"white"}}>Play Everything </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores voluptatum nemo quia sequi optio aspernatur ab iusto repellat, dignissimos omnis libero sunt perferendis!</p>
        <p> <span className='fs-5 fw-bolder'  style={{color:"white"}}>Play Everything </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores voluptatum nemo quia sequi optio aspernatur ab iusto repellat, dignissimos omnis libero sunt perferendis!</p>     
      
      </Col>
      <Col></Col>
      <Col lg={6}>
      <iframe width="100%" height="350" src="https://www.youtube.com/embed/MSaj9Otax6Y?si=vtGUr8qjv_8xF2VP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
      </Col>





      </Row>

    </div>
    </>
  )
}

export default LandingPage
