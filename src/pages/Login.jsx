import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { validateLogin } from "../utils/validators";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateLogin(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Logged in successfully!");
    }
  };

  return (
    <AuthLayout title="Login" subtitle="Sign in to continue">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
        <Input
          label="USERNAME"
          name="username"
          value={values.username}
          onChange={onChange}
          placeholder="Enter username or email"
          error={errors.username}
        />
        <Input
          label="NEW PASSWORD"
          name="password"
          type={show ? "text" : "password"}
          value={values.password}
          onChange={onChange}
          placeholder="Enter your password"
          error={errors.password}
          rightIcon={<span className="text-sm">{show ? <IoEyeSharp  className="text-gray-500"/> :<FaEyeSlash className="text-gray-500"/> }</span>}
          onRightIconClick={() => setShow((s) => !s)}
        />
        <Button type="submit">LOGIN</Button>
        <p className="text-center text-sm">
          Don&apos;t have Account?{" "}
          <Link to="/signup" className="link">
            SignUp
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
