import React from "react";
import Modal from "../../../components/ui/modal";

const DeleteModal = ({ isOpen, closeModal, ...rest }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Delete Department"
      className="w-fit"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Do you really want to delete this Subject?</h3>
        <button
          className="btn-primary w-fit self-end p-2 rounded-sm hover:bg-red-500"
          {...rest}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
