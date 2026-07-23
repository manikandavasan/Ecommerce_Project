import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../api/axios.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "../assets/css/home.css"
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const  { id } = useParams()
  const Quantity = 1

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get(`accounts/home/`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
  }
});
      console.log("API Data:", res.data);
      setProducts(res.data.products || []);
      setCategories(res.data.categories || []);
      console.log(categories);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

    const addToCart = async (product_id) => {
  const cartData = {
    quantity: 1,
    product_id: product_id
  };

  try {
    const res = await API.post("orders/cart/add/", cartData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    });

    navigate(`/cart/`);
  } catch (err) {
    console.error("Add to cart error:", err.response?.data || err.message);
  }
};

  

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="overall-container">
      <nav className="navbar navbar-expand-lg ecommerce-navbar sticky-top">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand logo" to="/">
            <i className="fa-solid fa-bag-shopping me-2"></i>
            ShopEase
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">

            {/* Search */}
            <form className="d-flex mx-auto search-box">
              <input
                className="form-control"
                type="search"
                placeholder="Search products..."
              />
              <button className="btn btn-warning">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Menu */}
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </a>

                <ul className="dropdown-menu">

                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          className="dropdown-item"
                          to={`/category/${cat.id}`}
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <span className="dropdown-item">
                        No Categories
                      </span>
                    </li>
                  )}

                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/my_orders">
                  My Orders
                </Link>
              </li>

              <li className="nav-item ms-lg-3">
                <Link className="btn cart-btn" to="/cart">
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  Cart
                </Link>
              </li>

              <li className="nav-item ms-lg-2">
                <Link className="btn account-btn" to="/">
                  <i className="fa-solid fa-user me-2"></i>
                  Account
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>

      <div className="container-fluid hero-search-section">
  <div className="container">

    <div className="row align-items-center">

      <div className="col-lg-6">

        <h1>Find Everything You Need</h1>

        <p>
          Discover thousands of quality products at the best prices.
          Fast delivery, secure payments and trusted brands.
        </p>

        <form className="search-form">

          <input
            type="search"
            className="form-control"
            placeholder="Search for products..."
            required
          />

          <button className="btn btn-warning">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

        </form>

      </div>

      <div className="col-lg-6">

        <div className="hero-icons">

          <div className="hero-box">
            <i className="fa-solid fa-truck-fast"></i>
            <h6>Free Delivery</h6>
            <small>On orders above ₹999</small>
          </div>

          <div className="hero-box">
            <i className="fa-solid fa-shield-halved"></i>
            <h6>Secure Payment</h6>
            <small>100% Protected</small>
          </div>

          <div className="hero-box">
            <i className="fa-solid fa-arrow-rotate-left"></i>
            <h6>Easy Returns</h6>
            <small>7 Days Return</small>
          </div>

          <div className="hero-box">
            <i className="fa-solid fa-headset"></i>
            <h6>24/7 Support</h6>
            <small>Always Available</small>
          </div>

        </div>

      </div>

    </div>

  </div>
</div>

      {/* <div className="row">
        <div className="col-12 p-0 slide-show">
          <Carousel>
          { products.length > 0 ? (
            products.map((product) => (
            <Carousel.Item key={product.id}>
              <div style={{
                          backgroundImage: `url(${product.image})`,
                          height: "500px",
                          backgroundSize: "80% 100%",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }}>
                <Carousel.Caption className="pt-3">

                  <h5 className="carosel-product-price"> &#8377; { product.price }</h5>
                  <Link className="btn bg-secondary text-decoration-none text-white" to={`/product/${product.id}`}>Shop Now</Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            ))
          ):(
            <p>Product not found</p>
          )
          }
          </Carousel>
        </div>
    </div> */}

    <div className="container-fluid hero-carousel p-0">
  <Carousel fade interval={3000}>

    {products.length > 0 ? (
      products.slice(0, 5).map((product) => (

        <Carousel.Item key={product.id}>

          <div
            className="carousel-banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${product.image})`
            }}
          >

            <div className="container h-100">

              <div className="row h-100 align-items-center">

                <div className="col-lg-6">

                  <span className="offer-badge">
                    🔥 Trending Product
                  </span>

                  <h1 className="carousel-title">
                    {product.name}
                  </h1>

                  <p className="carousel-desc">
                    {product.description
                      ? product.description.slice(0, 120)
                      : "Discover premium quality products at the best price."}
                  </p>

                  <h2 className="carousel-price">
                    ₹ {product.price}
                  </h2>

                  <div className="carousel-buttons">

                    <Link
                      className="btn btn-warning"
                      to={`/product/${product.id}`}
                    >
                      Shop Now
                    </Link>

                    <button
                      className="btn btn-outline-light"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Carousel.Item>

      ))
    ) : (
      <p className="text-center mt-5">No Products Found</p>
    )}

  </Carousel>
