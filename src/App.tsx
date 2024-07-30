import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Client/Detail";
import Home from "./pages/Client/Home";
import Shop from "./pages/Client/Shop";
import "./index.css";
import Client from "./Layout/Client";
import Admin from "./Layout/Admin";
import ProductList from "./pages/Admin/Product-List/ProductList";
import ProductAdd from "./pages/Admin/Product-Add/ProductAdd";
import ProductEdit from "./pages/Admin/Product-Edit/ProductEdit";

const App = () => {
  return (
    <Routes>
      <Route element={<Client />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
      <Route element={<Admin />}>
        <Route path="admin/list" element={<ProductList />} />
        <Route path="admin/add" element={<ProductAdd />} />
        <Route path="admin/edit/:id" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
};
export default App;
