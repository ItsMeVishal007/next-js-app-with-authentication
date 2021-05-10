import React, { useContext } from 'react';
import userAuth from '../context/context';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Dashboard = () => {
  const router = useRouter();
  const { authPermission, setAuthPermission } = useContext(userAuth);
  return (
    <div>
      {authPermission ? <p>This is the Dashboard page</p> : <>
        <h4>Please Login To access the data of this page</h4>
        <Link href="/login">
          <p style={{ color: 'lightblue' }}>Login</p>
        </Link>
      </>}

    </div>
  )
}

export default Dashboard;
