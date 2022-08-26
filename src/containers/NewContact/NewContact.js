import React from "react";
import ContactForm from "../../components/NewContact/ContactForm/ContactForm";

const NewContact = () => {
  return (
    <div className="new-contact">
      <div className="container">
        <div className="new-contact-inner">
          <h3>New Contact</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default NewContact;
