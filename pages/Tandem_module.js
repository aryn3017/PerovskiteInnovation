import React from "react";
import Image from "next/image";
import Background from "@/components/Background/Background";
const Tandem_module = () => {
  return (
    <div className="bg-black bg-opacity-20">
      <Background/>
    <div className=" backdrop-blur-2xl">

      {/* #### 1111111111111 */}

      <div className="sm:grid sm:grid-cols-3 gap-4 py-5 sm:px-5 pt-28 justify-center">
        <div>
          <Image
            className="rounded-xl ssm:px-5 ssm:pb-2"
            alt="tandem_module"
            width={800}
            height={600}
            src="/tandem_module.jpg"
          />
        </div>
        <div className="flex flex-col col-span-2 px-5 items-center bg-white bg-opacity-30 rounded-xl">
          <p className="font-limelight sm:text-2xl text-lg font-semibold py-5">
            Tandem Solar Cell Technology
          </p>
          <p className="sm:px-10">
            Our research group at IIT Roorkee is dedicated to developing
            high-efficiency perovskite based tandem solar cells, leveraging the
            exceptional optoelectronic properties of metal halide perovskites—a
            novel class of materials with tunable bandgaps, low non-radiative
            recombination losses, and cost-effective fabrication methods. By
            integrating perovskites with silicon or other absorbers in tandem
            architectures, we aim to surpass the efficiency limits of
            single-junction solar cells. Our team actively investigates optical
            and electrical loss mechanisms and employs advanced material design,
            interface engineering, and machine learning-driven simulations to
            optimize performance.
          </p>
          <ul className="mt-10 sm:px-10 pb-5">
            <p
              className="font-semibold pb-5
          "
            >
              We have made significant progress in both four-terminal (4T) and
              two-terminal (2T) tandem solar cells:
            </p>
            <li className="list-disc">
              4T Tandem Solar Cells: Our semi-transparent perovskite solar cell
              (ST-PSC) stacked over a hybrid heterojunction silicon (HHSC) solar
              cell has demonstrated a 41% increase in power conversion
              efficiency (PCE) over standalone silicon devices.
            </li>
            <li className="list-disc">
              2T Monolithic Tandem Solar Cells: We are actively working on
              monolithic perovskite-silicon tandem devices, where the two
              sub-cells are electronically integrated, enhancing efficiency,
              stability, and commercial scalability. Our goal is to achieve PCEs
              exceeding 30% through optimized charge recombination layers and
              optical management strategies.
            </li>
          </ul>
        </div>
      </div>

      {/* ####         2222222 */}

      <div className="sm:grid sm:grid-cols-3 gap-4 py-5 sm:px-5 justify-center">
        <div>
          <Image
            className="rounded-xl ssm:px-5  ssm:pb-2"
            alt="tandem_module"
            width={800}
            height={600}
            src="/semi_trans.jpg"
          />
        </div>
        <div className="flex flex-col col-span-2 px-5 items-center bg-white bg-opacity-30 rounded-xl">
          <p className="font-limelight sm:text-2xl text-lg font-semibold py-5">
            Semi-transparent Perovskite Solar Cells
          </p>
          <p className="sm:px-10">
            Our research group at IIT Roorkee is at the forefront of developing semi-transparent perovskite solar cells (ST-PSCs), a key technology for building-integrated photovoltaics (BIPV). By integrating solar cells directly into building facades and windows, BIPV offers a revolutionary approach to clean energy generation. The exceptional optoelectronic properties of metal halide perovskites, including their tunable bandgaps, high absorption coefficient, and solution-based fabrication, make them ideal for this application. Our work focuses on engineering these materials and devices to achieve the perfect balance between high power conversion efficiency (PCE) and a high average visible transparency (AVT).
          </p>
          <ul className="mt-10 sm:px-10 pb-5">
            <p
              className="font-semibold pb-5
          "
            >
              We have achieved a significant milestone in the field of ST-PSCs: Our ST-PSCs have demonstrated an efficiency of greater than 15% while maintaining an AVT of over 30%. This achievement is a major step toward making solar windows a viable commercial reality.
            </p>
            
          </ul>
        </div>
      </div>

      {/* ############  333333 */}

      <div className="sm:grid sm:grid-cols-3 gap-4 py-5 sm:px-5  justify-center">
        <div>
          <Image
            className="rounded-xl ssm:px-5 ssm:pb-2"
            alt="tandem_module"
            width={800}
            height={600}
            src="/semi_trans2.jpg"
          />
        </div>
        <div className="flex flex-col col-span-2 px-5 items-center bg-white bg-opacity-30 rounded-xl">
          <p className="font-limelight sm:text-2xl text-lg font-semibold py-5">
            Indoor Photovoltaics
          </p>
          <p className="sm:px-10">
            Our group is working on the development of perovskite and perovskite-inspired materials, including ruddorfites and ternary chalcogenides, for indoor photovoltaics. These materials possess tunable bandgaps and exhibit remarkable photophysical properties, which we are concurrently investigating for potential applications in optoelectronics.

The growing significance of indoor photovoltaics (IPV) lies in its ability to power low-energy devices, particularly within the rapidly expanding Internet of Things (IoT) ecosystem. Our focus on both lead and lead-free perovskite-based systems for indoor photovoltaics aims to enhance performance, sustainability, and environmental safety, leveraging the superior light-harvesting properties of perovskites while addressing toxicity and long-term stability concerns.
          </p>
          
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 gap-4 py-5 sm:px-5  justify-center">
        <div>
          <Image
            className="rounded-xl ssm:px-5 ssm:pb-2"
            alt="tandem_module"
            width={800}
            height={600}
            src="/large_module.jpg"
          />
        </div>
        <div className="flex flex-col col-span-2 px-5 items-center bg-white bg-opacity-30 rounded-xl">
          <p className="font-limelight sm:text-2xl text-lg font-semibold py-5">
            Large-Scale Fabrication and Industrial Collaboration
          </p>
          <p className="sm:px-10">
            Our research is supported by a state-of-the-art large-scale fabrication facility, enabling scalable device processing using thermal evaporation, sputtering, solution-based deposition, such as slot die coating and screen-printing techniques. This infrastructure allows us to transition from lab-scale prototypes to industrially relevant device fabrication, a crucial step toward commercializing perovskite tandem solar cells.

We are also actively collaborating with GAIL (India) Limited on an industry-driven project to develop high-efficiency perovskite-silicon multi-junction solar cells. As part of this initiative, we are working toward fabricating silicon-perovskite 4T tandem solar cells with PCE {'>'} 30% and large-area (10 cm × 10 cm) devices. This partnership is expected to accelerate the commercial adoption of tandem solar technology and contribute to India’s transition toward sustainable energy solutions.
          </p>
          
        </div>
      </div>
      
    </div></div>
  );
};

export default Tandem_module;
