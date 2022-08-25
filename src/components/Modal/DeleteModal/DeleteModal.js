import { Modal } from 'antd';
import React, { useContext } from 'react';
import { ContactContext } from '../../../context/ContactProvider';
import { toast } from "react-toastify";
import "./deleteModal.scss";
const DeleteModal = ({deleteModal,setDeleteModal}) => {
  const {contactData,setContactData}=useContext(ContactContext);
  const notify = (text) =>
    toast(text, {
      position: "top-right",
      type: "success",
      autoClose: 5000,
    });
  function handleDeleteModal(){
    let filterContact=contactData.filter((item)=>item.key!==deleteModal)
    console.log(filterContact)
    localStorage.setItem("contacts",JSON.stringify(filterContact))
    notify("Contact deleted")
    setContactData(filterContact)
    setDeleteModal(false);
  }
  return (
      <Modal
        title="Are You Sure?"
        centered
        className='deleteModal'
        bodyStyle={{display:"none"}}
        style={{}}
        visible={true}
        onOk={handleDeleteModal}
        onCancel={() => setDeleteModal(false)}
      >
      </Modal>
  );
};

export default DeleteModal