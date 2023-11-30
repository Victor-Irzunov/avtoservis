"use client"
import Modal from "../modal/Modal";
import { useState } from "react";

const BtnClient = () => {
	const [title, setTitle] = useState('')
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const handleOrderClick = title => {
		setTitle(title)
		document.getElementById("my_modal_3").showModal();
	};
	const closeModal = () => {
		document.getElementById("my_modal_3").close();
	};
	return (
		<div className=''>
			<button
				className="btn btn-primary"
				onClick={() => handleOrderClick('Записаться на ремонт')}
			>
				Записаться на ремонт
			</button>


			<Modal
				closeModal={closeModal}
				isFormSubmitted={isFormSubmitted}
				setIsFormSubmitted={setIsFormSubmitted}
				title={title}
			/>
		</div>
	)
}

export default BtnClient;