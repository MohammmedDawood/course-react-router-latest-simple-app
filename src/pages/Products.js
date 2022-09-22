// import { useEffect } from "react";
import { Link } from "react-router-dom"; //, useNavigate

const Products = () => {
  // programatic navigation or Impairative navigation
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/products/p1");
  // }, [navigate]);
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
