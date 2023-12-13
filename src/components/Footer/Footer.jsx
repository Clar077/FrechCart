import React from 'react';
import style from './Footer.module.css';
export default function Footer () {
    return <>
          {/* <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer> */}
     <footer className="footer bg-footer color-footer bg-light">
      <div className="container fs-5 mt-2 d-flex align-items-center justify-content-center">
        <p className='font-weight-bold'>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
        </>
}
