import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function Watch() {
  const [history,setHistory] = useState([])
  const AllHistory =  async()=>{
  const {data} = await getAllHistory()
  console.log(data);
  setHistory(data)

  }
  console.log(history);
  //function to rem ove history

const removeHistory =async(id)=>{
  await deleteHistory(id)
  //to get the remaing history
  AllHistory()
}
  useEffect(()=>{
    AllHistory()
  },[])
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between" >
          <h4 style={{fontFamily:"serif"}}> Watch History</h4>
          <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontSize:'21px',fontFamily:"serif"}}><i class="fa-solid fa-arrow-left fa-beat-fade me-2"></i> Back to Home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tBody>
          {history.length > 0 ?
              history.map((item,index)=>(<tr>
                <td>{index+1}</td>
                <td>{item.caption}</td>
                <td><a href={`${item.emplink}?autoplay=1`} target='_blank'>{item.emplink}</a></td>
                <td>{item.timestamb}</td>
                <td><button onClick={()=>removeHistory(item?.id)} className='btn fs-4x text-white btn-danger '><i class="fa-solid fa-trash "></i></button></td>
              </tr>
              ))
              :
              <p style={{color:"white",fontSize:"20px",fontFamily:"serif"}}>No Watch History</p>
              }
          </tBody>
      </table>
    </>
  )
}

export default Watch