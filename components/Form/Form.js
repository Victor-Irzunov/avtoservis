"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'; // Или любую другую локаль, которая тебе нужна
registerLocale('ru', ru);

const FormOrder = ({ closeModal, setIsFormSubmitted }) => {
	const [formData, setFormData] = useState({
		phone: '',
		message: '',
		selectedDate: new Date(), // Добавь новое поле для хранения выбранной даты
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		let messageForm = `<b>Запись с сайта СТО:</b>\n`;
		messageForm += `<b>--------------- </b>\n`;
		messageForm += `<b>Телефон:</b> ${formData.phone}\n`;
		messageForm += `<b>--------------- </b>\n`;
		messageForm += `<b>Дата записи:</b> ${formData.selectedDate.toLocaleDateString('ru')}\n`;
		messageForm += `<b>--------------- </b>\n`;
		messageForm += `<b>Сообщение: ${formData.message} </b>\n`;

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					setIsFormSubmitted(true);
					setTimeout(() => {
						closeModal()
					}, 3000)
				}
			})
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleDateChange = (date) => {
		setFormData({ ...formData, selectedDate: date });
	};

	return (
		<div className="w-full bg-base-100">
			<form className="" onSubmit={handleSubmit}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Телефон</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Ваш телефон"
						className="input input-bordered xz:input-sm sd:input-lg"
						required
					/>
				</div>
				<div className="form-control mt-3">
					<label className="label">
						<span className="label-text">Выберите дату</span>
					</label>
					<DatePicker
						selected={formData.selectedDate}
						onChange={handleDateChange}
						className="input input-bordered w-full sd:input-lg xz:input-sm"
						dateFormat="dd/MM/yyyy"
						locale="ru"
					/>
				</div>
				<div className="form-control mt-3">
					<label className="label">
						<span className="label-text">Сообщение</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="textarea textarea-bordered xz:textarea-sm sd:textarea-lg"
						placeholder="Опишите пожалуйста кратко неисправность"
					></textarea>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary" type="submit">
						Записаться
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormOrder;
