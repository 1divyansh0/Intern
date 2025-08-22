import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { validateSignup } from "../utils/validators";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateSignup(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Account created! Redirecting to login...");
      navigate("/");
    }
  };

  return (
    <AuthLayout title="Create new Account">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="NAME"
          name="name"
          value={values.name}
          onChange={onChange}

          error={errors.name}
        />
        <Input
          label="USERNAME"
          name="username"
          value={values.username}
          onChange={onChange}
       
          error={errors.username}
        />
        <Input
          label="EMAIL"
          name="email"
          value={values.email}
          onChange={onChange}
         
          error={errors.email}
        />
        <Input
          label="PHONE NO."
          name="phone"
          value={values.phone}
          onChange={onChange}
        
          error={errors.phone}
        />
        <Input
          label="NEW PASSWORD"
          name="password"
          type={show1 ? "text" : "password"}
          value={values.password}
          onChange={onChange}
     
          error={errors.password}
          rightIcon={<span className="text-sm">{show1 ?<IoEyeSharp  className="text-gray-500"/> :<FaEyeSlash className="text-gray-500"/> }</span>}
          onRightIconClick={() => setShow1((s) => !s)}
        />
        <Input
          label="CONFIRM NEW PASSWORD"
          name="confirm"
          type={show2 ? "text" : "password"}
          value={values.confirm}
          onChange={onChange}
       
          error={errors.confirm}
          rightIcon={<span className="text-sm">{show2 ? <IoEyeSharp  className="text-gray-500"/> :<FaEyeSlash className="text-gray-500"/> }</span>}
          onRightIconClick={() => setShow2((s) => !s)}
        />
        <div className="md:col-span-2">
          <Button type="submit">SIGN UP</Button>
          <p className="text-center text-sm mt-3">
            Already have an Account?{" "}
            <Link to="/" className="link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
