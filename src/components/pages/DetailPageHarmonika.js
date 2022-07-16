import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer'
import HarmonikaCard from '../CardProductHarmonika'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SwiperCore, { Pagination, Navigation } from 'swiper'

SwiperCore.use([Pagination, Navigation])

const DetailPageHarmonika = ({
  products,
  status,
  setStatus,
  name,
  company,
}) => {
  const params = useParams()
  const detail = products.find((product) => product.id === params.id)
  const recommended = products.filter((product) => product.id !== params.id)

  const [itemIndex, setIndex] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let message = `Halo, Saya ${name} dari perusahaan ${company}. Ingin menanyakan penawaran harga mengenai produk ${detail.name} ukuran mesh ${detail.specification.size[itemIndex]}. Terima kasih`
    let encoded = encodeURI(message)
    let url = `https://wa.me/+6282124603889?text=${encoded}`
    window.open(url, '_blank')
  }

  const openDialog = () => {
    setStatus(true)
    if (name !== '') {
      handleSubmit()
    }
  }
  return (
    <>
      <div className='w-full h-full md:hidden'>
        <div className='w-full -z-10 h-[50vh] fixed '>
          <img
            className='w-full h-full object-cover'
            src={detail.Image}
            alt={detail.name}
          />
        </div>
        <div className='w-full h-[50vh] -z-10 bg-transparent'></div>
        <div className='bg-white'>
          <div className='w-full z-10 h-full bg-white rounded-t-3xl transform -translate-y-8 px-4 py-6'>
            <div className='flex flex-row items-center'>
              <h1 className='text-xl w-1/2 font-brand-primary font-semibold '>
                {detail.name}
              </h1>
              <div className='w-1/2 h-full py-4 px-4'>
                <div
                  onClick={name !== '' ? handleSubmit : openDialog}
                  className='bg-brand-primary font-semibold rounded-md text-center py-2 px-2 text-white'
                >
                  <h2>Penawaran</h2>
                </div>
              </div>
            </div>

            <div className='pt-8 pb-4 text-xl tracking-wider text-gray-900 font-semibold  '>
              <h1>Spesifikasi Lengkap</h1>
            </div>

            <div className='border-t-2  border-gray-300'>
              <div className='grid grid-cols-1 py-5 px-4'>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>
                    Variasi Ukuran
                  </h3>
                  <div className='w-full flex flex-wrap pt-2 gap-2'>
                    {detail.specification.size.map((item, index) => (
                      <p
                        onClick={() => setIndex(index)}
                        id={index}
                        key={index}
                        className={
                          itemIndex === index
                            ? 'font-semibold text-sm w-fit rounded-full bg-brand-primary  text-white transition-all duration-500 ease-in font-brand-primary py-2 px-3 ring-2 ring-brand-primary'
                            : 'font-semibold text-sm w-fit rounded-full bg-brand-primary bg-opacity-20 text-brand-primary font-brand-primary py-2 px-3'
                        }
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>
                    Ketebalan Kawat
                  </h3>
                  <p className='font-semibold text-gray-900'>
                    {detail.specification.thickness}
                  </p>
                </div>

                {/* <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>
                    Sertifikasi Kawat SNI
                  </h3>
                  <div className='font-semibold flex items-center space-x-1 text-brand-primary '>
                    <MdVerified className='text-lg' />
                    <p className=''>Terverifikasi</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='pb-4'>
              <div>
                <h1 className='text-xl tracking-wider text-gray-900 font-semibold  '>
                  Lihat Harmonika Lainnya
                </h1>
                <div className='pt-4 '>
                  <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                  >
                    {recommended.map((product, index) => (
                      <SwiperSlide className='mb-11' key={product.id}>
                        <HarmonikaCard product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {/* <Dialog
          initialFocus={focus}
          className='fixed z-10 inset-0 overflow-y-auto'
          open={status}
          onClose={() => setStatus(false)}
        >
          <div className='flex items-center justify-center min-h-screen px-4'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            <div className='relative bg-white min-h-[50vh] rounded max-w-sm mx-auto pt-8 pb-2 px-8'>
              <form>
                <div>
                  <Dialog.Title
                    className={'text-2xl text-brand-primary font-bold'}
                  >
                    Beritahu Kami Siapa Anda
                  </Dialog.Title>
                  <Dialog.Description className='text-base pr-3 '>
                    Untuk memudahkan kami menghubungi anda
                  </Dialog.Description>
                </div>
                <div className='grid grid-row-2 gap-4 pt-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='font-semibold text-gray-500'
                    >
                      Silahkan masukan nama anda
                    </label>
                    <input
                      required={true}
                      ref={focus}
                      type='text'
                      id='name'
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                      className='mt-1 focus:ring-brand-primary focus:border-brand-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='company'
                      className='font-semibold text-gray-500'
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      required={true}
                      type='text'
                      id='company'
                      name='company'
                      className='mt-1 focus:ring-brand-primary focus:border-brand-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='w-full pt-10 pb-4 flex justify-end'>
                  <button
                    disabled={
                      name.length < 4 ? true : company === '' ? true : false
                    }
                    onClick={() => setDialogOpen(false)}
                    className='bg-brand-primary w-fit font-semibold disabled:bg-opacity-60 rounded-md text-center py-2 px-4 tracking-wider text-white'
                  >
                    <h2>Kirim Pesan</h2>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
       */}
      </div>

      <div className='w-full h-full hidden md:block'>
        <div className='grid grid-cols-2 md:px-8 md:py-8 gap-x-4 md:min-h-fit xl:px-40 lg:py-9 lg:gap-x-6'>
          <div className='w-full -z-10 min-h-fit md:max-w-md md:h-[50vh] relative lg:max-w-lg lg:min-h-[65vh] lg:shadow-xl xl:max-w-3xl xl:min-h-[30vh]'>
            <img
              className='w-full h-full object-cover lg:rounded-lg'
              src={detail.Image}
              alt={detail.name}
            />
          </div>
          <div>
            <h1 className='text-2xl w-4/6 font-brand-primary font-semibold lg:text-3xl lg:w-full'>
              {detail.name}
            </h1>
            <div className='pt-8 pb-4 text-xl tracking-wider text-gray-900 font-semibold  '>
              <h1>Spesifikasi Lengkap</h1>
            </div>
            <div className='border-t-2  border-gray-300'>
              <div className='grid grid-cols-1 py-5 px-4 lg:grid-cols-2'>
                <div className='pb-4 pr-3 lg:col-span-2 lg:mb-6'>
                  <h3 className='font-semibold text-gray-600'>
                    Variasi Ukuran
                  </h3>
                  <div className='w-full flex flex-wrap pt-2 gap-2 lg:flex-row '>
                    {detail.specification.size.map((item, index) => (
                      <p
                        onClick={() => setIndex(index)}
                        id={index}
                        key={index}
                        className={
                          itemIndex === index
                            ? 'font-semibold text-sm w-fit rounded-full bg-brand-primary  text-white transition-all duration-200 ease-in font-brand-primary py-2 px-3 ring-2 ring-brand-primary lg:hover:cursor-pointer'
                            : 'font-semibold text-sm w-fit rounded-full bg-brand-primary bg-opacity-20 text-brand-primary transition-all duration-200  font-brand-primary py-2 px-3 lg:hover:cursor-pointer'
                        }
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className='pb-4 pr-3'>
                  <h3 className='font-semibold text-gray-600'>
                    Ketebalan Kawat
                  </h3>
                  <p className='font-semibold text-gray-900'>
                    {detail.specification.thickness}
                  </p>
                </div>
                <div className='w-full h-full py-4 lg:col-span-2 hover:cursor-pointer xl:max-w-lg'>
                  <div
                    onClick={name !== '' ? handleSubmit : openDialog}
                    className='bg-brand-primary font-semibold rounded-md text-center py-2 px-4 text-white'
                  >
                    <h2>Dapatkan Penawaran</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white md:px-8 pt-8 xl:px-40'>
          <div className='pb-4'>
            <div className=''>
              <h1 className='text-xl tracking-wider text-gray-900 font-semibold  '>
                Lihat Harmonika Lainnya
              </h1>
              <div className='pt-4 lg:hidden '>
                <Swiper
                  spaceBetween={20}
                  centeredSlides={true}
                  slidesPerView={2}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {recommended.map((product, index) => (
                    <SwiperSlide className='mb-11' key={product.id}>
                      <HarmonikaCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className='pt-4 hidden lg:block'>
                <Swiper
                  spaceBetween={20}
                  navigation
                  slidesPerView={3}
                  slidesOffsetBefore={100}
                  slidesOffsetAfter={100}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {recommended.map((product, index) => (
                    <SwiperSlide className='mb-11' key={product.id}>
                      <HarmonikaCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailPageHarmonika
