import {userInstance} from "../Axios/axiosInstanace"


export const userSignup=(values)=>{
 return userInstance.post("/signup",{...values})
}

export const userLogin=(values)=>{
    return userInstance.post("/login",{...values})
}