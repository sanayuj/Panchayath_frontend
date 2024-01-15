import React, { useEffect, useState } from "react";
import "./AppliedCertView.css";
import { appliedCertificate } from "../../../Services/adminApi";

function AppliedCertView() {
  const [appliedBrithCert, setAppliedBrithCert] = useState([]);
  useEffect(() => {
    appliedCertificate()
      .then((response) => {
        console.log(response.data, "(((");
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
        <div>Certificate name</div>
        <div>
          <button className="btn btn-primary">View</button>
        </div>
      </div>
      ))}
   
    </div>
  );
}

export default AppliedCertView;
