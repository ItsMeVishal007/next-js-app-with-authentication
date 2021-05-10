import React, { useState , useContext } from 'react';
import userAuth from '../context/context';
import {useRouter} from 'next/router'

const Signup = () => {
  const [UserRegisterDetail, setUserRegisterDetail] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: ''
  })
  const { authPermission, setAuthPermission } = useContext(userAuth);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserRegisterDetail)
    registerUser();
  }

  const handleChange = (e) => {
    setUserRegisterDetail({
      ...UserRegisterDetail,
      [e.target.name]: e.target.value
    })
  }

  const registerUser = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(UserRegisterDetail)
      })
      setAuthPermission(true)
      router.push('/dashboard')
    } catch (error) {
      console.log('Sorry data is not registering ', error)
    }
  }

  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <input placeholder="FirstName" name="FirstName" onChange={handleChange} />
        <input placeholder="LastName" name="LastName" onChange={handleChange} />
        <input placeholder="Email" name="Email" onChange={handleChange} />
        <input placeholder="Password" name="Password" onChange={handleChange} />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Signup;
