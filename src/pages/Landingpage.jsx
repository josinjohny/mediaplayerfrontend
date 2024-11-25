import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landingpage() {
  return (
   <>
   <Container className='mt-5'>
     <Row className='d-flex justify-content-center align-items-center'>
      <Col sm={12} md={6}>

      <h3>Welcome to <span>Media Player</span></h3>
      <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque exercitationem rem quibusdam, nisi eum nulla quos tempore officiis provident dicta accusamus aliquid iusto praesentium consequatur vero necessitatibus consequuntur? Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam fugit necessitatibus quisquam velit sed natus sequi nihil expedita iusto eius ex impedit esse vel magnam, corporis repellat quis doloremque!</p>
      <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>

      </Col>

      <Col sm={12} md={6} className='d-flex justify-content-center'>
       <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-50' />
      </Col>

     </Row>

   </Container>

 <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <h3 className='text-center'>Features</h3>
      <div className="row mt-5">
        <div className="col-md-4 mt-4 mt-md-0">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzO6JdPDAOdkQUVbFzEnzSmOXwE_SdznH1g&s" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzO6JdPDAOdkQUVbFzEnzSmOXwE_SdznH1g&s" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzO6JdPDAOdkQUVbFzEnzSmOXwE_SdznH1g&s" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

      </div>
    </div>
    <div className="col-md-1"></div>

  </div>
 </div>

 <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <div className="row border mt-5 rounded-3">
        <div className="col-md-6">
          <h3 className='text-warning mt-4 ms-3'>Simple fast and powerful</h3>
           
          <div className='ms-4'>
            
            <p> <span style={{fontSize:'30px', fontWeight:'bolder'}}>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse animi minima, consectetur saepe natus odio magni pariatur est voluptates aut, amet corrupti ipsam omnis doloremque a ratione nesciunt. Id?</p>
  
            
            <p> <span style={{fontSize:'30px', fontWeight:'bolder' }}>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse animi minima, consectetur saepe natus odio magni pariatur est voluptates aut, amet corrupti ipsam omnis doloremque a ratione nesciunt. Id?</p>
  
            
            <p> <span style={{fontSize:'30px', fontWeight:'bolder'}}>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse animi minima, consectetur saepe natus odio magni pariatur est voluptates aut, amet corrupti ipsam omnis doloremque a ratione nesciunt. Id?</p>
          </div>
        </div>
        <div className="col-md-6">
        <iframe className='ms-3 mt-4' width="550" height="500" src="https://www.youtube.com/embed/roz9sXFkTuE" title="Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div className="col-md-1"></div>
  </div>

 </div>


   </>
  )
}

export default Landingpage