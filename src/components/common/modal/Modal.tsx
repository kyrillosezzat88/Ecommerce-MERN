import { TModal } from "@types";

const Modal = ({ title, content, onClose, isOpen }: TModal) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open ">
      <div className="modal-box w-11/12 max-w-5xl">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {content}
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
