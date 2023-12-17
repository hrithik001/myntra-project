import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../routes/bagSlice";
import React from "react";

const SinglePro = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const addtobag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const removefrombag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.productWrapper}>
          <img
            src={`/${item.image}`}
            alt={"not getting picture"}
            style={styles.productImage}
          />
          <div style={styles.productDetails}>
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
            {!elementFound ? (
              <button
                type="button"
                className="btn btn-add-bag btn-success"
                onClick={addtobag}
              >
                Add to Cart
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-add-bag btn-danger"
                onClick={removefrombag}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    minWidth: "400px",
  },
  productWrapper: {
    display: "flex",

    borderRadius: "8px",
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productDetails: {
    padding: "116px",
  },
};

export default SinglePro;
