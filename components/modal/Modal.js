import FormOrder from "../Form/Form";

const Modal = ({ title, closeModal, isFormSubmitted, setIsFormSubmitted }) => {
	return (
		<dialog id="my_modal_3" className="modal">
			{!isFormSubmitted ? (
				<div className="modal-box">
					<h3 className="font-semibold text-lg">{title}</h3>
					<p className="py-4 text-xs text-gray-400">
						Пожалуйства заполните данные формы
					</p>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<FormOrder  closeModal={closeModal} setIsFormSubmitted={setIsFormSubmitted} />
				</div>
			)
				:
				(
					<div className="modal-box">
						<p className="text-success">Ваш заказ успешно отправлен!</p>
					</div>
				)
			}
		</dialog>
	)
}

export default Modal;