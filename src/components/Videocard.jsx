import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, removeVideo } from '../services/allApi';





function Videocard({videoDetails , setDeleteStatus , present}) {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false)
const handleShow = async() => {
  setShow(true);
  let caption = videoDetails?.caption
  let url = videoDetails?.embedLink
  const time = new Date()
  console.log(time);
  const timestamp = new Intl.DateTimeFormat("en-GB", {year: 'numeric' , month:'2-digit', day: '2-digit', hour:'2-digit' , minute:'2-digit' , second:'2-digit' }).format(time)
  console.log(timestamp);
  
  const reqBody = {
    caption,
    url,
    timestamp
  }
  



  const result = await addHistoryApi(reqBody)
  console.log(result);
  
}

const handleDelete = async(id)=>{
  const result = await removeVideo(id)
  console.log(result);
  if(result.status>=200 && result.status<300){
    setDeleteStatus(result)
  }
 
}

const videoDrag = (e , vDetails )=>{
  console.log(e);
  console.log(vDetails);
  e.dataTransfer.setData("videoDetails",JSON.stringify(vDetails))
  
}



  return (
    <>
     <Card style={{ width: '100%' }} className='mt-3' draggable onDragStart={(e)=>videoDrag(e , videoDetails)} >
      {!present && <Card.Img onClick={handleShow} variant="top" src={videoDetails?.ImgUrl} style={{height:'300px'}} />}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>{videoDetails?.caption}</Card.Title>
        
        { !present && <Button onClick={()=>handleDelete(videoDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}

      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="522" src={`${videoDetails?.embedLink}?autoplay=1`} title="Panthalchant -  Ft. Dabzee, Baby Jean, JOKER | M.H.R x Wraith V | Mu.Ri" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocard