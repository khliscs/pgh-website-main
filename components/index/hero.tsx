import Router from "next/router"

export default function HeroSection() {

  const handleClick = () => {
    Router.push("/login")
  }

  return (
    <div className="isolate z-0">
      <main>
        <div className="testclass">
        <div className="px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div>
              <div>
                <div className="text-4xl break-words font-bold sm:text-center sm:text-7xl text-grey-900">
                  SETI - 2025
                </div>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <button onClick={handleClick} className='ml-2 text-white px-4 py-2 text-base font-medium rounded bg-red-900 hover:bg-red-700 transition'>
                    Ticket kaufen &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
