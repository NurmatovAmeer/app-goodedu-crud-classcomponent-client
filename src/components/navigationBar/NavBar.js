import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {



    return (
        <>
         {/*  NavBar codes */}
         <div className="sidebar" id="sidebar">
             <div className="sidebar-header d-flex justify-content-center ">
                 <div className="icons">
                     <img src="images/ivocab-icon.svg" alt="ivocab-inc" className="ivocab-icon"/>
                     <img src="images/ivocab-font.svg" alt="ivocab" className="ivocab-font"/>
                 </div>
             </div>
             <div className="ivocab-description d-flex justify-content-center align-items-center">
                 <p className="Abhaya improve">Improve your</p>

                 <p className="Abhaya vocab">Vocabulary</p>
             </div>
             <div className="sidebar-navigations">
                 <ul className="navbar-nav">
                         <li className="nav-item"><Link to='/' className="nav-link Poppins">Home</Link></li>
                         <li className="nav-item"><Link to='/users' className="nav-link Poppins">Users</Link></li>
                         <li className="nav-item"><Link to='/levels' className="nav-link Poppins">Levels</Link></li>
                         <li className="nav-item"><Link to='/words' className="nav-link Poppins">Words</Link></li>
                         <li className="nav-item"><Link to='/support' className="nav-link Poppins">Support</Link></li>
                 </ul>
             </div>
         </div>

        </>
    );
};

export default NavBar;