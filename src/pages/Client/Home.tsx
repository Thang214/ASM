import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import anh6 from "../../image/AdobeStock_204287225_Preview 1.png";
import anh10 from "../../image/bfdsA 1.png";
import gb4 from "../../image/dwdwqa 1.png";
import anh9 from "../../image/ffgdsa 1.png";
import anh5 from "../../image/fgrgthht 1.png";
import anh1 from "../../image/fwfqq 1.png";
import anh8 from "../../image/gggrrr 1.png";
import anh7 from "../../image/gtgre 1.png";
import anh4 from "../../image/hhy 1.png";
import anh3 from "../../image/hththr 1.png";
import gb3 from "../../image/htrtggh 1.png";
import gb1 from "../../image/Mask group 1.png";
import gb2 from "../../image/Mask group.png";
import anh2 from "../../image/michigan_mini_03 1.png";
const slides = [
  {
    text: "Wir kümmern uns um Ihre schöner Garten und Haus",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: anh1,
  },
  {
    text: "Professionelle Gartenpflege und Hauswartung",
    description:
      "Wir bieten umfassende Dienstleistungen für die Pflege und Wartung Ihres Gartens und Hauses. Vertrauen Sie uns für Qualität und Zuverlässigkeit.",
    image: anh1,
  },
];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };
  const { text, description, image } = slides[currentSlide];
  return (
    <>
      {/* <Header /> */}
      <div className="bg-gradient-to-r from-[#B6DDB0] to-[#E6EDDE]">
        <div className="max-w-[1200px] mx-auto flex items-center p-8">
          <div className="ml-10 py-16 grid grid-cols-2 gap-8 relative">
            <div className="pr-8">
              <p className="font-baloo text-[#505F4E] text-4xl">{text}</p>
              <FiChevronLeft
                size={30}
                color="#000"
                className="relative -ml-40"
                onClick={handleNext}
              />

              <p className="text-[#665345]">{description}</p>
              <button className="text-[#505F4E] border-solid border-[#505F4E] border-2 mt-5 p-2">
                Lern mehr
              </button>
            </div>
          </div>
          <img
            src={image}
            className="absolute right-0 bottom-30 w-3/5 object-cover "
          />
        </div>
        <FiChevronRight
          size={30}
          color="#000"
          className="absolute bottom-[50%] ml-[97%]"
          onClick={handlePrev}
        />
      </div>
      <div className="p-2 bg-[#F8F4F0]">
        <p className="font-baloo text-2xl mt-4 text-[#505F4E] ml-20">
          Best Sellers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-4">
        <div className="p-4">
          <img src={anh2} alt="" className="ml-10" />
          <p className="text-[#665345] mt-4">Growbox</p>
          <div className="flex mt-4">
            <span className="text-sm text-[#665345]">Dress</span>
            <span className="ml-20 text-[#665345]">$ 963.85</span>
          </div>
        </div>
        <div className="p-4">
          <img src={anh3} alt="" className="ml-10" />
          <p className="text-[#665345]">Töpfe</p>
          <div className="flex mt-4">
            <span className="text-sm text-[#777777]">
              5 by 5 pots for planting
            </span>
            <span className="ml-16 text-[#665345]">$ 6130.00</span>
          </div>
        </div>
        <div className="p-4 mt-12 md:mt-0">
          <img src={anh4} alt="" className="ml-9 mt-14" />
          <p className="text-[#665345]">Lichthänger-Set</p>
          <div className="flex mt-3">
            <span className="text-[#777777]">Light-hanger set </span>
            <span className="ml-20 text-[#665345]">$ 753.00</span>
          </div>
        </div>
        <div className="p-4 mt-12 lg:mt-0">
          <img src={anh5} alt="" className="ml-10 mt-20" />
          <p className="text-[#665345] mt-14">Licht</p>
          <div className="flex mt-5">
            <span className="text-[#777777]">Dress</span>
            <span className="ml-20 text-[#665345]">$ $ 2364.00 </span>
            <span className="text-red-600 ml-4">$ 1155.00</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] flex space-x-5 justify-center py-20">
        <div className="relative inline-block group">
          <img src={anh6} alt="Garten Spaten" className="block" />
          <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
            Garten Spaten
          </p>
        </div>
        <div className="">
          <div className="relative group ">
            <img src={anh7} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Sand
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh8} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Schlammkuchen
            </p>
          </div>
        </div>
        <div className="">
          <div className="relative group ">
            <img src={anh9} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Pflanzer
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh10} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Klemmen
            </p>
          </div>
        </div>
      </div>
      <p className="font-baloo text-2xl text-[#505F4E] bg-[#F5F5F5] pl-20">
        Kategorien
      </p>
      <hr className="bg-[#F5F5F5] w-full mx-auto hidden md:block" />
      <div className="bg-[#F5F5F5] pt-10">
        <div className=" grid grid-cols-4 justify-between ml-14">
          <div className="relative ">
            <img src={gb1} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
          <div className="relative ">
            <img src={gb2} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
          <div className="relative ">
            <img src={gb3} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
          <div className="relative ">
            <img src={gb4} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 justify-between ml-14 mt-6 pb-10">
          <div className="relative ">
            <img src={gb1} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
          <div className="relative ">
            <img src={gb2} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
          <div className="relative ">
            <img src={gb3} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
          <div className="relative ">
            <img src={gb4} alt="Beleuchtung" className="block" />
            <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
              <p className="text-white text-lg">Beleuchtung</p>
              <span className="text-white text-sm">30 items</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Home;
