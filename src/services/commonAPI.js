

//  const { default: axios } = require("axios")
import axios from "axios"

export const commonAPI = async (httpMethod,url,reqbody)=>{


  const reqConfig ={

              method: httpMethod,
              url: url,
              data: reqbody,
        // can specify content in HEADER using Content-type
        // -if content available on internet then its type application/json
        // -if content not available on internet then its type multipart/form data - only in our system

              Headers:{
              "Content-Type":"application/json"
              }
}
    return await axios(reqConfig).then((result)=>{
return result
    }).catch((err)=>{
    return err
    })
}