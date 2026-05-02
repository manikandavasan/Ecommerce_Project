import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "../assets/css/search_result.css"

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await API.get(`search/?q=${query}`);
    setResults(res.data.results);
  };

  return (
      <div row className="shop-featured-product">
        <div className="col-12 featured-products">
        {results.map((product) => (
          <div key={product.id} className="featured-product-box">
            <img
              src={product.image}
              alt=""
              height="200"
            />
            <h3>{product.name}</h3>
            <h5>₹{product.price}</h5>
            <div>
          <button className="btn bg-primary"><a href="{% url 'add_to_cart' product.id %}" className="text-decoration-none text-white">Add to Cart</a></button>
          <button className="btn bg-secondary"><a href="{% url 'product_detail' product.id %}" className="text-decoration-none text-white">View Detail</a></button>
        </div>
          </div>
        ))}
      </div>
      </div>
  );
}