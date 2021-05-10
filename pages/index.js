import {useContext} from 'react';
import styles from '../styles/Home.module.css';
import userAuth from '../context/context';

export default function Home() {
  // const { authPermission, setAuthPermission} = useContext(userAuth);
  // console.log(authPermission)
  return (
    <div className={styles.container}>
     <h1>Hello world</h1>
    </div>
  )
}
