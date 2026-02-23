import {
  Train,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Building,
  Bed,
  Lock,
  BedDouble,
  Utensils,
  DoorOpen,
  Droplets,
  MapPin,
  Users,
  Leaf,
} from "lucide-react";
import VirtualTour from "@/components/VirtualTour";
import CarouselDemo from "./Carousel";
import AmenitiesCarousel from "./AmenitiesCarousel";
import FadeIn from "./FadeIn";

const Property = ({onOpenEnquiry}: {onOpenEnquiry: () => void}) => {
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
          <FadeIn direction="right" className="w-full">
          <div className="w-full">
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
              src="https://www.youtube.com/embed/fvPLKqLmzQA?si=YD32JBMhc7x0GKOW&autoplay=1&mute=1"
              title="YouTube video player"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            
            <div className="space-y-8 mt-8 px-2 mb-5 sm:px-50">
              <div className="flex gap-5 items-start group">
                <div className="shrink-0 mt-1 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors duration-300 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Prime Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Sukoon is an exclusive luxury villa gated enclave located in the peaceful surroundings of Sadulapur/Vaidpura Greater Noida West. We believe a home is shaped around the lives lived within it.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="shrink-0 mt-1 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors duration-300 shadow-sm">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Designed for Everyone</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every detail is designed to bring comfort to elders, joy to children, and ease to everyday living—created for <span className="font-semibold text-slate-900">every generation</span>.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="shrink-0 mt-1 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors duration-300 shadow-sm">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Nature & Harmony</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Experience a lifestyle deeply connected to nature with lush green parks, Vastu-compliant architecture, and open spaces that breathe life into your daily routine.
                  </p>
                </div>
              </div>
            </div>
          </div> 
          </FadeIn>

          <FadeIn direction="left" delay={200} className="w-full flex justify-center">
          <div className="relative w-full sm:w-auto">
            <div className="aspect-square sm:aspect-video sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <CarouselDemo />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-2xl font-bold mb-1">100%</p>
              <p className="text-gray-400 text-sm">Vastu Compliant Layouts </p>
            </div>
          </div>
          </FadeIn>
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
          <FadeIn direction="up">
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
          </FadeIn>

          <FadeIn delay={200}>
          <AmenitiesCarousel />
          </FadeIn>

          <FadeIn delay={400}>
          <div id="3d-tour" className="mt-24 mx-auto">
            <VirtualTour />
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          3. SPECIFICATIONS SECTION (Redesigned)
      ========================================== */}
      <section
        id="specifications"
        className="py-16 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn><div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
                Finest Details
              </span>
              <span className="h-px w-8 bg-amber-500"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Specifications & Features
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Crafted with precision and premium materials to ensure a lifestyle of elegance and durability.
            </p>
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Detailed Specs Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card 1: Living Room */}
              <FadeIn delay={100} className="h-full"><div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
                  <Building size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Living / Dining Room</h4>
                <ul className="space-y-2">
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Flooring</span>
                    <span className="text-slate-900 font-medium text-right">Vitrified Tiles (600x600)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Walls</span>
                    <span className="text-slate-900 font-medium text-right">O.B.D Paints</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm">
                    <span className="text-slate-500">Ceiling</span>
                    <span className="text-slate-900 font-medium text-right">Designer POP</span>
                  </li>
                </ul>
              </div></FadeIn>

              {/* Card 2: Bedroom */}
              <FadeIn delay={200} className="h-full"><div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
                  <Bed size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Bedroom</h4>
                <ul className="space-y-3">
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Flooring</span>
                    <span className="text-slate-900 font-medium text-right">Vitrified Tiles (600x600)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Walls</span>
                    <span className="text-slate-900 font-medium text-right">O.B.D Paints</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm">
                    <span className="text-slate-500">Ceiling</span>
                    <span className="text-slate-900 font-medium text-right">Designer POP</span>
                  </li>
                </ul>
              </div></FadeIn>

              {/* Card 3: Master Bedroom */}
              <FadeIn delay={300} className="h-full"><div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
                  <BedDouble size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Master Bedroom</h4>
                <ul className="space-y-2">
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Flooring</span>
                    <span className="text-slate-900 font-medium text-right">Vitrified Tiles (600x600)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Walls</span>
                    <span className="text-slate-900 font-medium text-right">O.B.D Paints</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm">
                    <span className="text-slate-500">Ceiling</span>
                    <span className="text-slate-900 font-medium text-right">Designer POP</span>
                  </li>
                </ul>
              </div></FadeIn>

              {/* Card 4: Kitchen */}
              <FadeIn delay={400} className="h-full"><div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
                  <Utensils size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Kitchen</h4>
                <ul className="space-y-2">
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2">
                    <span className="text-slate-500">Flooring</span>
                    <span className="text-slate-900 font-medium text-right">Vitrified Tiles (600x600)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between text-sm">
                    <span className="text-slate-500">Walls</span>
                    <span className="text-slate-900 font-medium text-right">O.B.D Paints, Tiles above counter</span>
                  </li>
                </ul>
              </div></FadeIn>

              {/* Card 5: Doors */}
              <FadeIn delay={500} className="h-full"><div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
                  <DoorOpen size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Doors & Windows</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Premium Hardwood Laminated Panels with Sunmica finish for both external and internal doors.
                </p>
              </div></FadeIn>

              {/* Card 6: Fittings */}
              <FadeIn delay={600} className="h-full"><div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
                  <Droplets size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Fittings & Fixtures</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    Branded China Ware Fixtures
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    Hot & Cold Water Pipeline
                  </li>
                </ul>
              </div></FadeIn>

            </div>

            {/* Right Column: Highlights */}
            <div className="lg:col-span-1">
              <FadeIn direction="left" delay={300} className="sticky top-24">
              <div className="bg-slate-900 text-white p-6 rounded-2xl sticky top-24 shadow-xl">
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-1">Project Highlights</h3>
                    <p className="text-slate-400 text-sm">Experience a lifestyle of unlimited freedom.</p>
                </div>
                
                <ul className="space-y-0 divide-y divide-slate-800">
                  {[
                    "Vaastu Compliant Layouts",
                    "Complete Sewerage System",
                    "LED Street Lighting",
                    "Wide RCC Roads",
                    "Private Jacuzzi",
                    "Lush Green Parks",
                    "Modern Gymnasium",
                    "Jogging Track",
                    "Badminton Court",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="py-3 flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white hover:pl-2 active:text-white active:pl-2 transition-all"
                    >
                      <span className="text-amber-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-amber-500">100%</div>
                        <div className="text-sm text-slate-400 leading-tight">
                            Quality<br/>Assurance
                        </div>
                    </div>
                </div>
              </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. FLOOR PLAN & MASTER PLAN (GATED CONTENT)
      ========================================== */}
      <section
        id="floor-plans"
        className="py-24 bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 font-serif">
              Sukoon Villas Floor Plan & Master Plan
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Masterplan Designed for Luxury, Comfort, and Space
            </p>
          </div>
          </FadeIn>

          <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Floor Plan */}
            <div
              onClick={onOpenEnquiry}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
                {/* Simulated blurred floorplan image */}
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop"
                  alt="Floor Plan"
                  className="h-full w-full object-cover blur-[6px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 group-active:bg-slate-900/40 transition-colors duration-300">
                  <div className="bg-amber-400 text-slate-900 p-4 rounded-full shadow-lg mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300">
                    <Lock size={24} />
                  </div>
                  <span className="text-slate-900 bg-white/90 backdrop-blur px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 delay-75">
                    Click to Unlock
                  </span>
                </div>
              </div>
              <div className="bg-slate-900 py-4 text-center mt-auto">
                <h4 className="text-lg font-medium text-white tracking-wide">
                  Floor Plan Details
                </h4>
              </div>
            </div>

            {/* Card 2: Master Plan */}
            <div
              onClick={onOpenEnquiry}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
                {/* Simulated blurred masterplan image */}
                <img
                  src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=1470&auto=format&fit=crop"
                  alt="Master Plan"
                  className="h-full w-full object-cover blur-[6px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 group-active:bg-slate-900/40 transition-colors duration-300">
                  <div className="bg-amber-400 text-slate-900 p-4 rounded-full shadow-lg mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300">
                    <Lock size={24} />
                  </div>
                  <span className="text-slate-900 bg-white/90 backdrop-blur px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 delay-75">
                    Click to Unlock
                  </span>
                </div>
              </div>
              <div className="bg-slate-900 py-4 text-center mt-auto">
                <h4 className="text-lg font-medium text-white tracking-wide">
                  Master Plan Details
                </h4>
              </div>
            </div>

            {/* Card 3: Payment Plan */}
            <div
              onClick={onOpenEnquiry}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
                {/* Simulated blurred document image */}
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1470&auto=format&fit=crop"
                  alt="Payment Plan"
                  className="h-full w-full object-cover blur-[6px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 group-active:bg-slate-900/40 transition-colors duration-300">
                  <div className="bg-amber-400 text-slate-900 p-4 rounded-full shadow-lg mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300">
                    <Lock size={24} />
                  </div>
                  <span className="text-slate-900 bg-white/90 backdrop-blur px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 delay-75">
                    Click to Unlock
                  </span>
                </div>
              </div>
              <div className="bg-slate-900 py-4 text-center mt-auto">
                <h4 className="text-lg font-medium text-white tracking-wide">
                  Payment Plan Details
                </h4>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          4. LOCATION SECTION
      ========================================== */}
      <section
        id="location"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="flex flex-col items-center lg:flex-row gap-12">
          <FadeIn direction="right" className="w-full lg:w-1/3">
          <div className="w-full">
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

            <div className="space-y-8">
              {/* Transport */}
              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
                  <Train size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-lg font-bold text-slate-900">Transport</h5>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md">
                      Walking Distance
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Maripat Railway Station • Proposed 6 lane Highway
                  </p>
                </div>
              </div>

              {/* Healthcare */}
              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
                  <Stethoscope size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-lg font-bold text-slate-900">Healthcare</h5>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md">
                      Walking Distance
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Rajesh Pilot Hospital • Yatharth Super Speciality Hospital
                  </p>
                </div>
              </div>

              {/* Shopping */}
              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
                  <ShoppingBag size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-lg font-bold text-slate-900">Shopping</h5>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md">
                      10 min
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Gaur City Mall • London Mart
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex gap-5 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
                  <GraduationCap size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-lg font-bold text-slate-900">Education</h5>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md">
                      5 min
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Shri Ram Global • Trinity School
                  </p>
                </div>
              </div>
            </div>
          </div></FadeIn>

          <FadeIn direction="left" delay={200} className="w-full lg:w-2/3">
          <div className="w-full flex justify-center items-center lg:w-full h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative group">
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
                  className="ml-auto bg-slate-100 p-2 rounded-full hover:bg-slate-200 active:bg-slate-200"
                >
                  <ArrowRight size={16} className="text-slate-600" />
                </a>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Property;
