import React, { useEffect, useState } from "react";
import "./CertDetails.css";
import { getCertificateDetails } from "../../../Services/userApi";
import { useNavigate, useParams } from "react-router-dom";
function CertDetails() {
  const navigate=useNavigate()
  const [certReqDetails, setCertReqDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getCertificateDetails(id).then((res) => {
      if (res.data.status) {
        setCertReqDetails(res.data.certDetails);
      }
    });
  }, [id]);

  useEffect(() => {
  }, [certReqDetails]);

  return (
    <div className="mainDivCertDetails">
      {certReqDetails.length > 0 &&
        certReqDetails.map((value, index) => (
          <div key={index}>
            <h3 className="reqHead">{value.certificateName}</h3>
            <p className="requireList">Required Details:</p>
            <ul>
              {value.Requirements.split(',').map((requirement, i) => (
                <li key={i}>{requirement.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
       <button className="ApplyBtn" onClick={()=>{navigate("/brithForm")}}>Apply</button>
    </div>
  );
}

export default CertDetails;
