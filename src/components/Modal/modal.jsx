// import { Component } from 'react';
import { Backdrop, ModalWindow, ModalButton } from './modal.styled';

import { useEffect } from 'react';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handlePressESC = e => {
      console.log('object', Date.now());
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handlePressESC);
    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  return (
    <Backdrop>
      <ModalWindow>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title"> Modal</h2>
            <ModalButton type="button" aria-label="Close" onClick={closeModal}>
              Close
            </ModalButton>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;

// class Modal extends Component {
//   state = {};

//   componentDidMount() {
//     window.addEventListener('keydown', this.handlePressESC);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handlePressESC);
//   }
//   handlePressESC = e => {
//     if (e.code === 'Escape') this.props.closeModal();
//   };
//   render() {
//     const { closeModal, children } = this.props;
//     return (
//       <Backdrop>
//         <ModalWindow>
//           <div className="modal-content">
//             <div className="modal-header">
//               <h2 className="modal-title"> Modal</h2>
//               <ModalButton
//                 type="button"
//                 aria-label="Close"
//                 onClick={closeModal}
//               >
//                 Close
//               </ModalButton>
//             </div>
//             <div className="modal-body">{children}</div>
//           </div>
//         </ModalWindow>
//       </Backdrop>
//     );
//   }
// }

// export default Modal;
