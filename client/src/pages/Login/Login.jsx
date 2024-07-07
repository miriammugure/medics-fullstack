import React from "react";
import "../Register/Register.css";
import Title from "../../components/Title/Title";
import regiterimg from "../../assets/register.jpg";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
function Login() {
  const validationSchema = Yup.object({
    email: Yup.string("email should be a string")
      .email("email must be valid")
      .required("email is required"),

    password: Yup.string("password must be a string").required(
      "password is required",
    ),
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
        credentials: "include",
      });

      const data = await response.json();
      if (data.success) {
        if (data.data.role === "outpatient") {
          navigate("/Patient");
        } else if (data.data.role === "expectant woman") {
          navigate("/Expectancy");
        }
      } else {
        console.log(data.message);
        setError(data.message);
      }
    } catch (error) {
      console.log(data.message);
      setError(error.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div>
      <div className="registerContainer">
        <div className="formContainer">
          <Title title="log in here" />
          <form
            action=""
            className="registerform"
            onSubmit={formik.handleSubmit}
          >
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

            <button type="submit">log in here</button>
            <p>
              don't have an account?{" "}
              <Link to="/Register" className="linkclass">
                sign up here
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

export default Login;
