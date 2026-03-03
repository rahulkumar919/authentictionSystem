import SignUp from "../src/Component/SignUp";

const backendDomain = "http://localhost:8080";


const summryApi = {
  signup: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  verifyOtp: {
    url: `${backendDomain}/api/verify-otp`,
    method: "post",
  },
  Login: {
    url: `${backendDomain}/api/login`,
    method: "post",
  },
};

export default summryApi;
