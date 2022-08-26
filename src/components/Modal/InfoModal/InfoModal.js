import { Modal } from "antd";
import React from "react";
import "./infoModal.scss";
const InfoModal = ({ infoModal, setInfoModal }) => {
  return (
    <Modal
      title="Contact Info"
      className="infoModal"
      centered
      visible={true}
      footer={false}
      bodyStyle={{ overflowY: "scroll" }}
      onCancel={() => setInfoModal(false)}
    >
      <div className="user-info">
        {Object.keys(infoModal).map((key) => {
          if (!["agreement", "key"].includes(key) && infoModal[key]) {
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
