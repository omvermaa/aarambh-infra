import {
  Train,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Car,
  Building,
  Bed,
  BedDouble,
  Utensils,
  DoorOpen,
  Droplets,
} from "lucide-react";
import VirtualTour from "@/components/VirtualTour";
import CarouselDemo from "./Carousel";
import AmenitiesCarousel from "./AmenitiesCarousel";

const Property = () => {
  return (
    <div className="w-full bg-slate-50">
      {/* ==========================================
          1. ABOUT SECTION
      ========================================== */}
      <section
        id="about"
        className="py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="sm:flex sm:flex-col lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
                The Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl sm:text-center font-extrabold text-slate-900 mb-6 leading-tight">
              Where Modern Living Meets <br />{" "}
              <span className="text-amber-500">True Sukoon</span>.
            </h2>
            <iframe
              className="sm:h-[70vh] sm:w-auto h-50 mx-auto mb-10 aspect-video rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/fvPLKqLmzQA?si=YD32JBMhc7x0GKOW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <ul className="list-inside sm:mx-25 m-5">
              <li className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sukoon is an exclusive luxury villa gated enclave located in the
                peaceful surroundings of Sadulapur/Vaidpura Greater Noida West.
                We believe a home is shaped around the lives lived within it.
              </li>
              <li className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every detail is designed to bring comfort to elders, joy to
                children, and ease to everyday living—created for{" "}
                <span className="font-semibold text-slate-900">
                  every generation
                </span>
                .
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square sm:aspect-video sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <CarouselDemo />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-2xl font-bold mb-1">100%</p>
              <p className="text-gray-400 text-sm">Vastu Compliant Layouts </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. AMENITIES SECTION
      ========================================== */}
      <section
        id="amenities"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 pointer-events-none"></div>

        <div className="w-full mx-auto px-1 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-amber-400 font-bold tracking-widest uppercase mb-2">
              Exclusive Features
            </h2>
            <h3 className="text-[28px] mx-2 md:text-3xl font-extrabold">
              All Comforts Within Reach
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              From fitness to leisure, enjoy a township designed for a refined
              lifestyle.
            </p>
          </div>

          <AmenitiesCarousel />

          <div id="3d-tour" className="mt-24 mx-auto">
            <VirtualTour />
          </div>
        </div>
      </section>

      {/* ==========================================
          3. SPECIFICATIONS SECTION (Redesigned)
      ========================================== */}
      <section
        id="specifications"
        className="py-24 bg-white border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-16">
            Specifications
          </h2>

          <div
            id="specs-grid"
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          >
            {/* Left Column: Detailed Specs Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <Building
                  className="text-slate-700 shrink-0"
                  size={28}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2 leading-tight">
                    Living/Dinning Room/
                    <br />
                    Drawing Room
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Floor:</strong> Vitrified
                    Tiles (600m x 600m)
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Wall:</strong> O.B.D
                    Paints
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-slate-800">Ceiling:</strong>{" "}
                    Designer POP
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Bed
                  className="text-slate-700 shrink-0"
                  size={28}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Bedroom
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Floor:</strong> Vitrified
                    Tiles (600m x 600m)
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Wall:</strong> O.B.D
                    Paints
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-slate-800">Ceiling:</strong>{" "}
                    Designer POP
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BedDouble
                  className="text-slate-700 shrink-0"
                  size={28}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Master Bedroom
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Floor:</strong> Vitrified
                    Tiles (600m x 600m)
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Wall:</strong> O.B.D
                    Paints
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-slate-800">Ceiling:</strong>{" "}
                    Designer POP
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Utensils
                  className="text-slate-700 shrink-0"
                  size={28}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Kitchen
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Floor:</strong> Vitrified
                    Tiles (600m x 600m)
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong className="text-slate-800">Wall:</strong> O.B.D
                    Paints with border upto 2 ft, wall tiles above counter.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <DoorOpen
                  className="text-slate-700 shrink-0"
                  size={28}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    External/Internal Doors
                  </h4>
                  <p className="text-sm text-gray-600">
                    Hardwood Laminated Panel Sunmica
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Droplets
                  className="text-slate-700 shrink-0"
                  size={28}
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Fitting & Fixtures
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Branded China Ware Fixtures
                  </p>
                  <p className="text-sm text-gray-600">
                    Hot & Cold Water Pipeline
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Unlimited Freedom List */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                  Space with
                  <br />
                  Unlimited Freedom
                </h3>
                <ul className="space-y-4">
                  {[
                    "Vaastu Compliant",
                    "Complete Sewerage System",
                    "Street Light",
                    "RCC Road",
                    "Jacuzzi",
                    "Park and Full Of Greenery",
                    "Gym",
                    "Jogging Track",
                    "Badminton Court",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. LOCATION SECTION
      ========================================== */}
      <section
        id="location"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
                Connectivity
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
              Connected to Everything.
            </h3>
            <p className="text-gray-600 mb-8">
              Strategically located in Sadulapur/Vaidpura, Greater Noida West
              offering seamless access to major hubs.
            </p>

            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 cursor-default">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                  <Train size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-slate-900">Transport</h5>
                    <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full text-xs font-medium text-slate-600">
                      <Car size={12} /> 10 min
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Maripat Railway Station || Proposed 6 lane Highway
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 cursor-default">
                <div className="bg-pink-100 p-3 rounded-full text-pink-600 group-hover:scale-110 transition-transform shrink-0">
                  <ShoppingBag size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-slate-900">Shopping</h5>
                    <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full text-xs font-medium text-slate-600">
                      <Car size={12} /> 10 min
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Gaur City Mall || London Mart
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 cursor-default">
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:scale-110 transition-transform shrink-0">
                  <Stethoscope size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-slate-900">Healthcare</h5>
                    <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full text-xs font-medium text-slate-600">
                      <Car size={12} /> 5 min
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Rajesh Pilot Hospital || Yatharth Super Speciality Hospital
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 cursor-default">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600 group-hover:scale-110 transition-transform shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-slate-900">Education</h5>
                    <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full text-xs font-medium text-slate-600">
                      <Car size={12} /> 5 min
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Shri Ram Global || Trinity School
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center lg:w-2/3 h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative group">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
              <iframe
                className="relative h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.460547630334!2d77.48982507549911!3d28.58595747569022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzA5LjUiTiA3N8KwMjknMzIuNiJF!5e0!3m2!1sen!2sin!4v1771683165473!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs z-10 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-slate-900">Sukoon Villas</p>
                  <p className="text-xs text-gray-500">
                    Sadulapur, Greater Noida West
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.5859575,77.4898251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto bg-slate-100 p-2 rounded-full hover:bg-slate-200"
                >
                  <ArrowRight size={16} className="text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
