import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import svgPaths from "../../imports/svg-dwixiiytpe";
import clsx from "clsx";
import imgRectangle65 from "figma:asset/48f049f834ab317462ef25844d3cc0e4b93fa06b.png";
import imgRectangle66 from "figma:asset/922abc3b70f36c651fcd83e676ae66906a9b69ae.png";
import imgRectangle67 from "figma:asset/31fc434421bcac0daa44b9774a8ac8c8a02451ad.png";
import imgRectangle40 from "figma:asset/ac0620103f66b0ec1facb234de9e874e8057ac0e.png";
import imgRectangle37 from "figma:asset/183d9d9ad9413595396bce93bf669145d62aca27.png";
import imgRectangle38 from "figma:asset/9e24839f07201494ad134c2c9fac751b2027624f.png";
import imgRectangle39 from "figma:asset/85341b6c3df379a7dd55ae35d043778e948450ad.png";
import imgRectangle36 from "figma:asset/5753f46291b137c85e84ff57026b85c48f5a9fb8.png";
import imgRectangle41 from "figma:asset/1eeabd034e1f5edfaf7bc8ae7419e24f47bfeaab.png";
import { ReservationModal } from './ReservationModal';
import { LoadingScreen } from './LoadingScreen';

const heroImages = [imgRectangle65, imgRectangle66, imgRectangle67];
const roomImages = [imgRectangle40, imgRectangle37, imgRectangle38, imgRectangle39];

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[19.938px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9384 19.9384">
        {children}
      </svg>
    </div>
  );
}

function LogosInstagramIcon() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_1_6)" id="logos:instagram-icon">
        <path d={svgPaths.p2c8c2f60} fill="var(--fill-0, #0A0A08)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_6">
          <rect fill="white" height="19.9384" width="19.9384" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

function QlementineIconsFacebook() {
  return (
    <Wrapper2>
      <g clipPath="url(#clip0_1_3)" id="qlementine-icons:facebook-16">
        <path clipRule="evenodd" d={svgPaths.p3a742500} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect fill="white" height="19.9384" width="19.9384" />
        </clipPath>
      </defs>
    </Wrapper2>
  );
}

