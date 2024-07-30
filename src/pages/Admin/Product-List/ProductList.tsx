import { Link } from "react-router-dom";
import { IProduct } from "../../../interface/product";
import useProductQuery from "../../../hook/useProductQuery";
import useProductMutation from "../../../hook/useProductMutation";

const ProductList = () => {
  const { data, isLoading } = useProductQuery();
  const { mutate } = useProductMutation({
    action: "DELETE",
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    // <div>
    //   <div className="container">
    //     <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    //       <h1 className="h2">Quản lý sản phẩm</h1>
    //       <div className="btn-toolbar mb-2 mb-md-0">
    //         <div className="btn-group me-2">
    //           <Link to="add" className="btn btn-sm btn-primary">
    //             Thêm
    //           </Link>
    //         </div>
    //       </div>
    //     </div>

    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th scope="col">#</th>
    //           <th scope="col">Ten san pham</th>
    //           <th scope="col">Danh muc san pham</th>
    //           <th scope="col">Anh</th>
    //           <th scope="col">Gia san pham</th>
    //           <th scope="col">So luong</th>
    //           <th scope="col">Mo ta</th>
    //           <th scope="col">Chiết khấu</th>
    //           <th scope="col">Thao tac</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((item: IProduct, index: number) => (
    //           <tr key={index}>
    //             <th scope="row">{index + 1}</th>
    //             <td>{item.name}</td>
    //             <td>{item.category}</td>
    //             <td width={50}>
    //               <img src={item.image} width={50} />
    //             </td>
    //             <td>{item.price}</td>
    //             <td>{item.quantity}</td>
    //             <td>{item.description}</td>
    //             <td>{item.discount}</td>
    //             <td>
    //               <button
    //                 className="btn btn-danger"
    //                 onClick={() => mutate(item)}
    //               >
    //                 Xóa
    //               </button>
    //               <Link to={`${item.id}/edit`} className="btn btn-warning">
    //                 Sửa
    //               </Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="container">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Products
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Product Image</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Description</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Quannity</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Discount</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>

        {data.map((item: IProduct, index: number) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={index}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img
                    src={item.image}
                    alt="Product"
                    width={"100px"}
                    height={"100px"}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <img
                src={item.image}
                alt="Product"
                width={"100px"}
                height={"100px"}
              />
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">{item.name}</p>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {item.category}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                ${item.price}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {item.description}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {item.quantity}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">${item.discount}</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">${item.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
