import React, { useEffect, useState } from "react";
import "./ViewMarriageCert.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMarriageCert } from "../../../Services/userApi";
import html2pdf from "html2pdf.js";

function ViewMarriageCert() {
  const [certDetails, setCertDetails] = useState([]);
  const certId = useParams().id;
  const user = useSelector((state) => state?.user?.value);
  useEffect(() => {
    getMarriageCert(certId, user?._id)
      .then((response) => {
        if (response.data.status) {
          console.log(response.data.data, "+++++++");
          setCertDetails(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [certId, user?._id]);

  //code for downloading this page

  const handleDownload = () => {
    const element = document.getElementById("ViewMarriageCertMainDivOne");
    const waitForImages = new Promise((resolve, reject) => {
      const images = element.getElementsByTagName("img");
      let loadedCount = 0;

      const checkAllImagesLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          resolve();
        }
      };

      for (let i = 0; i < images.length; i++) {
        images[i].onload = checkAllImagesLoaded;
      }
    });

    waitForImages.then(() => {
      html2pdf().from(element).save();
    });
  };

  return (
    <div id="ViewMarriageCertMainDivOne" className="ViewMarriageCertMainDivOne">
      {" "}
      <div id="mainMarriageCert" className="mainMarriageCert">
        <span>Key No.{certId}</span>
        <div class="certHeading">
          <div class="LogoImg">
            <img
              class="govImageLogo"
              src="https://gad.kerala.gov.in/sites/default/files/inline-images/kerala%20final%20emblem_0.jpg"
            />
          </div>
          <div class="centerContent">
            <h5>
              <strong>FORM No.IV</strong>
            </h5>
            <span class="rulePara">
              <em>[See Rule 11(1)]</em>
            </span>
            <h5>
              <strong>GOVERNMENT OF KERALA</strong>
            </h5>
            <h5>DEPARTMENT OF PANCHAYATH</h5>
            <h5>
              <strong>CERTIFICATE OF MARRIAGE</strong>
            </h5>
          </div>
          <div>{""}</div>
        </div>

        <p className="mb-4">
          <center>
            [Issused under rule 11 (1) of the Kerala Registration of Marriage
            (Common) Rule,2008]
          </center>
        </p>
        {certDetails.map((values) => (
          <div>
            <div className="firstPart">
              <div>
                <p>
                  This is to certify that the following information has been
                  taken from the Register of Marriages(Common) maintained in
                  Form No. III in the Office of the Local Register of{" "}
                  {values.placeOfMarriage}.{" "}
                </p>
                <p>1. Date of Marriage :{values.dateOfMarriage}</p>
                <p>2. Place of Marriage :{values.placeOfMarriage}</p>
                <p>
                  3. Details of Parties to the Marriage (as on the date of
                  marriage)
                </p>
              </div>
            </div>
            <table className="certificateInfo">
              <tbody>
                <>
                  <tr key={values._id}>
                    <th>Details</th>
                    <th>Husband</th>
                    <th>Wife</th>
                  </tr>
                  <tr key={values._id}>
                    <th>DOB:</th>
                    <td>{values.husbandDOB}</td>
                    <td>{values.wifeDOB}</td>
                  </tr>
                  <tr key={values._id}>
                    <th>Name:</th>
                    <td>{values.husbandName}</td>
                    <td>{values.wifeName}</td>
                  </tr>
                  <tr key={values._id}>
                    <th>Nationality:</th>
                    <td>{values.husbandNationality}</td>
                    <td>{values.husbandNationality}</td>
                  </tr>
                  <tr key={values._id}>
                    <th>Previous Marital Status:</th>
                    <td>{values.husMaritalStatus}</td>
                    <td>{values.wifeMaritalStatus}</td>
                  </tr>
                  <tr key={values._id}>
                    <th>Photo:</th>
                    <td>
                      <img
                        className="husbandImg"
                        src={`http://localhost:4000/img/${values.husbandImage}`}
                        alt="Husband"
                      />
                    </td>
                    <td>
                      <img
                        className="husbandImg"
                        src={`http://localhost:4000/img/${values.wifeImage}`}
                        alt="Husband"
                      />
                    </td>
                  </tr>
                </>
              </tbody>
            </table>
            <div className="bottomPart">
              <p>
                Date of Issue : {new Date(values.date).toLocaleDateString()}
              </p>
              <p>
                Local Register : Local Register of Marriages(Common),
                {values.placeOfMarriage}
              </p>
              <p>QR Code</p>
              <center>
                This certificate is computer generated and not require any
                Seal/Signature in original.Software developed and sucpported by
                sanay.
              </center>
            </div>

            
          </div>
        ))}
      </div>
      <div className="btnDiv">
              <button className="btn btn-primary mb-5" onClick={handleDownload}>
                <strong>
                  Downlaod <i class="bi bi-file-earmark-arrow-down-fill"></i>
                </strong>
              </button>
            </div>
    </div>
  );
}

export default ViewMarriageCert;
