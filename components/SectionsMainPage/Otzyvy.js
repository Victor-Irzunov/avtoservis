
const Otzyvy = () => {
	return (
		<section className='py-12 mt-10' id="otzyvy">
			<div className='container mx-auto'>

				<div className='text-center mb-14'>
					<h4 className='font-bold text-3xl'>
						ЧТО КЛИЕНТЫ ГОВОРЯТ О НАШЕЙ РАБОТЕ
					</h4>
				</div>

				<div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
					<div className="carousel-item">
						<div className="card w-96 bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img src="/otzyvy/e2.webp" alt="Отзыв" className="rounded-full w-24 h-24" />
							</figure>
							<div className="card-body items-center text-center">
								<p className="card-title">Гец Павел</p>
								<p>
									Благодарю команду "СТОМИНСК" за оперативный и качественный ремонт моего автомобиля. Профессионализм, внимание к деталям и отличное обслуживание создали положительный опыт общения с вашим сервисом.
								</p>
							</div>
						</div>
					</div>


					<div className="carousel-item">
						<div className="card w-96 bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img src="/otzyvy/e3.webp" alt="Отзыв" className="rounded-full w-24 h-24" />
							</figure>
							<div className="card-body items-center text-center">
								<p className="card-title">Ярош Станислав</p>
								<p>
									Отличный сервис! Быстро и качественно восстановили мою машину. Благодарю за профессионализм и дружелюбный подход.
								</p>
							</div>
						</div>
					</div>


					<div className="carousel-item">
						<div className="card w-96 bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img src="/otzyvy/e4.webp" alt="Отзыв" className="rounded-full w-24 h-24" />
							</figure>
							<div className="card-body items-center text-center">
								<p className="card-title">
									Павлович Анатолий
								</p>
								<p>
									Очень доволен обслуживанием. Ремонт выполнен безупречно, а команда проявила заботу к клиентам. Рекомендую!
								</p>
							</div>
						</div>
					</div>


					<div className="carousel-item">
						<div className="card w-96 bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img src="/otzyvy/e2.webp" alt="Отзыв" className="rounded-full w-24 h-24" />
							</figure>
							<div className="card-body items-center text-center">
								<p className="card-title">
									Абрамович Василий
								</p>
								<p>Большое спасибо за отзывчивость и качественный ремонт. "СтоМинск" – надежный выбор для тех, кто ценит свое время и автомобиль.</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="card w-96 bg-base-100 shadow-xl">
							<figure className="px-10 pt-10">
								<img src="/otzyvy/e3.webp" alt="Отзыв" className="rounded-full w-24 h-24" />
							</figure>
							<div className="card-body items-center text-center">
								<p className="card-title">
									Мягай Сергей
								</p>
								<p>
									Профессиональный подход, высокий стандарт обслуживания. Спасибо за оперативность и качество работы!
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Otzyvy;