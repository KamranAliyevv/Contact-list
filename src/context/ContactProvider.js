import React, { createContext, useState } from "react";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contactData, setContactData] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  return (
    <ContactContext.Provider value={{ contactData, setContactData }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
