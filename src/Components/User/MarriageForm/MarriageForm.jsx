import React from "react";
import "./MarriageForm.css";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
function MarriageForm() {
  const user = useSelector((state) => state?.user?.value);
  const userId = user?._id;
  const initialValues = {
    dateOfMarriage: "",
    placeOfMarriage: "",
    husName: "",
    husNationality: "",
    wifeAgeProofImghusAgeProofImg: null,
    husbandImg: null,
    husOccupation: "",
    husbandAddress: "",
    husFatherName: "",
    husMotherName: "",
    husPreviousMaritalStatus: "",
    WifeName: "",
    WifeImg: null,
    wifeNationality: "",
    wifeAgeProofImg: "",
    wifeAddress: "",
    wifeFatherName: "",
    wifeMotherName: "",
    wifePreviousMaritalStatus: "",
  };

  const onSubmit = async (values, { resetForm }) => {};
  const validationSchema = Yup.object({
    dateOfMarriage: Yup.date().required("* This field is required"),
    placeOfMarriage: Yup.string().required("* This field is required"),
    witnessName: Yup.string().required("* This field is required"),
    husName: Yup.string().required("* This field is required"),
    husFatherName: Yup.string().required("* This field is required"),
    husMotherName: Yup.string().required("* This field is required"),
    husNationality: Yup.string().required("* This field is required"),
    husPreviousMaritalStatus: Yup.string().required("* This field is required"),
    husAgeProofImg: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        if (value) return value.size <= 8 * 1024 * 1024;
        return true;
      })
      .test("fileFormat", "Invalid file format", (value) => {
        if (value) {
          const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
          return allowedFormats.includes(value.type);
        }
        return true;
      })
      .required("* This field is required"),
    husbandImg: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        if (value) return value.size <= 8 * 1024 * 1024;
        return true;
      })
      .test("fileFormat", "Invalid file format", (value) => {
        if (value) {
          const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
          return allowedFormats.includes(value.type);
        }
        return true;
      })
      .required("* This field is required"),
    husOccupation: Yup.string().required("* This field is required"),
    WifeName: Yup.string().required("* This field is required"),
    WifeImg: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        if (value) return value.size <= 8 * 1024 * 1024;
        return true;
      })
      .test("fileFormat", "Invalid file format", (value) => {
        if (value) {
          const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
          return allowedFormats.includes(value.type);
        }
        return true;
      })
      .required("* This field is required"),
    wifeNationality: Yup.string().required("* This field is required"),
    wifeAgeProofImg: Yup.mixed()
      .test("fileSize", "File size is too large", (value) => {
        if (value) return value.size <= 8 * 1024 * 1024;
        return true;
      })
      .test("fileFormat", "Invalid file format", (value) => {
        if (value) {
          const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
          return allowedFormats.includes(value.type);
        }
        return true;
      })
      .required("* This field is required"),
    wifeAddress: Yup.string().required("* This field is required"),
    wifeFatherName: Yup.string().required("* This field is required"),
    wifeMotherName: Yup.string().required("* This field is required"),
    wifePreviousMaritalStatus: Yup.string().required(
      "* This field is required"
    ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div className="formbold-form-title">
              <center>
                <h2 className="">Marriage Certificate Form</h2>
                <p>Fill the details</p>
              </center>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label for="dateOfMarriage" className="formbold-form-label">
                  Date Of Marriage
                </label>
                <input
                  type="date"
                  name="dateOfMarriage"
                  id="DateOfMarriage"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfMarriage}
                  onChange={formik.handleChange}
                />
                {formik.touched.dateOfMarriage &&
                formik.errors.dateOfMarriage ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.dateOfMarriage}
                  </p>
                ) : null}
              </div>

              <div className="fformbold-mb-3">
                <div>
                  <label for="placeOfMarriage" className="formbold-form-label">
                    Place of Marriage
                  </label>
                  <input
                    type="text"
                    name="placeOfMarriage"
                    id="placeOfMarriage"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.placeOfMarriage}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.placeOfMarriage &&
                formik.errors.placeOfMarriage ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.placeOfMarriage}
                  </p>
                ) : null}
              </div>
            </div>

            <hr />
            <center>
              {" "}
              <p>Husband Details</p>
            </center>
            <hr />

            <div className="fformbold-mb-3">
              <div>
                <label for="name" className="formbold-form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="husName"
                  id="phone"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.husName}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.husName && formik.errors.husName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husName}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="husbandImg" className="formbold-form-label">
                Photo
              </label>
              <input
                type="File"
                name="husbandImg"
                id="husbandImg"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue("husbandImg", event.target.files[0]);
                }}
              />
              {formik.touched.husbandImg && formik.errors.husbandImg ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husbandImg}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="Nationality" className="formbold-form-label">
                Nationality
              </label>
              <input
                type="text"
                name="husNationality"
                id="husNationality"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.husNationality}
                onChange={formik.handleChange}
              />
              {formik.touched.husNationality && formik.errors.husNationality ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husNationality}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="husAgeProofImg" className="formbold-form-label">
                Age proof
              </label>
              <input
                type="File"
                name="husAgeProofImg"
                id="husAgeProofImg"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue("husAgeProofImg", event.target.files[0]);
                }}
              />
              {formik.touched.husAgeProofImg && formik.errors.husAgeProofImg ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husAgeProofImg}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="husOccupation" className="formbold-form-label">
                Occupation
              </label>
              <input
                type="text"
                name="husOccupation"
                id="husOccupation"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.husOccupation}
                onChange={formik.handleChange}
              />
              {formik.touched.husOccupation && formik.errors.husOccupation ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husOccupation}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="address" className="formbold-form-label">
                Address
              </label>
              <textarea
                type="text"
                name="husbandAddress"
                id="husbandAddress"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.husbandAddress}
                onChange={formik.handleChange}
              />
              {formik.touched.husbandAddress && formik.errors.husbandAddress ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husbandAddress}
                </p>
              ) : null}
            </div>
            <div className="formbold-mb-3">
              <label for="husFatherName" className="formbold-form-label">
                Father's Name
              </label>
              <input
                type="text"
                name="husFatherName"
                id="husFatherName"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.husFatherName}
                onChange={formik.handleChange}
              />
              {formik.touched.husFatherName && formik.errors.husFatherName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husFatherName}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="husMotherName" className="formbold-form-label">
                Mother's Name
              </label>
              <input
                type="text"
                name="husMotherName"
                id="husMotherName"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.husMotherName}
                onChange={formik.handleChange}
              />
              {formik.touched.husMotherName && formik.errors.husMotherName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husMotherName}
                </p>
              ) : null}
            </div>
            <div className="formbold-mb-3">
              <label
                htmlFor="husPreviousMaritalStatus"
                className="formbold-form-label"
              >
                Previous Marital Status
              </label>
              <select
                name="husPreviousMaritalStatus"
                id="husPreviousMaritalStatus"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.husPreviousMaritalStatus}
                onChange={formik.handleChange}
              >
                <option value="" label="Select One" />
                <option value="single" label="Single" />
                <option value="married" label="Married" />
                <option value="divorced" label="Divorced" />
                <option value="widowed" label="Widowed" />
              </select>
              {formik.touched.husPreviousMaritalStatus &&
              formik.errors.husPreviousMaritalStatus ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.husPreviousMaritalStatus}
                </p>
              ) : null}
            </div>

            <hr />
            <center>
              <p>Wife's Details</p>
            </center>
            <hr />

            <div className="fformbold-mb-3">
              <div>
                <label for="WifeName" className="formbold-form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="WifeName"
                  id="WifeName"
                  className="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.WifeName}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.WifeName && formik.errors.WifeName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.WifeName}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="WifeImg" className="formbold-form-label">
                Photo
              </label>
              <input
                type="File"
                name="WifeImg"
                id="WifeImg"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue("WifeImg", event.target.files[0]);
                }}
              />
              {formik.touched.WifeImg && formik.errors.WifeImg ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.WifeImg}
                </p>
              ) : null}
            </div>
            <div className="formbold-mb-3">
              <label for="Nationality" className="formbold-form-label">
                Nationality
              </label>
              <input
                type="text"
                name="wifeNationality"
                id="wifeNationality"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.wifeNationality}
                onChange={formik.handleChange}
              />
              {formik.touched.wifeNationality &&
              formik.errors.wifeNationality ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.wifeNationality}
                </p>
              ) : null}
            </div>
            <div className="formbold-mb-3">
              <label for="wifeAgeProofImg" className="formbold-form-label">
                Age proof
              </label>
              <input
                type="File"
                name="wifeAgeProofImg"
                id="wifeAgeProofImg"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  formik.setFieldValue(
                    "wifeAgeProofImg",
                    event.target.files[0]
                  );
                }}
              />
              {formik.touched.wifeAgeProofImg &&
              formik.errors.wifeAgeProofImg ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.wifeAgeProofImg}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label for="address" className="formbold-form-label">
                Address
              </label>
              <textarea
                type="text"
                name="wifeAddress"
                id="wifeAddress"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.wifeAddress}
                onChange={formik.handleChange}
              />
              {formik.touched.wifeAddress && formik.errors.wifeAddress ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.wifeAddress}
                </p>
              ) : null}
            </div>
            <div className="formbold-mb-3">
              <label for="wifeFatherName" className="formbold-form-label">
                Father's Name
              </label>
              <input
                type="text"
                name="wifeFatherName"
                id="wifeFatherName"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.wifeFatherName}
                onChange={formik.handleChange}
              />
              {formik.touched.wifeFatherName && formik.errors.wifeFatherName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.wifeFatherName}
                </p>
              ) : null}
            </div>
            <div className="formbold-mb-3">
              <label for="wifeMotherName" className="formbold-form-label">
                Mother's Name
              </label>
              <input
                type="text"
                name="wifeMotherName"
                id="wifeMotherName"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.wifeMotherName}
                onChange={formik.handleChange}
              />
              {formik.touched.wifeMotherName && formik.errors.wifeMotherName ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.wifeMotherName}
                </p>
              ) : null}
            </div>

            <div className="formbold-mb-3">
              <label
                htmlFor="wifePreviousMaritalStatus"
                className="formbold-form-label"
              >
                Previous Marital Status
              </label>
              <select
                name="wifePreviousMaritalStatus"
                id="wifePreviousMaritalStatus"
                className="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.wifePreviousMaritalStatus}
                onChange={formik.handleChange}
              >
                <option value="" label="Select One" />
                <option value="single" label="Single" />
                <option value="married" label="Married" />
                <option value="divorced" label="Divorced" />
                <option value="widowed" label="Widowed" />
              </select>
              {formik.touched.wifePreviousMaritalStatus &&
              formik.errors.wifePreviousMaritalStatus ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.wifePreviousMaritalStatus}
                </p>
              ) : null}
            </div>

            <button type="submit" className="formbold-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MarriageForm;
