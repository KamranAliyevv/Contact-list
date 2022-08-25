import React, { useContext, useEffect, useState } from 'react'
import ContactList from "../../components/Contacts/ContactList/ContactList";
import 'react-toastify/dist/ReactToastify.css';
import InfoModal from '../../components/Modal/InfoModal/InfoModal';
import DeleteModal from '../../components/Modal/DeleteModal/DeleteModal';
import { ContactContext } from '../../context/ContactProvider';
const Contact = () => {
  const {contactData,setContactData}=useContext(ContactContext);
  const [infoModal,setInfoModal]=useState(false);
  const [deleteModal,setDeleteModal]=useState(false);
  useEffect(()=>{
    console.log(deleteModal)
  },[deleteModal])
  return (
    <div className="contact-list">
      <div className="container">
        <div className="contact-list-inner">
          <h3>My Contacts</h3>
      <ContactList setInfoModal={setInfoModal} setDeleteModal={setDeleteModal}/>
        </div>
      </div>
      {infoModal && <InfoModal infoModal={infoModal} setInfoModal={setInfoModal}/>}
      {deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>}
    </div>
  )
}

export default Contact