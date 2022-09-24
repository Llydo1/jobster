import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isMember } = values;

  const handleChange = (e) => {
    setValues((prevstate) => {
      return { ...prevstate, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) toast.error("please fill");
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Logo />
        <h3>{isMember ? "Login" : "Register"}</h3>
        {isMember ? (
          ""
        ) : (
          <RegisterForm
            name="name"
            value={values.name}
            type="text"
            handleChange={handleChange}
          />
        )}
        <RegisterForm
          name="email"
          value={values.email}
          type="email"
          handleChange={handleChange}
        />
        <RegisterForm
          name="password"
          value={values.password}
          type="password"
          handleChange={handleChange}
        />

        {/* Button section */}
        <button type="submit" className="btn btn-block" onClick={handleSubmit}>
          submit
        </button>
        <button type="button" className="btn btn-block btn-hipster">
          demo app
        </button>
        <p>
          {isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            className="member-btn"
            onClick={() =>
              setValues((prevState) => {
                return { ...prevState, isMember: !prevState.isMember };
              })
            }
          >
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const RegisterForm = ({ name, type, value, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-input"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Register;
