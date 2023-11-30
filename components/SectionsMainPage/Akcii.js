
const Akcii = () => {
	return (
		<section className='py-12 mt-10' id="preimushestva">
			<div className='container mx-auto'>

				<div className='text-center mb-14'>
					<h5 className='uppercase text-gradient bg-gradient-to-r from-blue-500 to-fuchsia-600 text-transparent bg-clip-text  font-bold text-3xl'>
						Акции нашего автосервиса
					</h5>
				</div>

				<div className='sd:flex justify-evenly xz:flex-row'>
					<div className="card sd:w-96 xz:w-80 bg-base-100 shadow-xl">
						<figure><img src="/08.webp" alt="Акция к 8 марта" /></figure>
						<div className="card-body">
							<h2 className="card-title">
								Акция
								<div className="badge badge-secondary">СКОРО</div>
							</h2>
							<p>
							В период с 5-25 марта милым дамам скидка на ТО 20%
								
							</p>

						</div>
					</div>

					<div className="card sd:w-96 xz:w-80  bg-base-100 shadow-xl">
						<figure><img src="/09.webp" alt="Акция бесплатная диагностика подвески" /></figure>
						<div className="card-body">
							<h2 className="card-title">
								Акция
								<div className="badge badge-secondary">СЕЙЧАС</div>
							</h2>
							<p>
							Беслатная диагностика подвески с 9:00-10:00 утра
							</p>

						</div>
					</div>
				</div>
			</div>


		</section>
	)
}

export default Akcii;