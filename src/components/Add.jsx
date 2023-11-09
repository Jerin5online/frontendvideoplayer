import React,  {} from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [videos,setVideos] = useState({
  id:"",
  caption:"",
  url:"",
  emplink:""
 })
const embedVideoLink = (e)=>{
  const {value} = e.target
  console.log(value.slice(-11));
  const link = `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideos({...videos,emplink:link})
}

 console.log(videos);

 const handleUpload = async()=>{
  const {id , caption , url , emplink} = videos
  if (!id || !caption || !url ||!emplink) {
    toast.warning("Please fill the form completly")
  }
 else{
 const response = await uploadVideo(videos)
 console.log(response);
 if (response.status>200 && response.status<300) {
  setUploadVideoStatus(response.data)
  toast.success("Uploded Successfuly")
  handleClose();
 }
 else{
  console.log(response);
  toast.error("Something went wrong.Try again later")
 }

 }
  
 }


  return (
   <>
        <div className='d-flex align-items-center'>
            <h5  style={{fontFamily:"serif",fontSize:"30px"}}> Upload New Video</h5>
            <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title  style={{fontFamily:"serif"}}><i class="fa-solid fa-upload me-2"></i>  Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='ms-3' style={{fontFamily:"serif"}}>Please fill the following details</p>
        <form className='border border-secondary p-3 rounded '>
         <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control  type="text" placeholder="Enter Video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video image URL"  onChange={(e)=>setVideos({...videos,url:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control onChange={embedVideoLink} type="text" placeholder="Enter Youtube Video Link" />
      </Form.Group>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
   </>
  
  )
}

export default Add


//https://www.youtube.com/watch?v=SLD9xzJ4oeU
//<"https://www.youtube.com/embed/SLD9xzJ4oeU" 