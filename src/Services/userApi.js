import { userInstance } from "../Axios/axiosInstanace";

//POST METHODS

export const userSignup = (values) => {
  return userInstance.post("/signup", { ...values });
};

export const userLogin = (values) => {
  return userInstance.post("/login", { ...values });
};

export const sendComplaint = (values) => {
  console.log(values, "!!");
  return userInstance.post(
    "/sendcomplaint",
    { ...values },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};

//GET METHODS

export const userHeader = () => {
  return userInstance.get("/userheader");
};
