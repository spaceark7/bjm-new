import Banner from './components/banner'
import ProductSection from './components/ProductSection'
import ProjectBrand from './components/ProjectBrand'
import ServiceBrand from './components/Service'
import menu from 'react-useanimations/lib/menu3'
import { MdOutlinePlace } from 'react-icons/md'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import UseAnimations from 'react-useanimations'
import { useState } from 'react'

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

          <div className='py-8 w-full h-full'>
            <div className='px-4 pb-8'>
              <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
                <span className='text-brand-primary'>Hubungi</span> Kami
              </h3>
              <div className='py-2 '>
                <p>Kami siap untuk membantu anda</p>
              </div>
            </div>

            <div className='flex space-y-8 px-4 flex-col  '>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://wa.me/+6282124603889'
              >
                <div className='flex flex-row space-x-2 items-center justify-items-start text-xl '>
                  <BsWhatsapp />

                  <p className='font-brand-primary tracking-wider'>
                    0821-2460-3889
                  </p>
                </div>
              </a>
              <a target={'_blank'} rel='noreferrer' href='tel:+6282124603889'>
                <div className='flex space-x-2 items-center text-xl '>
                  <BsTelephone />

                  <p className='font-brand-primary tracking-wider'>
                    0821-2460-3889
                  </p>
                </div>
              </a>
              <a
                target={'_blank'}
                rel='noreferrer'
                href='mailto:aris.yuni.13@gmail.com'
              >
                <div className='flex space-x-2 items-center text-xl '>
                  <IoMailOutline />

                  <p className='font-brand-primary tracking-wider'>
                    aris.yuni.13@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
