import React from "react";
import { Modal } from "antd";

export const DeleteTicketModal = (props) => {
  const { modal, onConfirm, toggleModal, onClose } = props;

  const onCancel = () => {
    onClose();
    toggleModal();
  };

  return (
    <Modal
      title="Delete Ticket"
      open={modal}
      onOk={onConfirm}
      onCancel={onCancel}
      okButtonProps={{
        className: "bg-primary hover:bg-primary customOKButton",
      }}
      cancelButtonProps={{ className: " customCancelButton" }}
    >
      <div className="modalInputContainer">
        Are you sure you want to delete this record?
      </div>
    </Modal>
  );
};
