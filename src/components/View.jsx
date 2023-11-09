import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { deleteAVideo, getAllvideos } from '../services/allAPI'
import VideoCard from './VideoCard'


function View({uploadVideoStatus}) {
  const [Allvideo,setAllvideos] = useState([])
  const [deleteAVideo,setDeleteAVideo] =useState(false)
  
  const getAllUploadedVideo = async()=>{
    const response = await getAllvideos()
    console.log(response);
   const {data} = response 
   console.log(data);
     setAllvideos(data) 

   

  }

  console.log(Allvideo);

  useEffect(()=>{
    getAllUploadedVideo()
    setDeleteAVideo(false)
  },[uploadVideoStatus,deleteAVideo])
  return (
    <> 
        <Row>
             {Allvideo.length>0?
             Allvideo.map((video)=>( <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayVideo ={video} setDeleteAVideo={setDeleteAVideo}
              />
            </Col>))
             :
              <p>Nothing to display</p>
              }
        </Row>
    </>
   
  )
}

export default View