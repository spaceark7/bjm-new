import { FaChevronDown } from 'react-icons/fa'
import { Turn as Hamburger } from 'hamburger-react'

import { Disclosure, Transition, Popover } from '@headlessui/react'

import productList from './data/productList'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'

import { useState, useEffect, useRef } from 'react'
import DetailPage from './components/pages/DetailPage'
import ScrollToTopOnMount from './components/ScrollToTop'
import DetailPageHarmonika from './components/pages/DetailPageHarmonika'

import { Dialog } from '@headlessui/react'

function App() {
  const [isOpen, setOpen] = useState(false)
  const [isOpenDialog, setDialog] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const focus = useRef()

  let message = `Halo, Perkenalkan Saya ${name} dari perusahaan ${company}. Saya ingin menanyakan tenang produk yang bapak jual`
  let encoded = encodeURI(message)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className='App h-full w-full relative z-10'>
        <header className='z-20 px-2 h-24 w-full border-b-2 border-white border-opacity-30 bg-brand-primary sticky z-20 top-0 left-0 flex justify-between lg:px-4 xl:px-40'>
          {
            <Link
              onClick={(isOpen) => {
                if (isOpen) {
                  setOpen(false)
                }
              }}
              to={'/'}
            >
              <div className=' z-20 h-full py-5 px-2 w-full flex items-center justify-start'>
                <img className='h-full' src='/images/BJM_NAV.png' alt='' />
              </div>
            </Link>
          }
          <div
            onClick={() => setOpen(!isOpen)}
            className='h-full z-20 w-[48px]  w-12 w-12 flex items-center justify-center lg:hidden'
          >
            <Hamburger
              color='#fff'
              toggled={isOpen}
              toggle={setOpen}
              size={36}
              duration={0.8}
            />
          </div>

          {isOpen ? (
            <div className='mobile-menu z-0 pb-28 absolute transition h-screen duration-1000 ease-in-outpb-20 -translate-y-0 left-0 top-24 overflow-y-scroll   w-full h-full bg-gray-50'>
              <div className='w-full min-h-[100vh] overflow-y-auto  '>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          open
                            ? 'w-full flex py-4 px-6 justify-between text-gray-600 font-bold text-2xl opacity-100'
                            : 'w-full flex py-4 px-6 justify-between text-gray-900 font-bold text-2xl opacity-80'
                        }`}
                      >
                        <p>Bronjong</p>

                        <FaChevronDown
                          className={`${
                            open
                              ? 'transition duration-500 ease-out transform rotate-180'
                              : 'transition duration-500 ease-out transform '
                          }`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-500 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                      >
                        <Disclosure.Panel className={'w-full px-6 pb-10 '}>
                          <ul className='space-y-4 text-lg font-semibold text-gray-900'>
                            {productList.bronjong.map((item, index) => (
                              <Link
                                key={item.id}
                                to={`/produk/bronjong/${item.id}`}
                              >
                                <li
                                  onClick={() => setOpen(!open)}
                                  className='py-2 opacity-70 hover:opacity-100'
                                >
                                  {item.name}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          open
                            ? 'w-full flex py-4 px-6 justify-between text-gray-600 font-bold text-2xl opacity-100'
                            : 'w-full flex py-4 px-6 justify-between text-gray-900 font-bold text-2xl opacity-80'
                        }`}
                      >
                        <p>Kawat Harmonika</p>

                        <FaChevronDown
                          className={`${
                            open
                              ? 'transition duration-500 ease-out transform rotate-180'
                              : 'transition duration-500 ease-out transform '
                          }`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-500 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-500 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                      >
                        <Disclosure.Panel className={'w-full px-6 pb-10 pt-4'}>
                          <ul className='space-y-4 text-lg font-semibold text-gray-600'>
                            {productList.harmonika.map((item, index) => (
                              <Link
                                key={item.id}
                                onClick={() => {
                                  setOpen(!open)
                                }}
                                to={`/produk/harmonika/${item.id}`}
                              >
                                <li className='py-2 opacity-70 hover:opacity-100'>
                                  {item.name}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href={`https://wa.me/+6282124603889?text=${encoded}`}
                >
                  <div className='w-full h-full py-4 px-6'>
                    <p className='text-green-800 font-bold text-2xl opacity-80 hover:opacity-100'>
                      Kirim WhatsApp
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <div className='mobile-menu z-0 absolute transition-all ease-in-out duration-1000 pt-12 pb-20 -translate-y-full left-0 top-0 w-full bg-brand-primary'>
              <div className='w-full min-h-[100vh] overflow-y-auto  '>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          open
                            ? 'w-full flex py-4 px-6 justify-between text-gray-600 font-bold text-2xl opacity-100'
                            : 'w-full flex py-4 px-6 justify-between text-gray-900 font-bold text-2xl opacity-80'
                        }`}
                      >
                        <p>Bronjong</p>

                        <FaChevronDown
                          className={`${
                            open
                              ? 'transition duration-500 ease-out transform rotate-180'
                              : 'transition duration-500 ease-out transform '
                          }`}
                        />
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter='transition duration-500 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                      >
                        <Disclosure.Panel className={'w-full px-6 pb-10 '}>
                          <ul className='space-y-4 text-lg font-semibold text-gray-900'>
                            {productList.bronjong.map((item, index) => (
                              <Link
                                key={item.id}
                                to={`/produk/bronjong/${item.id}`}
                              >
                                <li
                                  onClick={() => setOpen(!open)}
                                  className='py-2 opacity-70 hover:opacity-100'
                                >
                                  {item.name}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          open
                            ? 'w-full flex py-4 px-6 justify-between text-gray-600 font-bold text-2xl opacity-100'
                            : 'w-full flex py-4 px-6 justify-between text-gray-900 font-bold text-2xl opacity-80'
                        }`}
                      >
                        <p>Kawat Harmonika</p>

                        <FaChevronDown
                          className={`${
                            open
                              ? 'transition duration-500 ease-out transform rotate-180'
                              : 'transition duration-500 ease-out transform '
                          }`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter='transition duration-500 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-500 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                      >
                        <Disclosure.Panel className={'w-full px-6 pb-10 pt-4'}>
                          <ul className='space-y-4 text-lg font-semibold text-gray-600'>
                            {productList.harmonika.map((item, index) => (
                              <Link
                                key={item.id}
                                to={`/produk/harmonika/${item.id}`}
                              >
                                <li className='py-2 opacity-70 hover:opacity-100'>
                                  {item.name}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>

                <div className='w-full h-full py-4 px-6'>
                  <p className='text-green-800 font-bold text-2xl opacity-80 hover:opacity-100'>
                    Kirim WhatsApp
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className='hidden lg:block lg:flex lg:flex-row justify-end items-center w-2/3 space-x-10'>
            <Popover.Group
              className={
                'lg:flex lg:flex-row justify-center items-center space-x-10'
              }
            >
              <Popover className={'relative '}>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`${
                        open
                          ? 'bg-[#7a8cc2]/25 backdrop-blur-xl text-lg flex items-center space-x-2  font-bold text-white py-2 px-4 rounded-full'
                          : ' text-lg font-bold flex items-center space-x-2  text-white py-2 px-4 rounded-full'
                      }   `}
                    >
                      <span>Bronjong</span>
                      <FaChevronDown
                        className={`${
                          open
                            ? 'transition-all duration-200 ease-in transform rotate-180'
                            : 'transition-all duration-200 ease-in'
                        }`}
                      />
                    </Popover.Button>
                    <Popover.Panel
                      className={
                        'absolute z-20  transform top-16 w-screen max-w-sm'
                      }
                    >
                      {({ close }) => (
                        <Transition
                          enter='transition duration-200 ease-in'
                          enterFrom='transform scale-0 -translate-y-48 opacity-0 ease-in'
                          enterTo='transform scale-100 translate-y-0 opacity-100 ease-out'
                          leave='transition duration-75 ease-in'
                          leaveFrom='transform scale-100 opacity-100 ease-in'
                          leaveTo='transform scale-0 opacity-0 ease-out'
                        >
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 max-w-sm'>
                            <div className='relative grid space-y-3 bg-white p-7 lg:grid-cols-1 '>
                              {productList.bronjong.map((item, index) => (
                                <Link
                                  key={item.id}
                                  to={`/produk/bronjong/${item.id}`}
                                  onClick={() => close()}
                                >
                                  <p className=' text-brand-primary py-2 px-4 rounded-full font-bold transition-all hover:ease-out  duration-300 hover:bg-brand-primary/20 hover:scale-105'>
                                    {item.name}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Transition>
                      )}
                    </Popover.Panel>
                  </>
                )}
              </Popover>
              <Popover className={'relative '}>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`${
                        open
                          ? 'bg-[#7a8cc2]/25 backdrop-blur-xl text-lg flex items-center space-x-2  font-bold text-white py-2 px-4 rounded-full'
                          : ' text-lg font-bold flex items-center space-x-2  text-white py-2 px-4 rounded-full'
                      }   `}
                    >
                      <span>Kawat Harmonika</span>
                      <FaChevronDown
                        className={`${
                          open
                            ? 'transition-all duration-200 ease-in transform rotate-180'
                            : 'transition-all duration-200 ease-in'
                        }`}
                      />
                    </Popover.Button>
                    <Popover.Panel
                      className={
                        'absolute z-20 transform top-16 -left-1/2 w-screen max-w-sm'
                      }
                    >
                      {({ close }) => (
                        <Transition
                          enter='transition duration-200 ease-in'
                          enterFrom='transform scale-0 -translate-y-48 opacity-0 ease-in'
                          enterTo='transform scale-100 translate-0 opacity-100 ease-out'
                          leave='transition duration-75 ease-in'
                          leaveFrom='transform scale-100 opacity-100 ease-in'
                          leaveTo='transform scale-0 opacity-0 ease-out'
                        >
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 max-w-sm'>
                            <div className='relative grid space-y-6 bg-white p-7 lg:grid-cols-1 '>
                              {productList.harmonika.map((item, index) => (
                                <Link
                                  key={item.id}
                                  to={`/produk/harmonika/${item.id}`}
                                  onClick={() => close()}
                                >
                                  <p className=' text-brand-primary py-2 px-4 rounded-full font-bold transition-all hover:ease-out  duration-300 hover:bg-brand-primary/20 hover:scale-105'>
                                    {item.name}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Transition>
                      )}
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/produk/bronjong/:id'
            element={
              <>
                <ScrollToTopOnMount>
                  <DetailPage
                    status={isOpenDialog}
                    setStatus={setDialog}
                    name={name}
                    setName={setName}
                    company={company}
                    setCompany={setCompany}
                    products={productList.bronjong}
                  />
                </ScrollToTopOnMount>
              </>
            }
          />
          <Route
            path='/produk/harmonika/:id'
            element={
              <>
                <ScrollToTopOnMount>
                  <DetailPageHarmonika
                    status={isOpenDialog}
                    setStatus={setDialog}
                    name={name}
                    setName={setName}
                    company={company}
                    setCompany={setCompany}
                    products={productList.harmonika}
                  />
                </ScrollToTopOnMount>
              </>
            }
          />
        </Routes>
        <Dialog
          initialFocus={focus}
          className='fixed z-10 inset-0 overflow-y-auto'
          open={isOpenDialog}
          onClose={() => setDialog(false)}
        >
          <div className='flex items-center justify-center min-h-screen px-4'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
            <div className='relative bg-white min-h-[50vh] rounded max-w-sm mx-auto pt-8 pb-2 px-8'>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setDialog(false)
                }}
              >
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
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                      ref={focus}
                      type='text'
                      id='name'
                      name='name'
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
                  <button className='bg-brand-primary w-fit font-semibold disabled:bg-opacity-60 rounded-md text-center py-2 px-4 tracking-wider text-white'>
                    <h2>Selesai</h2>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
      </div>
    </Router>
  )
}

export default App
