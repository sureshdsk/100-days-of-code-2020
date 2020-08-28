
export default function IndexPage() {
  return (
    <div className="bg-gray-100 flex">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img className="h-10" src="/img/logo.svg" alt="Workcation" />
          <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt="Woman workcationing on the beach" />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline" /><span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>
          <div className="mt-4 sm:mt-6">
            <a href="#" className="btn btn-indigo shadow-lg sm:text-base">Book your escape</a>
            <a href="#" className="ml-2 btn btn-gray sm:text-base">Learn more</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img className="absolute inset-0 h-full w-full object-cover object-center" src="/img/beach-work.jpg" alt="Woman workcationing on the beach" />
      </div>
    </div>
  )
} 
