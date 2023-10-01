import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
    <div className='flex-1 '>
    <img src={offer} width={773} height={687} className='object-contain w-full' alt="" />
    </div>
    <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Special
          <span className="text-coral-red"> Offer</span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, we provide you with the best
          quality shoes.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to quality is what makes us stand out from the rest.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" text-color="text-slate-gray" borderColor="border-slate-gray"></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers