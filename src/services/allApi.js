import Category from "../components/Category";
import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

//api to remove a video

export const removeVideo = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`, {} )
}

//api to add video to history

export const addHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}


//api to get all video from history

export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete history

export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',` ${serverUrl}/history/${id}`,{})
}


//api to add category

export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//api to get category

export const getCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

//api to delete category

export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/Category/${id}`,{})
}

//api to update category

export const updateCategoryApi = async(categoryid , reqBody)=>{
   return await commonApi('PUT',`${serverUrl}/category/${categoryid}`,reqBody)
}
