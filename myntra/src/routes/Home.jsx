import HomePage from "../components/HomePage";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomePage key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;
