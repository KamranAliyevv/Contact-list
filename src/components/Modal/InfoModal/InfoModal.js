import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./infoModal.scss";
const InfoModal = ({ infoModal, setInfoModal }) => {
  console.log(infoModal)
  return (
    <Modal
      title="Contact Info"
      className="infoModal"
      centered
      visible={true}
      footer={false}
      bodyStyle={{overflowY: 'scroll'}}
      onCancel={() => setInfoModal(false)}
    >
      <div className="user-info">
        {Object.keys(infoModal).map((key) => {
          if(key!=="key" && key!=="agreement"){
          return (
            <div key={key} className="info">
              <span>{key}:</span>
              <span>{infoModal[key]}</span>
            </div>
          );
          }
          return false;
        })}
      </div>
    </Modal>
  );
};

export default InfoModal;
