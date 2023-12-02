import BagSummary from "../components/BagSummary";
import BagItemsContainer from "../components/BagItemsContainer";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((ele) => bagItems.indexOf(ele.id) >= 0);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItemsContainer key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
