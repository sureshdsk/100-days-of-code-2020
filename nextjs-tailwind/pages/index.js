
export default function IndexPage() {
  return (
    <div className="bg-gray-100">
        <div className="px-8 py-12">
          <img className="h-10" src="/img/logo.svg" alt="Workcation" />
          <img className="mt-6 rounded-lg shadow-xl" src="/img/beach-work.jpg" alt="Woman workcationing on the beach" />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
            You can work from anywhere.
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>
          <div className="mt-4">
            <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 text-sm text-white uppercase tracking-wider font-semibold">Book your escape</a>
          </div>
        </div>
      </div>
  )
}
