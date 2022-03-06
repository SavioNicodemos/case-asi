import { createPortal } from 'react-dom';

import './styles.css';

const ModalConfirmation = ({ isShowing, hide, children, onConfirm = () => {} }) =>
  isShowing
    ? createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
              <div className="button-group">
                <button className="confirm-button" onClick={onConfirm}>
                  Yes
                </button>
                <button className="cancel-button" onClick={hide}>
                  No
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default ModalConfirmation;
