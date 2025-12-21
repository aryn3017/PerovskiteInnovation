import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Background from "@/components/Background/Background";
class Gallery_ extends Component {
  render() {
    return (
      <>
      <Background/>
      < div className="backdrop-blur-2xl">
        
        <Carousel
          className="pt-16 bg-black bg-opacity-60"
          autoPlay
          interval={5000}
          infiniteLoop
          showThumbs={false}
        >
          <div >
            <Image alt="..." width={2900} height={1140} src="/gal1.png" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <Image alt="..." width={2900} height={1140} src="/Gal2.png" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <Image alt="..." width={2900} height={1140} src="/gal3.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <Image alt="..." width={2900} height={1140} src="/gal4.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <Image alt="..." width={2900} height={1140} src="/gal5.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <Image alt="..." width={2900} height={1140} src="/gal6.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>

        <section class="text-gray-600 body-font pb-10 ">
  <div class="container mx-auto flex px-5 py-10 mt-10 md:flex-row flex-col items-center bg-white bg-opacity-50 rounded-2xl">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:hidden">
      <iframe src="https://www.youtube-nocookie.com/embed/Z4kbcT8sTR4?si=o2z9uBb20yBqGQ9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ssm:hidden">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Z4kbcT8sTR4?si=o2z9uBb20yBqGQ9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Perovskite Innovation Featured in SANSAD TV
      </h1>
      <p class="mb-2 leading-relaxed">Prof. (Dr.) Somitra Satpati of IIT Roorkee is the Head of the Centre for Sustainable Energy in the Department of Physics. Dr. Satpati obtained his research degree from a university in the United States. He is working on perovskite solar modules, with the objective of developing perovskite solar panels.

Silicon solar panels convert approximately 20–22 percent of sunlight into electrical energy. Perovskite solar cells, on the other hand, can achieve efficiencies of up to 34 percent. Therefore, perovskite solar cells have become a major focus of global commercial interest.</p>
      {/* <div class="flex justify-center">
        <button class=" inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">learn more</button>
      </div> */}
    </div>
  </div>
  <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center mt-10 bg-white bg-opacity-50 rounded-2xl">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image  className="object-cover object-center rounded" width={1920} height={1080} alt="hero" src="/iocl.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">IOCL Start-Up Challenge Grant for Advancing Solar Window Technology
      </h1>
      <p class="mb-2 leading-relaxed">Perovskite Innovation Pvt Ltd, India&apos;s pioneering start-up specializing in indigenous perovskite solar cells manufacturing, and incubated within IIT Roorkee&apos;s esteemed Tides Business Incubation Center, proudly announces its receipt of the prestigious Indian Oil&apos;s Start-Up challenge award. This recognition is a testament to the innovative strides made by the team in developing low-cost solar window solutions, revolutionizing the landscape of renewable energy technology.</p>
      <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2019740&reg=3&lang=2" class="flex justify-center">
        <button class=" inline-flex text-white bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-700 hover:duration-500 rounded text-lg">learn more</button>
      </a>
    </div>
  </div>
  <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center mt-10 bg-white bg-opacity-50 rounded-2xl">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" width={1920} height={1080} alt="hero" src="/ani.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Breakthrough in Silicon-Perovskite Tandem Solar Cells, Driving India&apos;s Solar Atmanirbharta
      </h1>
      <p class="mb-2 leading-relaxed">Roorkee (Uttarakhand) [India], September 29: Indias march towards its ambitious 500 GW renewable energy target by 2030 has received a major boost with a breakthrough from the Indian Institute of Technology (IIT) Roorkee. A research team led by Prof. Soumitra Satapathi has successfully developed silicon-perovskite tandem solar cells achieving a record 30% power conversion efficiency (PCE)--a leap over the ~24% efficiency of conventional silicon modules.</p>
      <a href="https://www.aninews.in/news/business/iit-roorkee-achieves-breakthrough-in-silicon-perovskite-tandem-solar-cells-driving-indias-solar-atmanirbharta20250929131440/" class="flex justify-center">
        <button class=" inline-flex text-white bg-green-600 border-0 py-2 px-4 hover:duration-500  focus:outline-none hover:bg-green-700 rounded text-lg">learn more</button>
      </a>
    </div>
  </div>
</section>


        {/* <section className="text-gray-600 body-font pt-10 pb-10 backdrop-blur-2xl ">
          <div className="container px-5 py-24 mx-auto bg-white bg-opacity-60 rounded-lg">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-xl">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    1.3K
                  </h2>
                  <p className="leading-relaxed">Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    74
                  </h2>
                  <p className="leading-relaxed">Files</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    46
                  </h2>
                  <p className="leading-relaxed">Places</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div></>
    );
  }
}
export default Gallery_;
