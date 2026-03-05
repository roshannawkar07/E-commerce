import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Dot Matrix Background - Light Gray */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e5e5 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      ></div>

      {/* Glyph Interface Lines - Dark Gray */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gray-300"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gray-300"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gray-300"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gray-300"></div>

      {/* Diagonal Lines - Light Gray */}
      <div className="absolute top-20 left-20 w-px h-40 bg-gray-200 rotate-45"></div>
      <div className="absolute top-20 right-20 w-px h-40 bg-gray-200 -rotate-45"></div>

      <form
        onSubmit={onSubmitHandler}
        className="relative w-full max-w-md bg-white p-8 flex flex-col gap-5 border border-gray-200 shadow-xl"
      >
        {/* Glyph Corner Elements - Dark Gray */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gray-400"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gray-400"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gray-400"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gray-400"></div>

        {/* Dot Grid Pattern Inside Form - Light Gray */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="text-center relative">
          <h2 className="text-3xl font-light tracking-wider text-gray-900 uppercase">
            {currentState === "Login" ? "Login." : "Create."}
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto my-3"></div>
          <p className="text-gray-400 text-xs tracking-wider uppercase">
            {currentState === "Login"
              ? "Enter your credentials"
              : "Fill in your details"}
          </p>
        </div>

        <div className="relative space-y-4 mt-4">
          {currentState === "Sign Up" && (
            <div className="relative group">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full bg-transparent text-gray-900 px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-all duration-300 text-sm tracking-wider placeholder-gray-400"
                placeholder="FULL NAME"
                required
              />
              <div className="absolute inset-0 border border-gray-200/0 group-focus-within:border-gray-300 pointer-events-none"></div>
            </div>
          )}

          <div className="relative group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full bg-transparent text-gray-900 px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-all duration-300 text-sm tracking-wider placeholder-gray-400"
              placeholder="EMAIL ADDRESS"
              required
            />
            <div className="absolute inset-0 border border-gray-200/0 group-focus-within:border-gray-300 pointer-events-none"></div>
          </div>

          <div className="relative group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full bg-transparent text-gray-900 px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-all duration-300 text-sm tracking-wider placeholder-gray-400"
              placeholder="PASSWORD"
              required
            />
            <div className="absolute inset-0 border border-gray-200/0 group-focus-within:border-gray-300 pointer-events-none"></div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-500 tracking-wider mt-2">
          <span className="cursor-pointer hover:text-gray-900 transition-colors">
            FORGOT?
          </span>

          {currentState === "Login" ? (
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer hover:text-gray-900 transition-colors"
            >
              CREATE
            </span>
          ) : (
            <span
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer hover:text-gray-900 transition-colors"
            >
              LOGIN
            </span>
          )}
        </div>

        <button
          type="submit"
          className="relative w-full bg-gray-900 text-white py-3 border border-gray-900 hover:bg-gray-800 transition-all duration-300 text-sm tracking-widest uppercase overflow-hidden group"
        >
          <span className="relative z-10">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </span>

          {/* Glyph Animation */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 group-hover:border-white/60 transition-all duration-300"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 group-hover:border-white/60 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 group-hover:border-white/60 transition-all duration-300"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 group-hover:border-white/60 transition-all duration-300"></div>
        </button>

        {/* Glyph Indicator Dots - Gray Scale */}
        <div className="flex justify-center space-x-2 mt-2">
          <div className="w-1 h-1 bg-gray-400"></div>
          <div className="w-1 h-1 bg-gray-300"></div>
          <div className="w-1 h-1 bg-gray-200"></div>
          <div className="w-1 h-1 bg-gray-300"></div>
          <div className="w-1 h-1 bg-gray-400"></div>
        </div>
      </form>

      {/* Bottom Glyph Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-gray-300 text-[8px] tracking-[0.5em] uppercase">
        NOTHING
      </div>
    </div>
  );
};

export default Login;
