import { TModal } from "@types";
import { useEffect } from "react";

const Modal = ({
  title,
  content,
  onClose,
  isOpen,
  actionBtn = true,
  classes,
}: TModal) => {
  useEffect(() => {
    const handleWindowClick = () => {
      if (isOpen) onClose();
    };
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div
        className={`modal-box  ${classes ? classes : "w-11/12 max-w-5xl"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <button
          className="btn btn-circle btn-sm text-xs absolute right-3 top-3"
          onClick={onClose}
          aria-label="Close"
        >
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
