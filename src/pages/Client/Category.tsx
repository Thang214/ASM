import { useEffect, useState } from "react";
// import sp8 from "../../image/annie-spratt-ncQ2sguVlgo-unsplash 1.png";
// import sp3 from "../../image/dedww 1.png";
// import sp4 from "../../image/gbfdf 1.png";
// import sp1 from "../../image/htgyr 1.png";
// import sp2 from "../../image/hthrt 1.jpg";

// import {
//   AiOutlineHeart,
//   AiOutlineShareAlt,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axios";
import useProductQuery from "../../hook/Product/useProductQuery";
import { Category } from "../../interface/category";
import { IProduct } from "../../interface/product";
import ShopTop from "./ShopList/component/ShopTop";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import ProductMenu from "./ShopList/component/ShopMenu";

const CategoryPage = () => {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: products } = useProductQuery();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get("categorys");
      setCategorys(data);
    })();
  }, []);

  useEffect(() => {
    if (id) {
      const selected = categorys.find((category) => category.id === id);
      if (selected) {
        setSelectedCategory(selected.name);
      }
    } else {
      setSelectedCategory("");
    }
  }, [id, categorys]);

  const filteredProducts = products?.filter(
    (product: IProduct) =>
      selectedCategory === "" || product.category === selectedCategory
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = categorys.find((cat) => cat.name === e.target.value);
    if (selected) {
      setSelectedCategory(selected.name);
      window.history.pushState(null, "", `/category/${selected.id}`);
    } else {
      setSelectedCategory("");
      window.history.pushState(null, "", "/category");
    }
  };

  return (
    <div>
      <div className="bg-[#D2E8CD] text-center">
        <h1 className="text-[#505F4E] py-14 w-[80%]  mx-auto text-3xl font-normal font-['Baloo'] leading-tight">
          Danh sách danh mục
        </h1>
      </div>
      <ShopTop />
      <div className="w-full py-15">
        <div className="flex flex-wrap space-x-10 ml-35 mb-10">
          <div className="flex">
            <p className="mt-1">Danh mục:</p>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border-gray-300 text-gray-400 w-48 p-2 rounded-lg border-solid border ml-2"
            >
              <option value="">Tất cả danh mục</option>
              {categorys.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mt-4 sm:mt-0">
            <p className="mt-1">Hiển thị:</p>
            <select
              name="sort"
              id="sort-select"
              className="border-gray-300 text-gray-400 w-48 p-1 rounded-lg border-solid border ml-2"
            >
              <option value="newest">Mặc định</option>
              <option value="oldest">Cũ nhất</option>
              <option value="alphabetical">Theo bảng chữ cái</option>
            </select>
          </div>
        </div>
        <div className="w-[80%] mx-auto gap-10 flex flex-col">
          <div className="w-full flex gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-full md:w-3/4 h-auto mt-2">
              {filteredProducts?.map((item: IProduct, index: number) => (
                <div key={index} className="relative flex flex-col gap-2 group">
                  <div className="w-full">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-[200px] md:h-[250px]"
                    />
                  </div>
                  <Link to={`/detail/${item.id}`}>
                    <p className="text-zinc-800 text-sm md:text-base font-bold leading-normal">
                      {item.name}
                    </p>
                  </Link>
                  <div className="flex gap-2 md:gap-4 text-[#505F4E]">
                    $ {item.price}
                    <p className="line-through">$ {item.price}</p>
                  </div>
                  <div className="mb-15 absolute inset-0 flex justify-center items-center gap-2 md:gap-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/detail/${item.id}`}>
                      <div className="bg-white p-1 md:p-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white">
                        <FaEye className="text-lg md:text-xl" />
                      </div>
                    </Link>
                    <div className="bg-white p-1 md:p-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white">
                      <LiaShoppingBagSolid className="text-lg md:text-xl" />
                    </div>
                    <div className="bg-white p-1 md:p-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white">
                      <FaRegHeart className="text-lg md:text-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/4">
              <ProductMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
