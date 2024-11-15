import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

export const addTaskAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addtask`,reqBody,reqHeader)
}

export const allTaskAPI =async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllTask`,{},reqHeader)
}

export const deleteTaskAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/tasks/${id}/deleteTask`,{},reqHeader)
}

export const updateTaskAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/tasks/${id}/updateTask`,reqBody,reqHeader)
}