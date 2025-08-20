import React from 'react'
import GenericCard from "./GenericCard";
import AnchorButton from '../global/AnchorButton';

const NewsAndEvents = () => {
  return (
     <section className="px-4 text-center bg-[#eeede9] pt-16 pb-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl mb-2 lg:text-4xl uppercase">News & <span className='font-bold'>Events</span></h1>
        <p className='font-semibold text-xl mb-3'>Stay up-to-date with the latest from Nanhi Kali</p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
         <GenericCard/>
         <GenericCard/>
         <GenericCard/>
        </div>
        <div className="flex justify-center gap-12">
          <AnchorButton content={"More News & Events"}/>
          <AnchorButton content={"Become a Donor"}/>
        </div>
      </div>
   </section>
  )
}

export default NewsAndEvents