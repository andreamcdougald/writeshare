/* This example requires Tailwind CSS v2.0+ */
import feature1 from "../images/feature1.png";

import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";

export default function Features() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 text-left	">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 pb-11 pt-11">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  A beautiful place to get into your writing zone
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  Immersive audio and visuals designed to provide the ideal
                  environment you want to be in.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature1}
                alt="Atmospheres to help you focus"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Zero-formatting{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Remove the distraction of colour-picking and font-sizing.
                  Focus on the important stuff.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature2}
                alt="Achieve your writing goals"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="relative mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 pb-11 pt-11">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  One writing, endless formating possibilities{" "}
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  Let your work shine and show it off the way it deserves
                  without designing yourself. Our theme library allows you to
                  change the format in one click.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature3}
                alt="Atmospheres to help you focus"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Designer themes for every use case{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Whether it’s a blog post or a long novel, simply choose a
                  theme that fits your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature4}
                alt="Achieve your writing goals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
