import React, { useContext } from 'react';
import userAuth from '../context/context';
import { useRouter } from 'next/router';
import Link from 'next/link';


const About = () => {
  const [routeData, setRouteData] = React.useState(false);
  const { authPermission, setAuthPermission } = useContext(userAuth);


  return (
    <div>
      {authPermission ? <p>This is the about us page</p> : <>
        <h4>Please Login To access the data of this page</h4>
        <Link href="/login">
          <p style={{ color: 'lightblue' }}>Login</p>
        </Link>
      </>
      }

    </div>
  )
}

export default About;
