import PropertyCard from '../components/PropertyCard'

function ListPropertiesPage({property}) {
  return (
    <>
      <div className="antialiased text-gray-900">
        <div className="bg-gray-200 min-h-screen p-16 flex flex-col justify-center">
            <PropertyCard property={property} />
        </div>
    </div>
    </>
  )
} 

ListPropertiesPage.getInitialProps = async () => {
  const property = {
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: "Modern home in city center",
    priceInCents: 190000,
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }
  return { 
    property: property 
    }
}

export default ListPropertiesPage;