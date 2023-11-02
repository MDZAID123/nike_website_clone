import React from 'react'



import { CustomerReviews,Footer,Hero,PopularProducts,Services,SpecialOffers ,Subscribe,SuperQuality} from './sections';



// duplicate the above important statment for all the sections that we are using 
//but instead of doing importing diff component in different important compoent 
//we can do that in a single go


// to get the exact values of the css properties just ry and test thme side by side 
//need to import the functional component for the navbar
import Nav from './components/Nav';

const App = () => {
  return(

  


  <main className='relative'>
    {/* here we will have the navbar of our application */}
    {/* navbar will also be coming as a functional component */}
    <Nav/>

    <section className="xl:padding-l wide:padding-r padding-b">
    
      <Hero/>
    </section>

    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      
      {/* footer */}
      <Footer/>
      
    </section>





  </main>
  )

}

export default App;
