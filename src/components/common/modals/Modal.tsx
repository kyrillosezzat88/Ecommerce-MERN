import { TModal } from "@types";

const Modal = ({
  title,
  content,
  onClose,
  isOpen,
  actionBtn = true,
}: TModal) => {
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <div className="modal-box w-11/12 max-w-5xl">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <button className="btn btn-circle btn-sm text-xs absolute right-3 top-3">
          x
        </button>
        {content}
        {actionBtn && (
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
