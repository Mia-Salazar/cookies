import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Modal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);
  const previousActiveRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveRef.current = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !modalRef.current) return;

      const focusables = modalRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
      const list = Array.from(focusables);
      if (list.length === 0) return;

      const first = list[0];
      const last = list[list.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const focusTarget = closeButtonRef.current;
    if (focusTarget) {
      focusTarget.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousActiveRef.current && typeof previousActiveRef.current.focus === "function") {
        previousActiveRef.current.focus();
      }
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
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={imageAlt || "Ventana de imagen"}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar"
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
