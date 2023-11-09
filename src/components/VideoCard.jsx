import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteAVideo } from '../services/allAPI';

function VideoCard({displayVideo,setDeleteAVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);
  
    const {caption,emplink} = displayVideo
    let today = new Date()
    console.log(today);
    let timestamb = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:"2-digit",day:"2-digit",hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamb);
    let videoDetails={
      caption,emplink,timestamb

    }
    await addToHistory(videoDetails)
  }
  const removeVideo = async(id)=>{
  const response = await deleteAVideo(id)
  setDeleteAVideoStatus(true)

  }

  //function todrag the videocard

  const cardDrag = (e,id) =>{
    console.log(`The id of the videocard dragged is ${id}`);
    e.dataTransfer.setData("videoID",id)
  }
  
  return (
              <>
              <Card className='mt-3'  style={{ width: '100%' }} draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
              <Card.Img onClick={handleShow} style={{width:"280px", height:"300px"}} variant="top" src={displayVideo.url} />
              <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-center'>
                    <h6>{displayVideo.caption}</h6>
                    <button onClick={()=>removeVideo(displayVideo?.id)} className='btn fs-4x text-white btn-danger '><i class="fa-solid fa-trash "></i></button>
                </Card.Title>
              </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:"serif"}}>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.emplink}?autoplay=1`} title={displayVideo?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
      
              </>
  )
}

export default VideoCard
