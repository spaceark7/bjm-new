import Banner from './components/banner'
import ProductSection from './components/ProductSection'
import ProjectBrand from './components/ProjectBrand'
import ServiceBrand from './components/Service'
import menu from 'react-useanimations/lib/menu3'
import { MdOutlinePlace } from 'react-icons/md'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

import UseAnimations from 'react-useanimations'
import { useState } from 'react'
import Contact from './components/contact'

function App() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='App relative'>
      <header className='z-20 px-2 h-24 w-full bg-brand-primary sticky z-20 top-0 left-0 flex justify-between'>
        <div className=' z-20 h-full py-5 px-2 w-full flex items-center justify-start'>
          <img className='h-full' src='/images/BJM_NAV.png' alt='' />
        </div>
        <div
          onClick={() => setOpen(!isOpen)}
          className='h-full z-20 w-[48px]  w-12 w-12 flex items-center justify-center'
        >
          <UseAnimations
            animation={menu}
            strokeColor={'#fff'}
            speed={2}
            size={48}
          />
        </div>
        {isOpen ? (
          <div className='mobile-menu absolute transition-all duration-1000 ease-in-out   -translate-y-0 left-0 top-16 h-screen w-full bg-brand-primary'></div>
        ) : (
          <div className='mobile-menu  absolute transition-all ease-in-out duration-1000  -translate-y-full left-0 h-screen w-full bg-brand-primary'></div>
        )}
      </header>

      <main>
        <Banner />
        <ServiceBrand />
        <ProductSection />
        <ProjectBrand />

        <div className='py-8 w-full h-full'>
          <div className='px-4 pb-8'>
            <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
              <span className='text-brand-primary'>Tentang</span> Kami
            </h3>
          </div>

          <div className='w-full px-4 pt-6'>
            <img
              className='w-full object-cover object-right'
              src='/images/about.webp'
              alt='indonesia map'
            />
          </div>

          <div className='w-full px-4 pt-8 pb-6'>
            <h1 className='text-brand-primary font-brand-primary font-semibold text-2xl'>
              Berkah Jaya Mandiri
            </h1>
            <p className='leading-5 tracking-wide pt-3'>
              Kami adalah UKM yang bergerak dibidang manufaktur pembuatan
              bronjong yang berasal dari kota cianjur. Beroperasi lebih dari 5
              tahun. Visi kmi adalah untuk memajukan daerah dan memberikan
              kontribusi untuk pembangunan indonesia.
            </p>
            <a
              className='mt-6'
              target={'_blank'}
              rel='noreferrer'
              href='https://www.google.com/maps?q=berkah+jaya+mandiri+bronjong&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjgovHV9Pn0AhVtSmwGHdquAwAQ_AUoAnoECAIQBA'
            >
              <div className='w-full rounded-md px-4 py-4 mt-6 flex space-x-2 bg-brand-primary text-white justify-center items-center'>
                <MdOutlinePlace className='text-2xl' />
                <h1 className='text-white font-brand-primary font-semibold '>
                  Lihat Lokasi Kami di Google Maps
                </h1>
                {/* <div className='w-full h-[40]'>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyDa2-VQFSGxUC6w-hTHowgwNHC7PN1ico4',
              }}
              defaultCenter={{
                lat: -6.786761009782866,
                lng: 107.06439678205568,
              }}
              zoom={10}
            ></GoogleMapReact>
          </div> */}
              </div>
            </a>
          </div>

          {/* <div className='w-1/2 px-2 py-2'>
            <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl'>
              50+
            </h1>
            <p>Proyek telah memesan produk kami.</p>
          </div>
        </div>
        <div className='px-4 text-xl text-center font-brand-text pt-8'>
          <h1>
            Kami memberikan yang terbaik untuk pelanggan dengan harga yang
            terjangkau.
          </h1>
        </div> */}

          {/* <div className='w-1/2 h-1 bg-gray-400 flex mx-auto'></div> */}
        </div>
        <Contact />
      </main>
      <div className='w-full  bg-brand-primary py-4 px-2'>
        <div className=' w-1/3 py-5 px-2 w-full flex items-center justify-start'>
          <img className='h-full' src='/images/BJM_NAV.png' alt='' />
        </div>
        <div className='w-full px-2 py-4 text-white'>
          <h1 className='text-lg'>Temukan Kami di Jejaring Sosial</h1>
          <div className='flex px-4 py-4 opacity-80 space-x-4'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://www.facebook.com/BJMCianjur/'
            >
              <div className='rounded-full py-2 px-2 bg-white'>
                <FaFacebookF className='text-brand-primary text-3xl' />
              </div>
            </a>
            <div className='rounded-full py-2 px-2 bg-white'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://g.co/kgs/kYUSgS'
              >
                <FaGoogle className='text-brand-primary text-3xl' />
              </a>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col text-center mt-4 py-4 text-sm text-white '>
          <p className='opacity-70'>This Website created by</p>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.instagram.com/explorecreativedesign/'
          >
            <p className='text-lg font-semibold text-yellow-400'>
              Explore Creative Design
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
