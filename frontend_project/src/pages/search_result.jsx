import { useState, useEffect } from "react";
import API from "../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/search_result.css";

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchProducts = async (text) => {
    if (!text.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await API.get(`products/search/?q=${text}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setResults(res.data.results || []);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";

    setQuery(q);

    if (q) {
      searchProducts(q);
    } else {
      setResults([]);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-page">

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="btn btn-primary">
          Search
        </button>
      </form>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary"></div>
        </div>
      ) : results.length > 0 ? (

        <div className="featured-products">
          {results.map((product) => (
            <div key={product.id} className="featured-product-box">

              <img
                src={product.image}
                alt={product.name}
                className="featured-product-image"
              />

              <h6 className="product-title">
                {product.name}
              </h6>

              <h5>₹ {product.price}</h5>

              <div className="product-buttons">
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-secondary"
                >
                  View Detail
                </Link>

                <button className="btn btn-primary">
                  Add to Cart
                </button>
              </div>

            </div>
          ))}
        </div>

      ) : query ? (

        <div className="text-center mt-5">
          <h4>No products found 😕</h4>
        </div>

      ) : (

        <div className="text-center mt-5">
          <h5>Search for products...</h5>
        </div>

      )}
    </div>
  );
}