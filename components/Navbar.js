import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import userAuth from '../context/context';
import Link from 'next/link';

const Navbar = () => {
  const { authPermission, setAuthPermission } = useContext(userAuth);
  const router = useRouter();
  return (
    <div className="Navbar">
      <h3>{router.pathname === '/login' ? 'Login' : router.pathname === '/signup' ? 'Sign Up' : router.pathname === '/dashboard' ? 'Dashboard' : router.pathname === '/about' ? 'About Us' : router.pathname === '/' ? 'About Us' : 'Error'}</h3>
      {
        authPermission ? <>
          <Link href="/dashboard">
            <p>dashboard</p>
          </Link>
          <Link href="/about">
            <p>about</p>
          </Link>
        </>
          :
          null
      }
      {
        authPermission ?
          <button onClick={() => { setAuthPermission(false) }}>logout</button>
           :<><Link href={'/login'}>
            <button>login</button>
          </Link></>
      }
    </div>
  )
}

export default Navbar;
