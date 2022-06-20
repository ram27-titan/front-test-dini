import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="login">
      <div>
        <p className="relative w-[120px] top-5 left-5  text-white text-2xl font-bold ">City News</p>
      </div>
      <div className="w-[430px] bg-[rgba(0,0,0,0.75)] rounded-lg mx-auto mt-[140px] p-4 px-8 ">
        <div>
          <h1 className="text-white text-3xl font-bold py-4 pb-7 ">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className="w-full mb-4 h-12 rounded-md p-2 text-white bg-[#333] " />
            </div>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className="w-full mb-10 h-12 rounded-md p-2 text-white bg-[#333] " />
            {error && <div>{error}</div>}
            <div className="text-center">
              <button type="submit" className="bg-[#e50914] p-2 w-full text-white text-lg font-bold rounded-lg  hover:bg-white hover:text-[#e50914] duration-300 ">
                Sing In
              </button>
            </div>
          </form>
          <div className="flex items-center mt-[40px] ml-2  mb-20 ">
            <h1 className="text-slate-400 text-[14px] mr-[3px] ">New to City News?</h1>
            <Link to="/signup">
              <button type="button" className="text-white text-[14px] ">
                Sign Up Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
