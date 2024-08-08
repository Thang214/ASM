import React, { useContext } from "react";
import { CartContextCT } from "../../../../hook/CartContext/CartContext";

const CartSummary: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };
  const { cartItems } = useContext(CartContextCT);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-neutral-600">
        Hàng đã đặt
      </h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left text-neutral-600">Sản phẩm</th>
            <th className="py-2 text-neutral-600">Số lượng</th>
            <th className="py-2 text-neutral-600">Giá</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex flex-col">
                  <span className="text-neutral-600">{item.name}</span>
                  <span className="text-neutral-600">Black / 2XL</span>
                </div>
              </td>
              <td className="py-2 text-center text-neutral-600">
                {item.quantity}
              </td>
              <td className="py-2 text-right text-neutral-600">
                {formatCurrency(item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
