import React, { useState, useContext } from 'react';
import userAuth from '../context/context';
import { useRouter } from 'next/router';

const Login = ({ SingleUserData }) => {
  // console.log(SingleUserData)
  const [UserRegisterDetail, setUserRegisterDetail] = useState({
    Email: '',
    Password: ''
  });
  const [error , setError] = useState(false);
  const { authPermission, setAuthPermission } = useContext(userAuth);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(UserRegisterDetail)
    authenticateUser();
  }

  const handleChange = (e) => {
    setUserRegisterDetail({
      ...UserRegisterDetail,
      [e.target.name]: e.target.value
    })
  }

  const authenticateUser = () => {
    const userdata = SingleUserData.filter(singleUser => (
      UserRegisterDetail.Email === singleUser.Email && UserRegisterDetail.Password === singleUser.Password
    ))
    if (!userdata[0]) {
      console.log("sorry user not found ");
      setError(true)
    } else {
      console.log("yes we found the user");
      setAuthPermission(true)
      router.push('/dashboard')
    }
  }

  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" name="Email" onChange={handleChange} />
        <input placeholder="Password" name="Password" onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
      <p style={{color:'#d63031'}}>{error ? 'Email and password must be correct' : null}</p>
    </div>
  )
}

Login.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return {
    SingleUserData: data
  }
}

export default Login;
