
import Link from "next/link";
import Image from "next/image";

const Coming = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <figure className="h-[630px] w-full">
            <Image
              width={1519}
              height={712}
              className="w-full h-full object-cover"
              src="/images/gradient.jpg"
              alt="gradient"
            />
          </figure>
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <figure className="h-[630px] w-full">
            <Image
              width={1519}
              height={712}
              src="/images/gradient_dark.jpg"
              alt="gradient dark"
              className="w-full h-full object-cover"
            />
          </figure>
        </picture>

        <div className="container">
          <div className="py-24 text-center">
            <h1 className="text-jacarta-700 font-display mb-6 text-5xl dark:text-white lg:text-6xl xl:text-7xl">
              Caraiz
            </h1>
            <p className="font-display dark:text-jacarta-200 mb-8 text-lg">
            Platform focused on providing added value to the resell of cars by offering traceability and insight in the life of a car, increasing therefore the transparency and subsequnt value of a resell. 
            </p>
            <div className="inline-flex space-x-4">
              <Link
                href="#"
                className="bg-accent shadow-accent-volume hover:bg-accent-dark w-50 rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Coming Soon
              </Link>
           
            </div>
          </div>

          
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Coming;
