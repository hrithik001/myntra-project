import { useLocation } from "react-router-dom";
import SinglePro from "../components/SinglePro";

const SingleProductPage = () => {
  const location = useLocation();
  const item = location.state.item;

  return <SinglePro item={item} />;
};
export default SingleProductPage;
