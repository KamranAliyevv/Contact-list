import React from 'react'
import ContactForm from '../../components/EditContact/ContactForm/ContactForm'
const EditContact = () => {
  return (
    <div className="edit-contact">
        <div className="container">
            <div className="edit-contact-inner">
                <h3>Edit Information</h3>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default EditContact