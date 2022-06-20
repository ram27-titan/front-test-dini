import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/users';
      const { data: res } = await axios.post(url, data);
      navigate('/login');
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="signup">
      <div className=" flex items-center justify-between  ">
        <div>
          <p className="w-[120px] ml-4 mt-5 text-white text-2xl font-bold ">City News</p>
        </div>
        <div>
          <Link to="/login">
            <button className="text-white bg-[#e50914] p-2 px-4 mt-5 rounded-md mr-4  hover:bg-white hover:text-[#e50914] duration-300 " type="button">
              Sing in
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-[430px] bg-[rgba(0,0,0,0.75)] mx-auto p-5 px-8 mt-[110px]  rounded-lg">
        <div>
          <h1 className="text-white text-2xl font-bold py-5 ">Create Account</h1>
          <form className="text-black" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required className="w-full h-12 bg-[#333] text-white rounded-md p-2 mb-4 " />
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={data.lastName} required className="w-full h-12 bg-[#333] text-white rounded-md p-2 mb-4 " />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className="w-full h-12 bg-[#333] text-white rounded-md p-2 mb-4 " />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className="w-full h-12 bg-[#333] text-white rounded-md p-2 mb-4 " />
            {<div className="text-white">{error}</div>}
            <button className="text-white text-lg font-bold bg-[#e50914] p-2 w-full mt-7 mb-16 hover:bg-white hover:text-[#e50914] duration-300 rounded-lg " type="submit">
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
