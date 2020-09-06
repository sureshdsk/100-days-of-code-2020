import {useState} from "react";
import DestinationCard from '../components/DestinationCard'
import Sidebar from '../components/Sidebar'


function Dashboard({popularDestinations}) {
  
  return (
    <>
    <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8" >
              <h2 className="text-xl text-gray-900">Popular destinations</h2>
              <p className="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
              <div className="flex flex-wrap -mx-4">
                  { 
                    popularDestinations.map((destination, index) => {
                      return (
                        <div key={index} className="mt-6 w-full px-4 md:w-1/2">
                          <DestinationCard key={destination.city} destination={destination}/>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          </div>
          
        </div>
      </div>
     

    </>
  )
} 

Dashboard.getInitialProps = async () => {
  const popularDestinations = [
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/img/toronto.jpg',
          imageAlt: 'Toronto skyline',
        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: '/img/malibu.jpg',
          imageAlt: 'Cliff in Malibu',
        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: '/img/chicago.jpg',
          imageAlt: 'Chicago skyline',
        },
        {
          city: 'Seattle',
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: '/img/seattle.jpg',
          imageAlt: 'Seattle skyline',
        },
        {
          city: 'Colorado',
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: '/img/colorado.jpg',
          imageAlt: 'Lake in Colorado',
        },
        {
          city: 'Miami',
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: '/img/miami.jpg',
          imageAlt: 'Beach in Miami',
        },
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/img/toronto.jpg',
          imageAlt: 'Toronto skyline',
        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: '/img/malibu.jpg',
          imageAlt: 'Cliff in Malibu',
        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: '/img/chicago.jpg',
          imageAlt: 'Chicago skyline',
        },
        {
          city: 'Seattle',
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: '/img/seattle.jpg',
          imageAlt: 'Seattle skyline',
        },
        {
          city: 'Colorado',
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: '/img/colorado.jpg',
          imageAlt: 'Lake in Colorado',
        },
        {
          city: 'Miami',
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: '/img/miami.jpg',
          imageAlt: 'Beach in Miami',
        }
      ]
  return { 
      popularDestinations: popularDestinations 
    }
}

export default Dashboard;