export default function InteractiveSangreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'KO' | 'EN'>('KO');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [roomScrollPosition, setRoomScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollRooms = (direction: 'left' | 'right') => {
    const scrollAmount = 450;
    setRoomScrollPosition(prev => {
      if (direction === 'right') {
        return Math.min(prev + scrollAmount, (roomImages.length - 1) * scrollAmount);
      } else {
        return Math.max(prev - scrollAmount, 0);
      }
    });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <header className="bg-[#709474] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.h1 
              className="text-2xl font-['Inria_Serif'] font-bold text-[#f4f4f4] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              SANGREEN
            </motion.h1>
            
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-4">
                {['KO', 'EN'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as 'KO' | 'EN')}
                    className={clsx(
                      "font-['Inter'] font-semibold text-lg transition-all",
                      language === lang ? 'text-[#f4f4f4] scale-110' : 'text-[#f4f4f4]/60 hover:text-[#f4f4f4]'
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="md:hidden text-[#f4f4f4]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#5a7a5e] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {['KO', 'EN'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang as 'KO' | 'EN');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-[#f4f4f4] hover:bg-[#709474] rounded"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Carousel */}
      <section className="relative h-[400px] md:h-[600px] lg:h-[755px] overflow-hidden bg-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img 
              src={heroImages[currentSlide]} 
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-[#709474]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-[#709474]" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              )}
            />
          ))}
        </div>

        {/* Reservation Quick Access */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
        >
          <button
            onClick={() => setReservationOpen(true)}
            className="bg-white hover:bg-gray-50 px-8 py-4 rounded-lg shadow-xl transition-all hover:shadow-2xl"
          >
            <span className="font-['Noto_Sans_KR'] text-[#333] text-lg font-medium">
              예약하기
            </span>
          </button>
        </motion.div>
      </section>

      {/* Room List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="font-['NanumGothic'] font-bold text-3xl md:text-4xl text-black">
              Room List
            </h2>
            <p className="font-['Noto_Sans_KR'] text-[#555] text-lg md:text-xl max-w-2xl">
              지친 일상 속 자연을 느낄 수 있는 산그린펜션의 객실입니다.
            </p>
          </div>
          <button className="hidden md:block font-['Noto_Sans_KR'] text-[#555] hover:text-[#709474] transition-colors">
            Detail &gt;
          </button>
        </div>

        {/* Room Cards Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 md:gap-12"
              animate={{ x: -roomScrollPosition }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {roomImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex-shrink-0 w-72 md:w-96 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Room ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="font-['Noto_Sans_KR'] font-bold text-xl mb-2">
                      Room {101 + index}
                    </h3>
                    <p className="font-['Noto_Sans_KR'] text-[#555]">
                      자연과 함께하는 편안한 휴식 공간
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Controls */}
          {roomScrollPosition > 0 && (
            <button
              onClick={() => scrollRooms('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6 text-[#709474]" />
            </button>
          )}
          {roomScrollPosition < (roomImages.length - 1) * 450 && (
            <button
              onClick={() => scrollRooms('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6 text-[#709474]" />
            </button>
          )}
        </div>
      </section>

      {/* Special Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-4">
              <h2 className="font-['NanumGothic'] font-bold text-3xl md:text-4xl text-black">
                Special
              </h2>
              <p className="font-['Noto_Sans_KR'] text-[#555] text-lg md:text-xl max-w-2xl">
                산그린 펜션의 부대시설과 특장점을 확인해보세요.
              </p>
            </div>
            <button className="hidden md:block font-['Noto_Sans_KR'] text-[#555] hover:text-[#709474] transition-colors">
              Detail &gt;
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src={imgRectangle36} 
              alt="Swimming Pool"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="bg-white p-8 md:p-12">
              <h3 className="font-['Inter'] font-bold text-2xl md:text-3xl text-[#463535] mb-6">
                Main Swimming Pool
              </h3>
              <p className="font-['Noto_Sans_KR'] text-[#555] text-lg leading-relaxed">
                깨끗하고 넓은 수영 공간에서 가족, 친구들과 함께 시원한 물놀이를 즐겨보세요. 
                투명카약을 수영장에서 즐기며 물 위를 떠다니는 특별한 경험을 만끽해보세요.
                <br /><br />
                * 오후 3시~ 오후 8시까지 하절기에만 운영합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tour Spot Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="font-['NanumGothic'] font-bold text-3xl md:text-4xl text-black">
              Tour Spot
            </h2>
            <p className="font-['Noto_Sans_KR'] text-[#555] text-lg md:text-xl">
              펜션 근처 주요 관광지 정보를 확인해보세요!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="font-['NanumSquare'] font-bold text-2xl md:text-3xl text-[#555]">
                남이섬
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[#555] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-['Noto_Sans_KR'] text-[#555] text-lg">
                    ���원도 춘천시 남산면 남이섬길1
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[#555] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-['Noto_Sans_KR'] text-[#555] text-lg">
                    펜션에서 약 34km, 차량 약 50분 거리
                  </p>
                </div>
              </div>

              <p className="font-['Noto_Sans_KR'] text-[#555] text-lg">
                #문화예술의섬 #생명의섬 #남이섬 #나미나라공화국
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src={imgRectangle41} 
                alt="Nami Island"
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-['Noto_Sans_KR'] text-2xl md:text-3xl font-medium">
                SANGREEN
              </h3>
              <div className="space-y-2 font-['Noto_Sans_KR'] text-[#555] text-sm">
                <p>경기도 가평군 조종면 현등사길 35-9, 산그린펜션</p>
                <p>대표자 : 이엽  |  E : sidezzz@naver.com</p>
                <p>T : 031-584-5748  |  P : 010-2206-5748</p>
              </div>
              <p className="font-['Noto_Sans_KR'] text-[#555] text-xs">
                Copyright ⓒ 산그린펜션 All rights reserved.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-6">
                <button className="font-['Noto_Sans_KR'] text-[#555] hover:text-[#709474] transition-colors">
                  고객센터
                </button>
                <button className="font-['Noto_Sans_KR'] text-[#555] hover:text-[#709474] transition-colors">
                  이용약관
                </button>
                <button className="font-['Noto_Sans_KR'] text-[#555] hover:text-[#709474] transition-colors">
                  개인정보처리방침
                </button>
                <button className="font-['Noto_Sans_KR'] text-[#555] hover:text-[#709474] transition-colors">
                  Contact Us
                </button>
              </div>

              <div className="flex gap-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <LogosInstagramIcon />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <QlementineIconsFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Reservation Modal */}
      <ReservationModal 
        open={reservationOpen}
        onOpenChange={setReservationOpen}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
    </div>
  );
}