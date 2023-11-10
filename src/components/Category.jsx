import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { addAllCategory,deleteCategory, getAVideo, getAllCategories, updateCategory, } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName,setCategoryName] = useState("")
  const [category,setCategory]=useState([])

  
  //function to add category 
  const addCategory =  async ()=>{
    console.log(categoryName);
   if(categoryName){
    console.log(categoryName);
    let body = {
      categoryName,
      allvideos:[]
    }
    const response = await addAllCategory(body)
    console.log(response);
    if (response.status>=200 && response.status<300) {
      toast.success("Category added Successfully")
      //State value is made null

      setCategoryName("")
      handleClose()
      //to get category
      allCategory()

    }
    else{
      toast.error("Something went wrong please try again")
    }
    
  }
    else{
      toast.warning("Enter Category Name ")
    }
  
   }
   //function to get all categories
   const allCategory=async()=>{
    const{data}=await getAllCategories()
    // console.log(data);
    setCategory(data)
  }
  console.log(category);

  //function to delete Category

  const deleteACategory=async(id)=>{
    await deleteCategory(id)
    allCategory()
  }

  //function to prevenrt reload so that the data that we send wont lost
  
  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e,categoryId)=>{
    console.log('droppped on the category id :',categoryId);

  //to get the data from videocard

   let videoId = e.dataTransfer.getData("videoID")
   console.log(videoId);
   const {data} = await getAVideo(videoId)
   console.log(data);
   const selectedCategory = category.find(item=>item.id===categoryId)
   selectedCategory.allvideos.push(data)
   console.log(selectedCategory);
   await updateCategory(categoryId,selectedCategory)
   allCategory()
  }
  useEffect(()=>{
    allCategory()
  },[])
  return (
    <>
    
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>  
       
        </div>
         {category?.length>0?
        category?.map((item)=>(<div className='m-5 border border-secondary  p-3 rounded'>
          <div className='d-flex justify-content-between p-3 rounded align-items-center' droppable onDragOver={(e)=>dragOver(e)}onDrop={(e)=>videoDrop(e,item?.id)}>
          <h6 className='text-white mt-2 ms-3' style={{fontFamily:"serif",fontSize:"20px"}}>{item.categoryName}</h6>
<Button onClick={()=>deleteACategory(item?.id)} className='btn btn-danger '><i class="fa-solid fa-trash "></i></Button>          </div>
           <Row>
            <Col>
            {item?.allvideos.length>0?
            item?.allvideos?.map(card=>(<VideoCard displayVideo={card} isPresent={true}/>))
            : <p>Nothing to Display</p>}
            
            </Col>
           </Row>
        </div>))
        : <p className='ms-3 mt-2 text-white'>No Category</p>
       } 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='ms-3' style={{fontFamily:"serif"}}><i class="fa-solid fa-upload"></i>  Add New Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <form className='border border-secondary p-3 rounded mt-1'>
        
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>

        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
      </Form.Group>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

</>
  )
}

export default Category


