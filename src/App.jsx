import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import PersonRectangle from "./components/PersonRectangle/PersonRectangle";

function App() {
  const [products, setProducts] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function fetchStore() {
      try {
        setIsloading(true);
        setError("");
        const res = await fetch("https://fakestoreapi.com/products?limit=10");
        if (!res.ok) throw new Error("There is error with data fetching");
        const data = await res.json();
        console.log(data);
        setProducts(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    }
    fetchStore();
  }, []);
  return (
    <div className="container">
      <PersonRectangle />
      {Isloading && <Loader />}
      {!Isloading && !error && <Cards products={products} />}
      {error && <Error message={error} />}
    </div>
  );
}

function Loader() {
  return <div className="loader"></div>;
}

function Error({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

export default App;
