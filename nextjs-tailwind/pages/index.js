import {useState} from "react";
import DestinationCard from '../components/DestinationCard'
import Navbar from '../components/Navbar'
import BookModal from '../components/BookModal'


function IndexPage({popularDestinations}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar/>
      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt="Woman workcationing on the beach" />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" /><span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="btn btn-indigo shadow-lg sm:text-base" onClick={() => setShowModal(true)}>Book your escape</a>
              <a href="#" className="ml-2 btn btn-gray sm:text-base">Learn more</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img className="absolute inset-0 h-full w-full object-cover object-center z-0" src="/img/beach-work.jpg" alt="Woman workcationing on the beach" />
        </div>
      </div>
      <div>
        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8" >
          <h2 className="text-xl text-gray-900">Popular destinations</h2>
          <p className="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
          <div className="flex flex-wrap -mx-4">
              { 
                popularDestinations.map((destination, index) => {
                  return (
                    <div key={index} className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
                      <DestinationCard key={destination.city} destination={destination}/>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
      
      <BookModal showModal={showModal} setShowModal={setShowModal} />

    </>
  )
} 

IndexPage.getInitialProps = async () => {
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
      ]
  return { 
      popularDestinations: popularDestinations 
    }
}

export default IndexPage;