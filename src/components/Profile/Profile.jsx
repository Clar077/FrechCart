import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Profile ()  {

    const [name, setName] = useState(null);

   useEffect( ()=>{ 
    const x = jwtDecode( localStorage.getItem('userToken'));
    setName(x.name);
    console.log(x);
   } , [])

   if(name===null){
    return <h1>Loading</h1>
   }

    return <>
           <Helmet><title>Profile </title></Helmet>

            <div className="container">
                <h1 className='text-center'>Hello {name}</h1>
            </div>
        </>
}

