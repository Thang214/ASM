import { useEffect, useState } from "react";
import useProductMutation from "../../../hook/Product/useProductMutation";
import { Category } from "../../../interface/category";
import { axiosInstance } from "../../../config/axios";

const ProductAdd = () => {
  const { form, onSubmit, isPending } = useProductMutation({
    action: "CREATE",
  });
  const [categorys, setCategorys] = useState<Category[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get(`categorys`);
      setCategorys(data);
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-red-600 font-bold text-center mb-6">
        Thêm sản phẩm
      </h1>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="bg-white shadow-md rounded-lg mt-4 mb-5">
            <div className="bg-gray-200 px-4 py-2 rounded-t-lg"></div>
            <div className="p-4">
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    id="productName"
                    {...form.register("name", {
                      required: "Tên sản phẩm là bắt buộc",
                    })}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="category">Category</label>
                  <div className="relative">
                    <select
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      {...form.register("category", {
                        required: "Vui lòng chọn danh mục!",
                      })}
                      id="category"
                    >
                      <option value="">Select category</option>
                      {categorys.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {form.formState.errors.category && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.category.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="productImage"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Ảnh sản phẩm
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    id="productImage"
                    {...form.register("image", {
                      required: "Ảnh sản phẩm là bắt buộc",
                    })}
                  />
                  {form.formState.errors.image && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.image.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="productPrice"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Giá sản phẩm
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    id="productPrice"
                    {...form.register("price", {
                      required: "Giá sản phẩm là bắt buộc",
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Giá sản phẩm phải lớn hơn hoặc bằng 0",
                      },
                    })}
                  />
                  {form.formState.errors.price && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.price.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="productDesc"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Mô tả sản phẩm
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    id="productDesc"
                    {...form.register("description")}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    {isPending ? "Creating..." : "Thêm sản phẩm"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
