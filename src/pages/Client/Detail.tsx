import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CartContextCT } from "../../hook/CartContext/CartContext";
import { CartItem } from "../../interface/cart";
import useProductQuery from "../../hook/Product/useProductQuery";
import sp8 from "../../image/20210212_140441_InPixio 1.png";
import sp7 from "../../image/ffef 1.png";
import sp6 from "../../image/ffef 3.png";
import sp9 from "../../image/ffef 4.png";
import { axiosInstance } from "../../config/axios";
import { toast } from "react-toastify";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const { id } = useParams();
  const { data } = useProductQuery(id);
  console.log(data);
  const { addCartItem } = useContext(CartContextCT);
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    if (data) {
      const cartItem: CartItem = {
        id: data.id,
        name: data.name,
        quantity,
        description: data.description,
        price: data.price,
        image: data.image,
      };

      try {
        const cartResponse = await axiosInstance.get("carts");
        const cartItems: CartItem[] = cartResponse.data;

        const existingItem = cartItems.find((item) => item.id === data.id);

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
        toast.error("Đã xảy ra lỗi khi thêm vào giỏ hàng😢");
      }
    }
  };
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };
  return (
    <div>
      <div className="ml-20 pt-20 grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={data?.image} alt="" className="ml-28" />
          <div className="flex space-x-1 ml-14 mt-4">
            <img src={sp6} alt="" />
            <img
              src={sp7}
              alt=""
              className="hover:border hover:border-gray-500 rounded-lg"
            />
            <img
              src={sp8}
              alt=""
              className="hover:border hover:border-gray-500 rounded-lg"
            />
          </div>
        </div>
        <div>
          {/* <p className="text-[#4E7C32] font-kumbh">CÂY</p> */}
          <h1 className="text-3xl font-kumbh font-bold mt-4 mb-4 md:w-150">
            {data?.name}
          </h1>
          <div className="md:w-150">
            <span className="text-[#68707D] mt-4 ">{data?.short_desc}</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <p className="font-bold text-[22px]">
              {formatCurrency(data?.price)}
            </p>
            <span className="bg-[#FFEDE0] text-[#4E7C32] rounded-lg P-2">
              50%
            </span>
          </div>
          <del className="mt-4 text-sm font-bold text-red-400">
            {formatCurrency(2000000)}
          </del>
          <div className="flex space-x-10 mt-4">
            <div className="flex items-center justify-between w-40 p-2 bg-gray-50 rounded-lg">
              <button className="" onClick={handleDecrement}>
                <span className="text-2xl">-</span>
              </button>
              <span className="text-2xl font-bold">{quantity}</span>
              <button className="" onClick={handleIncrement}>
                <span className="text-2xl">+</span>
              </button>
            </div>
            <div
              className="bg-[#298456] text-base h-[50px] w-auto px-[45px] font-semibold rounded-full text-white inline-flex items-center relative overflow-hidden hover:bg-[#4fcd9f] transition-all ease-in-out duration-300"
              onClick={handleAddToCart}
            >
              <AiOutlineShoppingCart className="text-white mr-2 text-xl" />
              <button className="text-white">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-32 mt-10">
        <div className="w-full md:w-[1000px]">
          <p className="text-[#4E7C32] text-2xl mb-2">Mô tả</p>
          <span className="text-[#665345]">{data?.description}</span>
        </div>
        <div className="mt-6 md:w-[1000px]">
          <p className="text-[#4E7C32] text-2xl mb-2">Về sản phẩm</p>
          <span className="text-[#665345]">{data?.about}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row ml-32 mt-10">
        <img src={sp9} alt="" />
        <p className="absolute right-96 text-white bg-[#4E7C32] p-2 rounded-lg">
          Viết đánh giá
        </p>
        <div className="flex mt-20 ml-5 text-gray-500">
          <FaStar className="w-[30px] h-[30px]" />
          <FaStar className="w-[30px] h-[30px]" />
          <FaStar className="w-[30px] h-[30px]" />
          <FaStar className="w-[30px] h-[30px]" />
          <FaStar className="w-[30px] h-[30px]" />
        </div>
        <span className="mt-32 ml-60 text-[#4E7C32] absolute text-3xl">
          5.0 <span className="text-graydark text-[15px] ">(388)</span>
        </span>
      </div>
      <div className="flex ml-32 mt-10 space-x-1">
        1 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#A2A0A0] rounded"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        2 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        3 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        4 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        5 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="mt-10 ml-32 w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-4 mt-44">
          <div className="flex items-center">
            <p className="text-[#4E7C32] mr-4 text-xl">Aman Gupta</p>
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
          </div>
          <p className="text-sm text-[#665345] mt-2">
            Tôi đã sử dụng sản phẩm này khoảng năm hoặc sáu tháng và mụn của tôi
            gần như hoàn toàn biến mất. Tôi đã thực sự gặp khó khăn trong nhiều
            năm với làn da của mình và đã thử mọi thứ có thể nhưng đây là thứ
            duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và sẽ tiếp tục
            sử dụng chắc chắn.
          </p>
        </div>
        <div className="ml-0 md:ml-40 w-full">
          <div className="p-4">
            <div className="flex items-center">
              <p className="text-[#4E7C32] mr-4 text-xl">Aman Gupta</p>
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
            </div>
            <p className="text-sm text-[#665345] mt-2">
              Tôi đã sử dụng sản phẩm này khoảng năm hoặc sáu tháng và mụn của
              tôi gần như hoàn toàn biến mất. Tôi đã thực sự gặp khó khăn trong
              nhiều năm với làn da của mình và đã thử mọi thứ có thể nhưng đây
              là thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và sẽ
              tiếp tục sử dụng chắc chắn.
            </p>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <p className="text-[#4E7C32] mr-4 text-xl">Aman Gupta</p>
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
            </div>
            <p className="text-sm text-[#665345] mt-2">
              Tôi đã sử dụng sản phẩm này khoảng năm hoặc sáu tháng và mụn của
              tôi gần như hoàn toàn biến mất. Tôi đã thực sự gặp khó khăn trong
              nhiều năm với làn da của mình và đã thử mọi thứ có thể nhưng đây
              là thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và sẽ
              tiếp tục sử dụng chắc chắn.
            </p>
          </div>
        </div>
      </div>
      <button className="text-white bg-[#4E7C32] p-2 px-4 rounded-lg text-center block mx-auto mb-10">
        Xem tất cả
      </button>
    </div>
  );
};

export default Detail;
