import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLoginData } from "../redux/feature/authLoginSlice";

export default function Login() {
   const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { loading, error } = useSelector((state) => state.auth); // optional loading/error state

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setFormError("Both fields are required");
      return;
    }

    try {
      const result = await dispatch(postLoginData(formData)).unwrap();
      console.log("Login success:", result);

      if (result?.token) {
        // Save token or user info if needed
        navigate("/dashboard"); // redirect to dashboard or homepage
      } else {
        setFormError(result.message || "Login failed");
      }
    } catch (err) {
      setFormError("Invalid email or password");
    }
  };
  return (
  <div className="flex w-full h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#c7c4f3] flex flex-col justify-center items-center px-10">
         <h1 className="text-3xl font-semibold text-white mb-4 text-center">
          Plan. Collaborate. Deliver — All in One Place.
        </h1>
        <p className="text-black text-lg text-center mb-6">
          Streamline your workflow and keep your team aligned<br />with our powerful project management platform.
        </p>
        <img
          src="src/assets/login.png"
          alt="Project Dashboard"
          className="w-[80%] rounded shadow"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-semibold text-[#B084F9] mb-6">Log in</h2>
       
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      {formError && <p className="text-red-500 mb-4">{formError}</p>}
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-600 mb-1">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#B084F9]"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-600 mb-1">
          Password
        </label>
        <input
          name="password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#B084F9]"
          required
        />
      </div>
      <button
        type="submit"
        // disabled={loading}
        className="mt-4 w-full bg-white border border-[#B084F9] text-[#B084F9] rounded-md py-2 font-semibold hover:bg-[#B084F9] hover:text-white transition"
      >
        {/* {loading ? "Logging in..." : "Log in"} */}
      Login
      </button>
    </form>

        <p className="text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#B084F9] font-medium hover:underline">Sign up here</a>
        </p>
      </div>
    </div>
  );
}
