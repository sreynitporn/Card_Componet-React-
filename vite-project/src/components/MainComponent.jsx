import React from 'react'
import { ProductCardComponent } from './ProductCardComponent'
import { CTAComponent } from './CTACard'

const MainComponent = () => {
  return (
    <main className=' flex flex-col gap-5 '>
       <section className=' flex justify-center gap-5 '>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
       </section>
       <section className=' flex justify-center gap-5 '>
        <CTAComponent/>
        <CTAComponent/>
        <CTAComponent/>
        <CTAComponent/>

       </section>

    </main>
  )
}

export default MainComponent
