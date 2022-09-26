import heroImg from "../images/face.png";
import ShowPrice from "./ShowPrice";
import { Signup } from "./Mailchimp";

export default function Hero() {
  return (
    <div className="relative bg-cream">
      <main className="lg:relative">
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-2/5">
          <img
            className="lg:rounded-bl-[120px]

            absolute inset-0 h-full w-full object-cover"
            src={heroImg}
            alt=""
          />
        </div>

        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pb-[14rem] lg:pt-24 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <span className="inline font-bold text-3xl text-sage">
              Writeshare
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Write once, create endlessly
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
              Manually formatting documents is a thing of the past. Experience
              the freedom of only writing once, and sharing in any format you
              like.
            </p>
            <hr className="block lg:hidden py-5 mt-9" />
            <div className="grid w-full h-8 grid-cols-[1fr_1fr_fr_1fr] lg:grid-cols-1">
              <div></div>
              <div className="min-w-max col-span-2 mt-7">
                <ShowPrice />
              </div>
              <div></div>
            </div>

            <div className="py-8 mt-8 lg:absolute">
              <Signup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
