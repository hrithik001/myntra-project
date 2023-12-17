import Wishlist from "../components/Wishlist";
import { useSelector } from "react-redux";
import NothingPage from "./NothingPage";

const WishList = () => {
  const wishlistItems = useSelector((store) => store.wishlist);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((ele) => wishlistItems.indexOf(ele.id) >= 0);
  return (
    <>
      <h4 style={styles.title}>My Wishlist {finalItems.length} items</h4>

      {finalItems.length === 0 ? (
        <div className="bag-page">
          <NothingPage contextText={"add items from Home"} referHere={"/"} />
        </div>
      ) : (
        <div className="items-container">
          {finalItems.map((item) => (
            <Wishlist item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};
const styles = {
  title: {
    margin: 0,
    padding: "50px 50px",
  },
};
export default WishList;
