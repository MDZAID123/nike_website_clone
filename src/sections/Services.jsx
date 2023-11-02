import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from "../constants"
// se the ui design of the service section 
//it appears that the service section is nothing but 
//when to use which class accordingly
// one type of component repeating multiple time in acolumns
const Services = () => {
  return (
  <section className='max-container flex justify-center flex-wrap gap-9'>
    {/* inside this section we need to map over all the services */}
    {services.map((services)=>(
      <ServiceCard key={services.label} {...services}/>
    ))}
  </section>
  )
}

export default Services
