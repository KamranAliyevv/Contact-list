import { Space, Table, Tag } from 'antd';
import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import {BsInfoLg} from "react-icons/bs";
import {RiDeleteBinLine} from "react-icons/ri";
import {MdEdit} from "react-icons/md";
import "antd/dist/antd.min.css";
import "./contactList.scss";
import { ContactContext } from '../../../context/ContactProvider';
const { Column } = Table;
// const data = [
//   {
//     key: Math.random()*100000000,
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 44,
//     email: 'kamran123@gmail.com',
//     position: 'developer',
//   },
  
// ];



const ContactList = ({setInfoModal,setDeleteModal}) => {
  const {contactData}=useContext(ContactContext);
  const dispatch=useNavigate();
  return (
  <Table dataSource={contactData}>
      <Column title="First Name" dataIndex="firstname" key="firstname" />
      <Column title="Last Name" dataIndex="lastname" key="lastname" />
    <Column title="Father Name" dataIndex="fathername" key="fathername" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column
      title="Position"
      dataIndex="position"
      key="position"
      render={(position) => (
        <>
            <Tag color="blue">
              {position}
            </Tag>
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(item, record) => (
        <Space size="middle">
          <span onClick={()=>setInfoModal(item)} className='info'><BsInfoLg/></span>
          <span onClick={()=>dispatch(`/contacts/edit/${item.key}`)} className='edit'><MdEdit/></span>
          <span onClick={()=>setDeleteModal(item.key)} className='delete'><RiDeleteBinLine/></span>
        </Space>
      )}
    />
  </Table>
)
      }

export default ContactList;