import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errors, doRequest } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label>Email address</label>
        <input
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors}

      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default signup;
