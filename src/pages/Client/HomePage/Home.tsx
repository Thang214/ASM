
import anh6 from "../../../image/AdobeStock_204287225_Preview 1.png";
import anh10 from "../../../image/bfdsA 1.png";
import anh9 from "../../../image/ffgdsa 1.png";
import anh8 from "../../../image/gggrrr 1.png";
import anh7 from "../../../image/gtgre 1.png";
import Banner from "./component/Banner";
import BestSellers from "./component/BestSellers";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../../interface/product";
import Kategorien from "./component/Kategorien";
const Home = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Banner />
      <div className="p-2 bg-[#F8F4F0]">
        <p className="font-baloo text-2xl mt-4 text-[#505F4E] ml-20">
          Best Sellers
        </p>
      </div>

      <BestSellers products={products} />

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
      <Kategorien />
    </div>
  );
};
export default Home;
