import React from 'react'

function OldAppPromo() {
  return (
<section className="relative overflow-hidden bg-[#7B2CBF] rounded-[64px] mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-6 max-w-[1100px] lg:mx-auto py-4 md:py-6 lg:py-8">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
      {/* Left Text Section */}
      <div className="flex-1 text-white text-center lg:text-left lg:pl-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] font-bold leading-tight mb-3">
          <span className="block mb-1 lg:mb-12">Experience</span>
          <span className="block mb-1 lg:mb-12">the app</span>
          <span className="block">today!</span>
        </h2>

        <div className="flex justify-center lg:justify-start gap-8 mt-8 lg:mt-24">
          <button className="bg-[#E1957D] hover:bg-gray-900 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-[16px] flex items-center gap-2 transition-all">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </button>
          <button className="bg-[#E1957D] hover:bg-gray-900 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-[16px] flex items-center gap-2 transition-all">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Play Store
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 relative">
        <div className="relative z-10 transform rotate-0">
          <img
            src={app2}
            alt="Mobile app interface"
            className="w-full max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] mx-auto rounded-[16px] shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Background Elements */}
  <div className="absolute inset-0">
    {/* Protein Food Images */}
    <div className="absolute top-4 left-4 w-16 h-16">
      <img
        src="https://source.unsplash.com/100x100/?chicken"
        alt="Chicken"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="absolute top-4 right-4 w-16 h-16">
      <img
        src="https://source.unsplash.com/100x100/?fish"
        alt="Fish"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="absolute bottom-4 left-4 w-16 h-16">
      <img
        src="https://source.unsplash.com/100x100/?egg"
        alt="Egg"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="absolute bottom-4 right-4 w-16 h-16">
      <img
        src="https://source.unsplash.com/100x100/?nuts"
        alt="Nuts"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
</section>

    )
}

export default OldAppPromo