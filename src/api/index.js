import { axiosBase } from "./config"

export const checkAccountExists = async (address) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let result = await axiosBase.get(`/users/userexists/${address}`,{address:"xtz"},{
                headers:{
                    'Content-Type':"application/json"
                }
            });
            resolve(result);
        }catch(err){
            reject(err);
        }
    })
}

export const createAccountApi = async (account) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let result = await axiosBase.post(`users/create`,{address:account},{
                headers:{
                    'Content-Type':"application/json"
                }
            });
            resolve(result.data);
        }catch(err){
            reject(err);
        }
    })
}

export const getAccountInfo = async (account) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let result = await axiosBase.get(`users/userinfo/${account}`,{
                headers:{
                    'Content-Type':"application/json"
                }
            });
            resolve(result.data);
        }catch(err){
            reject(err);
        }
    })    
}

export const updateProfileRegisterApi = async (data) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const formdata = new FormData();
            formdata.append("address",data.address);
            formdata.append("userName",data.username);
            formdata.append("email",data.email);
            let result = await axiosBase.patch(`users/editprofile`,formdata,{
                headers:{
                    'Content-Type':"multipart/form-data"
                }
            });
            resolve(result.data);
        }catch(err){
            reject(err);
        }
    })    
}

export const updateProfileApi = async (data) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const formdata = new FormData();
            formdata.append("address",data.address);
            formdata.append("userName",data.userName);
            formdata.append("email",data.email);
            formdata.append("bio",data.bio);
            formdata.append("website_link",data.website_link);
            formdata.append("facebook_link",data.facebook_link);
            formdata.append("instagram_link",data.instagram_link);
            formdata.append("twitter_link",data.twitter_link);
            formdata.append("profileImage",data.profileImage);
            formdata.append("coverImage",data.coverImage);
            let result = await axiosBase.patch(`users/editprofile`,formdata,{
                headers:{
                    'Content-Type':"multipart/form-data"
                }
            });
            resolve(result.data);
        }catch(err){
            reject(err);
        }
    })    
}

export const createCurationApi = async (data) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const formdata = new FormData();
            formdata.append("name",data.name);
            formdata.append("address",data.address);
            formdata.append("symbol",data.symbol);
            formdata.append("description",data.description);
            formdata.append("website_link",data.website_link);
            formdata.append("facebook_link",data.facebook_link);
            formdata.append("instagram_link",data.instagram_link);
            formdata.append("twitter_link",data.twitter_link);
            formdata.append("youtube_link",data.youtube_link);
            formdata.append("youtube_title",data.youtube_title);
            formdata.append("curation_description_image",data.curation_description_image);
            formdata.append("curation_file",data.curation_file);
            let result = await axiosBase.post(`curations/createcollection`,formdata,{
                headers:{
                    'Content-Type':"multipart/form-data"
                }
            });
            resolve(result.data);
        }catch(err){
            reject(err);
        }
    })    
}