import React, { useEffect,useState } from "react";
import "./ViewMarriageCert.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMarriageCert } from "../../../Services/userApi";
function ViewMarriageCert() {
  const [certDetails, setCertDetails] = useState([]);
  const certId = useParams().id;
  const user = useSelector((state) => state?.user?.value);
  useEffect(() => {
    getMarriageCert(certId, user?._id)
      .then((response) => {
        if (response.data.status) {
            console.log(response.data.data,"+++++++");
            setCertDetails(response.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div className="ViewMarriageCertMainDiv">ViewMarriageCert</div>;
}

export default ViewMarriageCert;
