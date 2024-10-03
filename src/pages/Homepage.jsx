import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAll from '../components/ViewAll'

const Homepage = () => {
  return (
 <>
 <Hero/>
 <Homecards/>
 <JobListings isHome={true}/>
 <ViewAll/>
 </>
  )
}

export default Homepage
