import React, { useEffect } from "react";
import "./AppliedCertView.css";
import { appliedCertificate } from "../../../Services/adminApi";

function AppliedCertView() {
    useEffect(()=>{
        appliedCertificate().then((response)=>{

        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div className="ViewAppliedCertMainpage">
     <h5>Applied Certificate</h5>
     <div className="viewAppliedCert">
        <div>Certificate name</div>
        <div><button className="btn btn-primary">View</button></div>
     </div>
    </div>
  );
}

export default AppliedCertView;
