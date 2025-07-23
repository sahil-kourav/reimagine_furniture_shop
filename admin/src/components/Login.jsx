import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success('Logged in successfully');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-full max-w-sm gap-5"
      >
        <div className="flex items-center gap-2 mt-10 mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
          <hr className="border-none h-[1.5px] w-8 h-0.5 bg-gray-800" />

        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
