import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-mint'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8'
      >
        {/* Logo & Social links Container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12'
        >
          <div className='mx-auto my-6 text-center text-white'>
            Bite Quest &copy; 2023, All Rights Reserved.
          </div>

          {/* Logo */}
          <div>
            <h2 className='font-bold text-white'>Bite Quest</h2>
          </div>

        </div>
      </div>
    </footer>
  )
}
