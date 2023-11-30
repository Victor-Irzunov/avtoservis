const Banner = () => {
	return (

		<section className='mt-20 py-5'>
			<div className='container mx-auto'>
				<div className="sd:p-10 xz:p-8 bg-gradient-to-r from-sky-500 to-fuchsia-500" style={{ borderRadius: '50px 0 50px 0' }}>
					<div className='sd:flex justify-between items-center xz:flex-row'>
						<div className=''>
							<h3 className="py-6 text-gradient bg-gradient-to-l from-blue-700 to-pink-500 text-transparent bg-clip-text sd:text-5xl xz:text-3xl font-semibold">
								Новогодняя акция
							</h3>
							<p className="title-logo span sd:text-4xl xz:text-3xl font-bold" >
								Ремонт вашего автомобиля со скидкой 15%
							</p>
						</div>

						<div className="sd:mt-0 xz:mt-8">
							<button className='btn btn-primary btn-sm'>
								Записаться на ремонт
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner;
