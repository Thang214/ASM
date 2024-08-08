import { useContext, useEffect, useState } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../../config/axios";
import useProductQuery from "../../../../hook/Product/useProductQuery";
import { Category } from "../../../../interface/category";
import { IProduct } from "../../../../interface/product";
import { CartContextCT } from "../../../../hook/CartContext/CartContext";
import { CartItem } from "../../../../interface/cart";
import ProductMenu from "./ShopMenu";
import { toast } from "react-toastify";

const ShopFilter = () => {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: products } = useProductQuery();
  const filteredProducts = products?.filter(
    (product: { category: string }) =>
      selectedCategory === "" || product.category === selectedCategory
  );
  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get(`categorys`);
      setCategorys(data);
    })();
  }, []);
  const [quantity] = useState(1);
  const { addCartItem } = useContext(CartContextCT);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  const handleAddToCart = async (product: IProduct) => {
    const cartItem: CartItem = {
      id: product.id!,
      name: product.name,
      quantity,
      description: product.description,
      price: product.price,
      image: product.image,
    };

    try {
      const cartResponse = await axiosInstance.get("carts");
      const cartItems: CartItem[] = cartResponse.data;

      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        await axiosInstance.patch(`carts/${existingItem.id}`, {
          quantity: existingItem.quantity + quantity,
        });
      } else {
        await axiosInstance.post("carts", cartItem);
      }

      addCartItem(cartItem);
      toast.success("Thêm vào giỏ hàng thành công😍");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.success("Đã xảy ra lỗi khi thêm vào giỏ hàng😢");
    }
  };
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
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
                <div className="flex gap-2 md:gap-4 text-[#222522]">
                  <div className="text-[18px]">
                    {formatCurrency(item.price)}
                  </div>
                  <div className="text-red-400 ml-10">
                    <p className="line-through">{formatCurrency(200000000)}</p>
                  </div>
                </div>
                <div className="mb-15 absolute inset-0 flex justify-center items-center gap-2 md:gap-4 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/detail/${item.id}`}>
                    <div className="bg-white p-1 md:p-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white">
                      <FaEye className="text-lg md:text-xl" />
                    </div>
                  </Link>
                  <div
                    className="bg-white p-1 md:p-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white"
                    onClick={() => handleAddToCart(item)}
                  >
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
  );
};

export default ShopFilter;
