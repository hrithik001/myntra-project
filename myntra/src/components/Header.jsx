import { FaCircleUser, FaBagShopping } from "react-icons/fa6";
import { FaGrinHearts } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileSection from "./ProfileSection";
const Header = () => {
  const items = useSelector((state) => state.bag);
  const wishlist = useSelector((state) => state.wishlist);
  // console.log(items);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="/images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link className="action_container" to="/profilepage">
            <ProfileSection />
          </Link>

          <Link className="action_container" to="/wishlist">
            <FaGrinHearts />
            <span className="action_name">Wishlist</span>
            <span className="bag-item-count">{wishlist.length}</span>
          </Link>

          <Link className="action_container" to="/bag">
            <FaBagShopping />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{items.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
