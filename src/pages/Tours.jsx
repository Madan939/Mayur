import React from 'react'
import { Link } from 'react-router-dom'
import { Package } from '../data/tours/Package'

const Tour = () => {
  return (
    <>
      <section className='w-full lg:h-auto relative '>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              "url('/assets/images/tours/hero-banner.jpg')",
          }}
        ></div>
        <div className="relative z-10 md:h-[498px] h-[400px] flex justify-center items-center   ">
          <span className='space-y-2 font-semibold md:text-6xl text-4xl text-white text-center'>
            <h1>Seamless Travel </h1>
            <h1>Experiences,</h1>
            <h1>Unforgettable </h1>
            <h1>Memories!</h1>
          </span>
        </div>
      </section>

      <section className='container max-w-[1200px] md:p-6 p-4 mx-auto'>
        <h2 className='text-4xl font-semibold mb-[30px]'>Tours</h2>
        <div className='space-y-12 px-2'>
          {Package.map((item, idx) => (
            <div key={idx + 1} className='shadow grid md:grid-cols-7 grid-cols-1 rounded-3xl overflow-hidden '>
              <div className='col-span-2'>
                <img src={item.img} alt={item.name} className='md:w-[300px] h-[220px] object-fill w-full md:rounded-3xl' />
              </div>
              <div className=' col-span-5 p-6 space-y-3'>
                <Link to={item.link} className='text-xl font-semibold hover:text-[#F36727]'>{item.name}</Link>
                <h4 className='font-semibold text-gray-500'>{item.price && item.price.map((price)=>(<>{price}</>))}</h4>
                <hr /><br />
                <Link to={item.link} className='bg-gradient-to-tr from-[#14499E] to-[#f27328] rounded-md px-4 py-2 text-white font-medium hover:border border-[#14499E] hover:text-[#14499E] hover:bg-none  transition duration-300 ease-in-out'>Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Tour