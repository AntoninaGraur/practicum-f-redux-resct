import {Backdrop, ModalWindow, ModalButton} from './modal.styled'


const Modal = ({ children, closeModal }) => {
	return (
		<Backdrop>
			<ModalWindow>
				<div className='modal-content'>
					<div className='modal-header'>
						<h2 className='modal-title'> Modal</h2>
						<ModalButton
							type='button'
							aria-label='Close'
							onClick={closeModal}
						>Close</ModalButton>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</ModalWindow>
		</Backdrop>
	)
}

export default Modal;