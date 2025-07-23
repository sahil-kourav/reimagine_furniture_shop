import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedMobile = mobileNumber.trim();

    if (!trimmedEmail || !trimmedPassword || (currentState === "Sign Up" && !trimmedName)) {
      toast.error("Please fill in all the fields!");
      return;
    }

    if (currentState === "Sign Up") {
      if (!trimmedMobile || !/^[6-9]\d{9}$/.test(trimmedMobile)) {
        toast.error("Please enter a valid 10-digit Indian mobile number");
        return;
      }
    }

    try {
      const endpoint = currentState === "Sign Up" ? "/register" : "/login";
      const payload =
        currentState === "Sign Up"
          ? { name: trimmedName, email: trimmedEmail, mobileNumber: trimmedMobile, password: trimmedPassword }
          : { email: trimmedEmail, password: trimmedPassword };

      const response = await axios.post(`${backendUrl}/api/user${endpoint}`, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(currentState === "Sign Up" ? "Account created" : "Logged in successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center w-[90%] sm:max-w-md mx-auto py-20 gap-6 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 mb-6 mt-10"
      >
        <p className="prata-regular font-bold text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </motion.div>

      <AnimatePresence mode="wait">
        {currentState === "Sign Up" && (
          <motion.div
            key="fullname"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <TextField
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              sx={{ "& input": { paddingY: "14px" } }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        className="w-full"
      >
        <TextField
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          fullWidth
          sx={{ "& input": { paddingY: "14px" } }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {currentState === "Sign Up" && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              type="text"
              inputProps={{ maxLength: 10 }}
              required
              fullWidth
              sx={{ "& input": { paddingY: "14px" } }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full"
      >
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          fullWidth
          sx={{ "& input": { paddingY: "14px" } }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full text-sm text-left"
      >
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Don't have an account? <span className="font-medium">Create one</span>
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Already have an account? <span className="font-medium">Login</span>
          </p>
        )}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        type="submit"
        className="w-full bg-black text-white font-medium tracking-wide py-2.5 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
      >
        {currentState === "Login" ? "Sign In →" : "Sign Up →"}
      </motion.button>
    </motion.form>
  );
};

export default Login;
