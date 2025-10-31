import React from 'react'
import Grad from '../Background/Grad'
import Image from 'next/image'
const Body1 = () => {
  return (
    <div>
        <section class="text-gray-600 bg-white body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Domain</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 ">Comprehensive Solar Offerings: Tandem Perovskite–Silicon Cells, Semi‑Transparent Building‑Integrated Panels, and Expert Energy Consultancy Optimizing Panel Selection, Orientation, Inclination, and Grid Choices for Higher Energy Yield</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden flex justify-center">
        <Image alt="content" className="object-cover object-center" width={500} height={600} src="/tandem.jpg"/ >
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5   ssm:mx-10">Tandem Solar Cell</h2>
        <p class="text-base leading-relaxed mt-2 text-justify  ssm:mx-10">Tandem solar cells are actually two solar cells coupled together. The top solar cell is the perovskite layer which absorbs in the visible region and transmits near infrared light of the EM spectrum. The bottom layer is a silicon solar cell which absorbs the near infrared part of the EM spectrum. This allows them to produce more energy along the same area.</p>
        {/* <a class="text-indigo-500 inline-flex items-center mt-3  ssm:mx-20">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden  flex justify-center">
          <Image alt="content" class="object-cover object-center" width={500} height={600} src="/Integrated_pannels.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5 ssm:mx-10">Building Integrated Panels</h2>
        <p class="text-base leading-relaxed mt-2 text-justify  ssm:mx-10">Building energy consumption accounts for more than a third of world’s total energy consumption and a lot are yet to be built. So at PSI, we are developing semi-transparent perovskite panels which can be integrated in building on façades and other parts making them energy efficient aesthetically.</p>
        {/* <a class="text-indigo-500 inline-flex items-center mt-3  ssm:mx-20">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden  flex justify-center">
          <Image alt="content" class="object-cover object-center " width={500} height={600} src="/Energy_consultancy.jpg"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5 ssm:mx-10">Energy Consultancy</h2>
        <p class="text-base leading-relaxed mt-2 text-justify ssm:mx-10">Our expertise will ensure that you take the right decisions while moving to solar. We would make you informed about, number of panels needed, optimal panel orientation and inclination, type of panel you should opt, what to choose off-grid or on-grid metering system and other required knowledge.</p>
        {/* <a class="text-indigo-500 inline-flex items-center mt-3 ssm:mx-20">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Body1