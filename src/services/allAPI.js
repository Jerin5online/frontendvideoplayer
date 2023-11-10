


import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//upload video

export const uploadVideo = async(reqbody)=>{
 return await commonAPI('POST',`${serverURL}/video`,reqbody)
}

//get all uploaded videos

export const getAllvideos = async()=>{
 return await commonAPI('GET',`${serverURL}/video/`,"")
}

//to delete a video

export const deleteAVideo = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

//API to add history

export const addToHistory = async(videoDetails)=>{
return await commonAPI('POST',`${serverURL}/history/`,videoDetails)
}

//API to get history from JSON server
export const getAllHistory = async()=>{
return await commonAPI('GET',`${serverURL}/history/`,"")
}


//API to add category to Category
export const addAllCategory = async(body)=>{
return await commonAPI('POST',`${serverURL}/category/`,body)
}

//Delete History

export const deleteHistory = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//API to get all categories from json server

export const getAllCategories = async()=>{
return await commonAPI('GET',`${serverURL}/category`,{})
}

//API to delete categories from JSON server

export const deleteCategory = async(id)=>{
return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

// to get a particular video from localhost/4001/videos

export const getAVideo = async(id)=>{
return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

//API to  update the category with newvideos

export const updateCategory = async(id,body)=>{
return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}