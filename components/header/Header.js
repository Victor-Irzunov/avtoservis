"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll'

const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

export default function Header() {
	const [theme, setTheme] = useState('night');

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('header');
			if (header) {
				const isScrolled = window.scrollY > 0;
				if (isScrolled) {
					header.classList.add('bg-[#0c1425]/70');
				} else {
					header.classList.remove('bg-[#0c1425]/70');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const handleThemeChange = (e) => {
		const val = e.target.getAttribute('data-set-theme');
		setTheme(val)
	}
	return (
		<header className='sticky top-0 z-50'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex={0} className="btn btn-circle lg:hidden mr-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content overflow-y-scroll menu-sm mt-1 w-72  menu py-5 px-2 bg-base-200 shadow rounded-box"
							>
								<li>
									<LinkScroll to='main'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Главная
									</LinkScroll>
								</li>

								<li>
									<LinkScroll to='uslugi'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Услуги и цены
									</LinkScroll>
								</li>

								<li>
									<LinkScroll to='otzyvy'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Отзывы
									</LinkScroll>
								</li>
								<li>
									<LinkScroll to='kontakty'
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							rel="nofollow"
							href='#/'
						>
							{/* <Image src='/logo/logo.webp' alt='логотип' width={200} height={46} /> */}
							<div className="title-logo text-white">
								<span className="sd:text-[1.35rem] xz:text-[1rem] span">
									СТО
								</span>
								<span className="sd:text-3xl xz:text-xl">
									минск
								</span>
							</div>
						</LinkScroll>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 font-light">

							<li>
								<LinkScroll to='main'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Главная
								</LinkScroll>
							</li>

							<li>
								<LinkScroll to='uslugi'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Услуги и цены
								</LinkScroll>
							</li>

							<li>
								<LinkScroll to='otzyvy'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Отзывы
								</LinkScroll>
							</li>
							<li>
								<LinkScroll to='kontakty'
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn">
								{THEMES.length} Themes
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-80 max-h-96 overflow-y-auto menu menu-compact p-2  bg-base-200 shadow rounded-box">
								{
									THEMES.map((theme, i) => <li key={theme + i}><button data-set-theme={theme} onClick={handleThemeChange} className="font-medium capitalize">{i + 1 + '. ' + theme}</button></li>)
								}
							</ul>
						</div>

						{/* <a href='tel:80295403540' className='link link-hover'>
							8 029 640-35-40
						</a> */}
					</div>
				</div>
			</div>
		</header >
	)
}