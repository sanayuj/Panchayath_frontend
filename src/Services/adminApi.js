import { adminInstance } from "../Axios/axiosInstanace";



//POST method

export const adminLogin=(values)=>{
    return adminInstance.post("/login",{...values})
}

export const toogleBlock=(userId)=>{
    return adminInstance.post(`/blockuser/${userId}`)
}

export const addCertificate=(values)=>{
    return adminInstance.post("/addcertificate",{...values})
}

export const addCertificateRequirement=(values)=>{
    return adminInstance.post("/addrequirement",{...values})
}

export const verifyCertificateapi=(userId,certId)=>{
    return adminInstance.post(`/verifyCertificate/${userId}/${certId}`)
}






//GET methods

export const adminHeader=()=>{
    return adminInstance.get("/adminHeader")
}

export const userList=()=>{
    return adminInstance.get("/userList")
}

export const getAllCertificate=()=>{
    return adminInstance.get("/fetchAllCertificate")
}

export const appliedCertificate=()=>{
    return adminInstance.get("/fetchAppliedCert")
}

export const fetchSpecificCert=(Id)=>{
    return adminInstance.get(`/fetchSpecificCert/${Id}`)
}
export const fetchAllComplaints=()=>{
    return adminInstance.get("/fetchallComplaints")
}

export const fetchSpecificComplaint=(id)=>{
    return adminInstance.get(`/fetchSpecificComplaint/${id}`)
}

export const changeComplaintStatus=(id)=>{
    return adminInstance.get(`/changecomplaintstatus/${id}`)
}