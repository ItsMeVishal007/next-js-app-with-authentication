import React, { useContext, useState } from 'react';
import styles from '../styles/Home.module.css';
import userAuth from '../context/context';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {

  // const { authPermission, setAuthPermission} = useContext(userAuth);
  // console.log(authPermission)

  return (
    <div className={styles.container}>
      <Link href="/login">
        <h1 style={{color: '#00cec9' , cursor : 'pointer'}}>Login here</h1>
      </Link>
    </div>
  )
}
