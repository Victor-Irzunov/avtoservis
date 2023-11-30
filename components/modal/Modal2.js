import FormOrder from "../Form/Form";

const Modal2 = ({ selectedProduct, closeModal, isFormSubmitted, setIsFormSubmitted }) => {

	return (
		<dialog id="my_modal_4" className="modal">
			{!isFormSubmitted ? (
				<div className="modal-box">
					<h3 className="font-semibold text-lg">{selectedProduct ? selectedProduct : 'Заказать доставку'}</h3>
					<p className="py-4">
						Пожалуйства заполните данные формы, чтобы оформить заказ.
					</p>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<FormOrder selectedProduct={selectedProduct} closeModal={closeModal} setIsFormSubmitted={setIsFormSubmitted} />
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

export default Modal2;