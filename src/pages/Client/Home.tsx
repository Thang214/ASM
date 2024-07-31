import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useProductQuery from "../../hook/Product/useProductQuery";
import anh6 from "../../image/AdobeStock_204287225_Preview 1.png";
import anh10 from "../../image/bfdsA 1.png";
import gb4 from "../../image/dwdwqa 1.png";
import anh9 from "../../image/ffgdsa 1.png";
import anh1 from "../../image/fwfqq 1.png";
import anh8 from "../../image/gggrrr 1.png";
import anh7 from "../../image/gtgre 1.png";
import gb3 from "../../image/htrtggh 1.png";
import gb1 from "../../image/Mask group 1.png";
import gb2 from "../../image/Mask group.png";
import { IProduct } from "../../interface/product";
import useCategoryQuery from "../../hook/Category/useCategoryQuery";
import { Category } from "@/interface/category";
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
  const { data: products } = useProductQuery();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const { data: categorys } = useCategoryQuery();
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
  const handleProductPrev = () => {
    setCurrentProductSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  const handleProductNext = () => {
    setCurrentProductSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  const { text, description, image } = slides[currentSlide];
  const productsToShow = products
    ? products.slice(currentProductSlide, currentProductSlide + 4)
    : [];

  return (
    <div>
      <div className="bg-gradient-to-r from-[#B6DDB0] to-[#E6EDDE]">
        <div className="max-w-[1200px] mx-auto flex items-center p-8">
          <div className="ml-10 py-16 grid grid-cols-2 gap-8 relative">
            <div className="pr-8">
              <p className="font-baloo text-[#505F4E] text-4xl">{text}</p>
              <FiChevronLeft
                size={30}
                color="#000"
                className="relative -ml-40"
                onClick={handlePrev}
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
          onClick={handleNext}
        />
      </div>
      <div className="p-2 bg-[#F8F4F0]">
        <p className="font-baloo text-2xl mt-4 text-[#505F4E] ml-20">
          Best Sellers
        </p>
      </div>
      <div className="relative ml-16 mr-16 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-4 ">
          {productsToShow.map((item: IProduct) => (
            <div key={item.id} className="p-4">
              <img src={item.image} alt={item.name} className="" />
              <p className="text-[#665345] mt-4">{item.name}</p>
              <div className="flex mt-4">
                <span className="text-sm text-[#665345]">{item.category}</span>
                <span className="ml-20 text-[#665345]">$ {item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <FiChevronLeft
          size={30}
          color="#000"
          className="absolute top-[50%] left-0"
          onClick={handleProductPrev}
        />
        <FiChevronRight
          size={30}
          color="#000"
          className="absolute top-[50%] right-0"
          onClick={handleProductNext}
        />
      </div>
      <div className="bg-[#F5F5F5] flex space-x-5 justify-center py-20">
        <div className="relative inline-block group">
          <img src={anh6} alt="Garten Spaten" className="block" />
          <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
            Garten Spaten
          </p>
        </div>
        <div>
          <div className="relative group">
            <img src={anh7} alt="Sand" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Sand
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh8} alt="Schlammkuchen" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Schlammkuchen
            </p>
          </div>
        </div>
        <div>
          <div className="relative group">
            <img src={anh9} alt="Pflanzer" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 group-hover:opacity-100">
              Pflanzer
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh10} alt="Klemmen" className="block" />
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
          {categorys.map((category: Category) => (
            <div className="relative mt-6" key={category.id}>
              <img
                src={category.image}
                alt="Beleuchtung"
                className="block ml-2"
              />
              <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
                <p className="text-white text-lg">{category.name}</p>
                <span className="text-white text-sm">30 items</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
