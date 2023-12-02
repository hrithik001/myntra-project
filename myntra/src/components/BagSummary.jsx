import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((ele) => bagItems.indexOf(ele.id) >= 0);
  const CONVENIENCE_FEE = 99;
  let totalDiscount = 0;
  let totalMRP = 0;
  let totalItem = bagItems.length;
  let finalPayment = 0;
  finalItems.forEach((element) => {
    totalMRP += element.original_price;
    totalDiscount += element.original_price - element.current_price;
  });
  finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
