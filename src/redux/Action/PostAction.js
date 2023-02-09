import axios from "axios"
import { GET_POST } from "../ActionTypes/PostTypes"

export const get_post = ()=>async(dispatch) => {
    try {
        const res = await axios.get("http://192.168.2.41:3333/api/getallpost")
    dispatch({type:GET_POST,payload:res.data})
    } catch (error) {
        console.log(error)
    }
    
}

export const add_post = (data)=>async(dispatch)=> {
    try {
        const res = await axios.post("http://192.168.2.41:3333/api/createnewpost",data)
        dispatch(get_post())
    }
catch (error) {
    console.log(error)
}
}
export const delete_post = (id)=>async(dispatch)=> {
    try {
         await axios.delete("http://192.168.2.41:3333/api/deletepost/"+id)
        dispatch(get_post())
    }
catch (error) {
    console.log(error)
}
}
export const update_post = (id,data)=>async(dispatch)=> {
    try {
         await axios.put(`http://192.168.2.41:3333/api/updatepost/${id}`,data)
        dispatch(get_post())
    }
catch (error) {
    console.log(error)
}
}
