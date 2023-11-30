import { data } from "@/constans/Constans";

const Uslugi = () => {
	return (
		<section className='py-10 relative' id="uslugi">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h2 className="py-6 text-gradient bg-gradient-to-r from-blue-700 to-pink-500 text-transparent bg-clip-text text-5xl font-semibold">
						Наши услуги
					</h2>
					<p className='text-white/50'>
						Диагностика неисправности при дальнейшем ремонте{' '}
						<span className="uppercase">
							бесплатно
						</span>
					</p>
				</div>

				<div className='flex flex-wrap mt-8'>
					{data.map(item => (
						<div key={item.id} className="sd:w-1/2 xz:w-full lg:w-1/2 p-2">
							<div className="collapse bg-base-200">
								<input type="checkbox" className="peer" />
								<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex items-center">
									<figure><img src={item.img} alt={item.alt} width={70} height={70} className="rounded-md" /></figure>
									<p className='ml-5'>{item.title}</p>
								</div>
								<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
									<div className="overflow-x-auto">
										<table className="table">
											<thead>
												<tr>
													<th>Наименование</th>
													<th>Цена</th>
												</tr>
											</thead>
											<tbody>
												{item.tableData.map(row => (
													<tr key={row.id}>
														<td>{row.name}</td>
														<td>{row.price}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	)
}

export default Uslugi;