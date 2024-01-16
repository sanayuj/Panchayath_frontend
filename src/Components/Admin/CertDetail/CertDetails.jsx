// CertDetails.js

import React, { useEffect, useState } from "react";
import "./CertDetails.css";

import { useParams } from "react-router-dom";
import {
  fetchSpecificCert,
  verifyCertificateapi,
} from "../../../Services/adminApi";
import { toast } from "react-toastify";

function CertDetails() {
  const verifyCertificate = async (userId, certId) => {
    const verifyData = await verifyCertificateapi(userId, certId);
    if (verifyData.data.status) {
      toast.success(verifyData.data.message);
    } else {
      toast.error("Unable to verify");
    }
  };
  const certId = useParams().certId;
  const [certificate, setCertificate] = useState([]);

  useEffect(() => {
    fetchSpecificCert(certId)
      .then((response) => {
        console.log(response.data.certificateDetails);
        setCertificate(response.data.certificateDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <div>
              <div className="formbold-form-title">
                <center>
                  <h2 className="">Certificate Details</h2>
                  <p>Details of applied certificate</p>
                  <hr></hr>
                  <p>Applicant Details</p>
                  <hr></hr>
                </center>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Name :</label>
                  <div className="formbold-form-text">
                    {certificate?.userId?.username}
                  </div>
                </div>

                <div className="fformbold-mb-3">
                  <div>
                    <label className="formbold-form-label">DOB :</label>
                    <div className="formbold-form-text">{certificate?.dob}</div>
                  </div>
                </div>
              </div>

              <div className="fformbold-mb-3">
                <div>
                  <label className="formbold-form-label">
                    Name of Father :{" "}
                  </label>
                  <div className="formbold-form-text">
                    {certificate?.nameOfFather}
                  </div>
                </div>
              </div>

              <div className="fformbold-mb-3 mt-3">
                <div>
                  <label className="formbold-form-label">
                    Name of Mother :{" "}
                  </label>
                  <div className="formbold-form-text">
                    {certificate?.nameOfMother}
                  </div>
                </div>
              </div>

              <div className="formbold-mb-3 mt-3">
                <label className="formbold-form-label">Address : </label>
                <div className="formbold-form-textarea">
                  {certificate?.address}
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">State :</label>
                  <div className="formbold-form-text">{certificate?.state}</div>
                </div>

                <div>
                  <label className="formbold-form-label">Pin Code :</label>
                  <div className="formbold-form-text">{certificate?.post}</div>
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">
                    Birth location :
                  </label>
                  <div className="formbold-form-text">
                    {certificate?.brithLocation}
                  </div>
                </div>

                <div>
                  <label className="formbold-form-label">Applied Date :</label>
                  <div className="formbold-form-text">{certificate?.date}</div>
                </div>
              </div>

              <hr></hr>
              <center>
                <p>Respondent Details</p>
              </center>
              <hr></hr>

              <div className="fformbold-mb-3">
                <div>
                  <label className="formbold-form-label">
                    Respondent Name :
                  </label>
                  <div className="formbold-form-text">
                    {certificate?.userId?.username}
                  </div>
                </div>

                <div className="fformbold-mb-3 mt-3">
                  <div>
                    <label className="formbold-form-label">
                      Respondent Email :
                    </label>
                    <div className="formbold-form-text">
                      {certificate?.userId?.email}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  verifyCertificate(certificate?.userId?._id, certificate._id);
                }}
                className="mt-4 btn btn-primary"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertDetails;
