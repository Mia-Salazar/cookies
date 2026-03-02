import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

const Modal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="modal__content">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="modal__image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

Modal.defaultProps = {
  imageSrc: "",
  imageAlt: "",
};

export default Modal;

