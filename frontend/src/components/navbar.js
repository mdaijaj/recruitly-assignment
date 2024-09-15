import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
    const cardata = localStorage.getItem("itemscart")
    console.log("cardata", cardata)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="data:image/webp;base64,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" width="150" height="40" className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/add_company">Add Company</NavLink>
                            </li>
                        </ul>

                        {!localStorage.getItem('user') ? (
                            <form className='d-flex ml-auto'>
                                <Link className='btn btn-dark mx-2' to="/signup" role="button">Signup</Link>
                                <Link className='btn btn-dark mx-2' to="/login" role="button">Login</Link>
                            </form>
                        ) : (
                            <div className="d-flex align-items-center ml-auto">
                                <h4 className="mb-0 mx-2">{JSON.parse(localStorage.getItem('user')).username}</h4>
                                <button onClick={handleLogout} className='btn btn-dark'>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
