import React, { useEffect, useState } from "react";
import "./CertDetails.css";
import { getCertificateDetails } from "../../../Services/userApi";
import { useParams } from "react-router-dom";
function CertDetails() {
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
          <>
            <h3 className="reqHead">{value.certificateName}</h3>
            <p className="requireList">Required Details : </p>
            <p >{value.Requirements}</p>
          </>
        ))}
    </div>
  );
}

export default CertDetails;
