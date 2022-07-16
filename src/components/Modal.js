import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'

const Modal = ({
  isOpen,
  setOpen,
  handleSubmit,
  setName,
  name,
  setCompany,
  company,
}) => {
  const [open, setDialogOpen] = useState(isOpen)
  useEffect(() => {
    console.log('in Modal state: ', open, ' ', isOpen)
    setDialogOpen(isOpen)
  }, [isOpen, open])
  let focus = useRef()

  return (
    <Dialog
      initialFocus={focus}
      className='fixed z-10 inset-0 overflow-y-auto'
      open={isOpen}
      onClose={() => setOpen(false)}
    >
      <div className='flex items-center justify-center min-h-screen px-4'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
        <div className='relative bg-white min-h-[50vh] rounded max-w-sm mx-auto pt-8 pb-2 px-8'>
          <form onSubmit={handleSubmit}>
            <div>
              <Dialog.Title className={'text-2xl text-brand-primary font-bold'}>
                Beritahu Kami Siapa Anda
              </Dialog.Title>
              <Dialog.Description className='text-base pr-3 '>
                Untuk memudahkan kami menghubungi anda
              </Dialog.Description>
            </div>
            <div className='grid grid-row-2 gap-4 pt-6'>
              <div>
                <label htmlFor='name' className='font-semibold text-gray-500'>
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
  )
}

export default Modal
