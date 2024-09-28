/** @format */

import React, { useEffect } from "react";
import { NavLink, useParams, useHistory, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/actions/APIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const _login = (formData) => {
    dispatch(userSignup(formData));
  };
  const { responseError } = useSelector((state) => state.collections);
  useEffect(() => {
    if (responseError) {
      toast.error("Incorrect Username or Password", {
        position: "top-center",
        autoClose: "50000",
      });
    }
  }, [responseError]);

  console.log(responseError, "wait...");
  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <ToastContainer />
      <div className="authentication-inner row">
        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            <img
              src="./img/illustrations/auth-login-illustration-light.png"
              alt="auth-login-cover"
              className="img-fluid my-5 auth-illustration"
              data-app-light-img="illustrations/auth-login-illustration-light.png"
              data-app-dark-img="illustrations/auth-login-illustration-dark.html"
            />

            <img
              src="./img/illustrations/bg-shape-image-light.png"
              alt="auth-login-cover"
              className="platform-bg"
              data-app-light-img="illustrations/bg-shape-image-light.png"
              data-app-dark-img="illustrations/bg-shape-image-dark.html"
            />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <NavLink to={"/"} className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                  <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0"
                    />
                    <path
                      opacity="0.06"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                    />
                    <path
                      opacity="0.06"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0"
                    />
                  </svg>
                </span>
              </NavLink>
            </div>

            <h3 className="mb-1">
              Welcome to <span className="">Soni Hostel!</span> 👋
            </h3>
            <p className="mb-4">
              Please sign-in to your account and start the adventure
            </p>

            <form
              id="formAuthentication"
              className="mb-3"
              action="#"
              method="POST"
              onSubmit={handleSubmit(_login)}
            >
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email or Username
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email or username"
                  autofocus
                  autoComplete="false"
                />
                {errors?.email?.message}
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" for="password">
                    Password
                  </label>
                  <a href="/dashboard">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                  />
                  <span className="input-group-text cursor-pointer">
                    <i className="ti ti-eye-off"></i>
                  </span>
                </div>
                {errors?.password?.message}
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="form-check-label" for="remember-me">
                    Remember Me
                  </label>
                </div>
              </div>
              <button className="btn btn-primary d-grid w-100">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
