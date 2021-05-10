import { Layout } from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import userAuth from '../context/context';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [authPermission, setAuthPermission] = useState(false);

  return (<>
    <userAuth.Provider value={{ authPermission, setAuthPermission }}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </userAuth.Provider>
  </>)
}

export default MyApp
