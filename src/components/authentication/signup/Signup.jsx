import { useState } from "react";
import { Login, SignupAPI } from "../../../api/api";
import { authenticate, isAuthenticated } from "../../../helper/auth";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    loading: false,
    didRedirect: false,
    error: "",
  });

  const { user } = isAuthenticated();

  const { email, password } = values;

  const handleChange = (name) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setValues({ ...values, error: false, loading: true });

      const data = {
        email,
        password,
      };

      const resp = await Login(data);

      console.log(resp, "this is resp");q

      if (resp.data.err) {
        setValues({ ...values, error: true, loading: false });
      } else {
        authenticate(resp.data, () => {
          setValues({ ...values, loading: false, error: false });
        });
      }
    } catch (err) {
      setValues({ ...values, error: true, loading: false });
      console.log(err);
    }

    // console.log(response, "login response");

    //    Call authenticqate here is success
    // if(error){

    // }else {
    //     authenticate(data, () => {

    //     })
    // }
  };

  return (
    <>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={() => handleChange("email")}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={() => handleChange("password")}
        />
        <br />
        {/* <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
        <br />
        {/* <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      /> */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
