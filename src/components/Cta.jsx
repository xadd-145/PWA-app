import React from 'react'
import A2hs from './A2hs'

export default function Cta() {
   return (
    // { /* CTA Section */ }
    <section id="cta" className="bg-regal-blue">
      {/*  Flex Container  */}
      <div
        className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        {/*  Heading  */}
        <h2
          className="text-5xl font-bold leading-tight text-white md:text-4xl md:max-w-xl md:text-left text-center" 
        >
          <center>Dine With Us Today!</center>
        </h2>
        <A2hs />
      </div>
    </section>
    )
   
}
