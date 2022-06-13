import React from 'react';

const Users = () => {
    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }
    return (
        <div className="bar d-flex  align-items-center" onClick={openSideBar}>
            <img src="/images/burger.svg" alt="bar" className="burger"/>
            <h2 className="Poppins" >Users</h2>
        </div>
    );
};

export default Users;