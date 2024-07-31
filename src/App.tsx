import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Admin from "./Layout/Admin";
import Client from "./Layout/Client";
import CategoryProduct from "./pages/Admin/category/CategoryAdd";
import CategoryEdit from "./pages/Admin/category/CategoryEdit";
import ListCategory from "./pages/Admin/category/ListCategory";
import ProductAdd from "./pages/Admin/Product-Add/ProductAdd";
import ProductEdit from "./pages/Admin/Product-Edit/ProductEdit";
import ProductList from "./pages/Admin/Product-List/ProductList";
import Detail from "./pages/Client/Detail";
import Home from "./pages/Client/Home";
import Shop from "./pages/Client/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Client />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="products/list" element={<ProductList />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/edit/:id" element={<ProductEdit />} />

          <Route path="listCategory" element={<ListCategory />} />
          <Route path="categorys/add" element={<CategoryProduct />} />
          <Route path="categorys/edit/:id" element={<CategoryEdit />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
export default App;
