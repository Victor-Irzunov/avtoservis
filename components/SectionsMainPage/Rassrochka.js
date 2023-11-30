import Image from "next/image";

const Rassrochka = () => {
	return (
		<section className="py-16 mt-7">
			<div className='container mx-auto'>
				<div className='text-center mb-14'>
					<h4 className='text-gradient bg-gradient-to-r from-blue-500 to-fuchsia-600 text-transparent bg-clip-text  font-bold text-3xl'>
						Карты рассрочек
					</h4>
				</div>
				<div className='sd:flex xz:flex-row'>
					<div className='p-2'>
						<Image src='/rassrochka/card1.webp' alt='Карты рассрочек' width={600} height={379} />
					</div>
					<div className='p-2'>
						<Image src='/rassrochka/card2.webp' alt='Карты рассрочек' width={600} height={381} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Rassrochka;