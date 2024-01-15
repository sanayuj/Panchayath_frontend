import React, { useEffect, useState } from "react";
import "./AppliedCertView.css";
import { appliedCertificate } from "../../../Services/adminApi";
import { useNavigate } from "react-router-dom";

function AppliedCertView() {
  const [appliedBrithCert, setAppliedBrithCert] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    appliedCertificate()
      .then((response) => {
        console.log(response.data.data, "(((");
        if (response.data.status) {
          setAppliedBrithCert(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="ViewAppliedCertMainpage">
      <h5>Applied Certificate</h5>
      {appliedBrithCert.map((values)=>(
        <div className="viewAppliedCert">
        <div>{values.certName}</div>
        <div>
        <span className="dateView">Applied date : {new Date(values.date).toLocaleDateString("en-GB")}</span>
          <button className="btn btn-primary"onClick={()=>{
            navigate("/admin/viewCertDetails")
          }} >View</button>
        </div>
      </div>
      ))}
   
    </div>
  );
}

export default AppliedCertView;
