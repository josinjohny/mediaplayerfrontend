import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {
    const [show, setShow] = useState(false);
    const[VideoDetails , setVideoDetails] = useState({
      caption:"",
      ImgUrl:"",
      embedLink:""
    })
    console.log(VideoDetails);

  

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);
    
    const handleCancel = ()=>{
      setVideoDetails({
        caption:"",
        ImgUrl:"",
        embedLink:""
      })
    }

    const handleAdd = async() =>{
      const {caption , ImgUrl , embedLink} = VideoDetails

      if(!caption || !ImgUrl || !embedLink){
        toast.info('please fill the form completely')
      }
      else{

        if(embedLink.startsWith('https://youtu.be/')){
          let link =`https://www.youtube.com/embed/${embedLink.slice(17,28)}`
          console.log(link);
          const result = await addVideoApi({ caption , ImgUrl , embedLink: link})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('Video added successfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('something went wrong')
            handleCancel()
          }
          
        }
        else{
          let link = `https://www.youtube.com/embed/${embedLink.slice(-11)}`
          console.log(link);
          const result = await addVideoApi({ caption , ImgUrl , embedLink: link})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('Video added successfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('something went wrong')
            handleCancel()
          }
        }
        // const result = await allVideoApi(VideoDetails)
        // console.log(result);
        
      }
    }

  return (
    <>
    
        <h5><span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className=' ms-2' /></h5>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='text-white'> Please fill the following details</p>
           <form className='border border-secondary p-3 rounded'>

            <div className="mb-3 mt-3">
                <input type="text" value={VideoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...VideoDetails , caption:e.target.value})} />
            </div>
            <div className="mb-3">
            <input type="text" value={VideoDetails.ImgUrl} placeholder='Video Image' className='form-control'onChange={(e)=>setVideoDetails({...VideoDetails , ImgUrl:e.target.value})} />

            </div>
            <div className="mb-3">
            <input type="text" value={VideoDetails.embedLink}  placeholder='Video Url' className='form-control'onChange={(e)=>setVideoDetails({...VideoDetails , embedLink:e.target.value})} />

            </div>
           </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    
    </>
  )
}

export default Add