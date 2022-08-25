import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {MdOutlinePersonAddAlt1} from "react-icons/md";
import { ToastContainer } from 'react-toastify';
const Header = () => {
  const navigate=useNavigate();
  return (
    <header>
      <ToastContainer/>
        <div className="container">
            <div className="header-inner">
                <div className="header-icon"><Link to={"/contacts"}>YourContacts</Link></div>
                <button onClick={()=>navigate("/contacts/new")} className='addContact'><MdOutlinePersonAddAlt1/></button>
            </div>
        </div>
    </header>
  )
}

export default Header