import Akcii from "@/components/SectionsMainPage/Akcii";
import Banner from "@/components/SectionsMainPage/Banner";
import Otzyvy from "@/components/SectionsMainPage/Otzyvy";
import Preimushestva from "@/components/SectionsMainPage/Preimushestva";
import Rassrochka from "@/components/SectionsMainPage/Rassrochka";
import Uslugi from "@/components/SectionsMainPage/Uslugi";
import BtnClient from "@/components/btnClient/BtnClient";
import Image from "next/image";


export default function Home() {
  return (
    <main className='' id='main'>
      <section className="hero min-h-screen relative pt-0 " style={{ backgroundImage: 'url(/bg/car.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className='absolute -top-16 left-0 right-0 rotate-180'>
          <Image src='/bg/bgBlur.png' alt='фоновое изображение' width={1536} height={296} />
        </div>
        <div className="hero-content text-center">
          <div className="xz:max-w-sm sd:max-w-3xl">
            <div className="title-logo text-white">
              <span className="sd:text-[1.75rem] xz:text-[1.35rem] span">
                СТО
              </span>
              <span className="sd:text-4xl xz:text-3xl">
                минск
              </span>
            </div>
            <h1 className="sd:text-7xl xz:text-4xl font-bold mt-6 text-white">
              АвтоСервис в Минске
            </h1>
            <p className="py-6 text-gradient bg-gradient-to-r from-blue-500 to-fuchsia-600 text-transparent bg-clip-text text-lg">
              Добро пожаловать в наш автосервис, где мы сочетаем профессионализм и заботу о вашем автомобиле. Мы гарантируем быстрый и аккуратный ремонт с использованием высококачественных материалов.
            </p>

            <div className='flex justify-center items-end sd:text-xl xz:text-[11px] mb-10 uppercase text-white'>
              <span> Слесарные работы</span>
              <span className="text-green-500 sd:mx-2 xz:mx-1 sd:text-7xl xz:text-xl">.</span>
              <span>Эвтоэлектрик</span>
              <span className="text-green-500  sd:mx-2 xz:mx-1 sd:text-7xl xz:text-xl">.</span>
              <span>Шиномонтаж</span>
            </div>
            <BtnClient />
          </div>
        </div>
      </section>


      <Uslugi />

      <Banner />

      <Otzyvy />

      <Preimushestva />

      <Rassrochka />

      <Akcii />

      <div className='text-center container mx-auto mt-0 mb-28'>
        <p className='text-gradient bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text text-lg'>
          Оставьте заботу о вашем автомобиле нам! Запишитесь на техническое обслуживание прямо сейчас и обеспечьте своему автомобилю первоклассный уход. Наша команда профессионалов готова предоставить вам выдающийся сервис. Нажмите на кнопку записи и дайте вашему транспортному средству заботу, которую оно заслуживает!
        </p>
      </div>
    </main>
  )
}
