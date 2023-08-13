import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;



const API =  axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-Type": "application/json",
     Accept: "application/json",
    
  },
})

// Signup
export const SignupAPI = (FormData) => API.post("/signup", FormData);

// Login

export const Login =  (FormData) => API.post("/login", FormData);

// Signout

export const Logout = (next) => {

       if(typeof window !== "undefined"){

             localStorage.removeItem("access_token");
             next();
       }

       return API.post("/signout");

}