</div>


      {/* <div className="row shop-by-category">
    <div className="col-12 home-category">
      <h2>Shop by Category</h2>
      <a href="">View All <i className="fa-solid fa-greater-than"></i></a>
    </div>
    <div className="category-wrapper">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.id}/`}>
          <div className="card category-small-box" key={cat.id}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <h6>{cat.name}</h6>
          </div>
        </Link>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </div>
      
      </div> */}

  {/* <div className="row shop-featured-product">
    <div className="col-12 home-category">
        <h2>Featured Products</h2>
        <a href="#">View All <i className="fa-solid fa-greater-than"></i></a>
    </div>

  <div className="col-12 featured-products-list">
    {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="featured-product-box">
                <img src={product.image} alt={product.name} className="featured-product-image" />
                <h6>
                  {product.name.split(' ').length > 5 
                    ? product.name.split(' ').slice(0, 5).join(' ') + '...' 
                    : product.name}
                </h6>
                <h5> &#8377; {product.price}</h5>
        <div>
          <button className="btn bg-primary text-white" onClick={()=>addToCart(product.id)}>Add to Cart</button>
          <Link className="btn bg-secondary text-decoration-none text-white" to={`/product/${product.id}`}>View Detail</Link>
        </div>
      </div>
          ))
        ) : (
          <p>No products found</p>
        )}
    </div>

  </div> */}

  <div className="container py-5">

    <div className="section-header">

        <div>
            <h2>Featured Products</h2>
            <p>Discover our most popular products</p>
        </div>

        <Link to="/" className="view-all-btn">
            View All
            <i className="fa-solid fa-arrow-right ms-2"></i>
        </Link>

    </div>

    <div className="row g-4">

        {products.length > 0 ? (

            products.map((product) => (

                <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    key={product.id}
                >

                    <div className="product-card">

                        <span className="product-badge">
                            NEW
                        </span>

                        <div className="product-image">

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                        </div>

                        <div className="product-content">

                            <div className="rating">

                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>

                            </div>

                            <h5>

                                {product.name.split(" ").length > 5
                                    ? product.name
                                          .split(" ")
                                          .slice(0, 5)
                                          .join(" ") + "..."
                                    : product.name}

                            </h5>

                            <div className="price">

                                ₹ {product.price}

                            </div>

                            <div className="product-buttons">

                                <button
                                    className="btn cart-button"
                                    onClick={() => addToCart(product.id)}
                                >
                                    <i className="fa-solid fa-cart-shopping me-2"></i>

                                    Add to Cart
                                </button>

                                <Link
                                    className="btn details-button"
                                    to={`/product/${product.id}`}
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            ))

        ) : (

            <h4 className="text-center">
                No Products Found
            </h4>

        )}

    </div>

</div>

  {/* <footer className="footer container-fluid">
  <div className="footer-container container-fluid">
    <div className="footer-col">
      <h3>Company</h3>
      <ul>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Privacy Policy</li>
        <li>Affiliate Program</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Get Help</h3>
      <ul>
        <li>FAQ</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Order Status</li>
        <li>Payment Options</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Follow Us</h3>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>

  </div>
</footer> */}

<footer className="footer">

    <div className="container">

        <div className="row gy-5">

            {/* Brand */}

            <div className="col-lg-4 col-md-6">

                <h2 className="footer-logo">
                    <i className="fa-solid fa-bag-shopping me-2"></i>
                    ShopEase
                </h2>

                <p className="footer-text">

                    ShopEase is your trusted online shopping destination
                    offering quality products, secure payments and
                    fast delivery across India.

                </p>

                <div className="footer-social">

                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                </div>

            </div>

            {/* Quick Links */}

            <div className="col-lg-2 col-md-6">

                <h5>Quick Links</h5>

                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">Products</Link>
                    </li>

                    <li>
                        <Link to="/">Categories</Link>
                    </li>

                    <li>
                        <Link to="/my_orders">
                            My Orders
                        </Link>
                    </li>

                </ul>

            </div>

            {/* Customer Support */}

            <div className="col-lg-3 col-md-6">

                <h5>Customer Support</h5>

                <ul>

                    <li>Help Center</li>

                    <li>Shipping</li>

                    <li>Returns</li>

                    <li>Privacy Policy</li>

                    <li>Terms & Conditions</li>

                </ul>

            </div>

            {/* Contact */}

            <div className="col-lg-3 col-md-6">

                <h5>Contact Us</h5>

                <p>
                    <i className="fa-solid fa-location-dot me-2"></i>

                    Tamil Nadu, India

                </p>

                <p>
                    <i className="fa-solid fa-phone me-2"></i>

                    +91 9876543210

                </p>

                <p>
                    <i className="fa-solid fa-envelope me-2"></i>

                    support@shopease.com

                </p>

                <div className="payment-icons">

                    <i className="fab fa-cc-visa"></i>

                    <i className="fab fa-cc-mastercard"></i>

                    <i className="fab fa-cc-paypal"></i>

                    <i className="fab fa-google-pay"></i>

                </div>

            </div>

        </div>

        <hr />

        <div className="footer-bottom">

            <p>

                © {new Date().getFullYear()} ShopEase. All Rights Reserved.

            </p>

        </div>

    </div>

</footer>
</div> 
  );
}

