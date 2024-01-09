import { adminInstance } from "../Axios/axiosInstanace";


export const adminLogin=(values)=>{
    return adminInstance.post("/login",{...values})
}

export const toogleBlock=(userId)=>{
    console.log(userId,"oooo");
    return adminInstance.post(`/blockuser/${userId}`)
}






//Post methods

export const adminHeader=()=>{
    return adminInstance.get("/adminHeader")
}

export const userList=()=>{
    return adminInstance.get("/userList")
}