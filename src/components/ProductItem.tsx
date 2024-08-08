import { Link } from "react-router-dom";
import { IProduct } from "../interface/product";

const ProductItem = ({ products }: IProduct) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div className="flex flex-col p-3 sm:p-4 md:p-5 lg:p-6">
      <Link to={`/detail/${products.id}`}>
        <div className="w-full h-auto">
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </Link>

      <h1 className="text-black font-semibold mt-3 text-lg sm:text-xl md:text-2xl">
        {products.name}
      </h1>
      <div className="flex flex-col sm:flex-row justify-between mt-2">
        <span className="text-gray-600 text-sm sm:text-base">
          {products.category}
        </span>
        <span className="text-gray-900 text-lg sm:text-xl">
          {formatCurrency(products.price)}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
