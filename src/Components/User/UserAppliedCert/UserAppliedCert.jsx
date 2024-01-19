import React, { useEffect, useState } from 'react'
import "./UserAppliedCert.css"
import { useSelector } from 'react-redux';
import { getUserAppliedCert } from '../../../Services/userApi';
import { useNavigate } from 'react-router-dom';

function UserAppliedCert() {
  const navigate=useNavigate()
    const [certStatus,setCertStatus]=useState([])
    const user = useSelector((state) => state.user.value);
    useEffect(()=>{
        getUserAppliedCert(user?._id).then((response)=>{
            console.log(response.data);
            if(response.data.status){
                console.log(response.data.data);
        setCertStatus(response.data.data)
            }

        })

    },[])
  return (
    <div className='certStatusMainDiv'>
 <h5 className='mb-4'>Applied Certificates</h5>

 {certStatus.map((value)=>(
    <div className='certDetailsDiv mb-3'>
            <div className='statusCertName'>Certificate Name : {value.certName} </div>
            <div>Status : {value.certStatus ? 'Success' : 'Pending'}</div>
            
          
           <div>
            {value.certStatus ? (<button onClick={()=>navigate(`/brithCertView/${value._id}`)} className='btn btn-primary'>
            View 
          </button>) : ""} </div>
          
        </div>
 ))}
       
    </div>
  )
}

export default UserAppliedCert