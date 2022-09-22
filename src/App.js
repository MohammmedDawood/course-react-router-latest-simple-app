import { Navigate, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          {/* V6 */}
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          {/* V5 */}
          {/* <Route path="/">
            <Redirect to="/welcome" />
          </Route> */}
          {/* <Route path="/welcome">
            <Welcome />
          </Route> */}
          {/* <Route path="/products" exact>
            <Products />
          </Route> */}
          {/* <Route path="/products/:productId">
            <ProductDetail />
          </Route> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
