import React from "react";
import { useState } from "react";
import "./Register.css";
import Title from "../../components/Title/Title";
import regiterimg from "../../assets/register.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    firstName: Yup.string("name must be a string").required(
      "first name is required",
    ),
    lastName: Yup.string("name must string").required("last name is required"),
    email: Yup.string("email should be a string")
      .email("email must be valid")
      .required("email is required"),

    password: Yup.string("password must be a string")
      .required("password is required")
      .min(8, "password must be atleast 8 characters long"),

    role: Yup.string("role must be a string").required("role is required"),
  });
  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (data.success === true) {
        navigate("/Login");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log("Error:", error.message);
      setError(error.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });
  return (
    <div>
      <div className="registerContainer">
        <div className="formContainer">
          <Title title="register here" />
          <form
            action=""
            className="registerform"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="firstName">first name:</label>
            <input
              type="text"
              placeholder="john"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p>{formik.errors.firstName}</p>
            )}
            <label htmlFor="lastName">last name:</label>
            <input
              type="text"
              placeholder="doe"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p>{formik.errors.lastName}</p>
            )}

            <label htmlFor="email">email:</label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}

            <label htmlFor="phoneNumber">phone number:</label>
            <input
              type="text"
              placeholder="011045678"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p>{formik.errors.phoneNumber}</p>
            )}

            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}

            <div className="selectdropdown">
              <p>Who are you:</p>
              <select
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" label="Select role" />
                <option value="outpatient" label="Outpatient" />
                <option value="expectant" label="Expectant woman" />
              </select>
            </div>
            {formik.touched.role && formik.errors.role && (
              <p>{formik.errors.role}</p>
            )}

            <button type="submit">register here</button>
            <p>
              already have an account?{" "}
              <Link to="/Login" className="linkclass">
                sign in here
              </Link>
            </p>
          </form>
          <p>{error}</p>
        </div>
        <div className="registerIMg">
          <img
            src={regiterimg}
            alt="an animated image of a doctor and a patient"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
