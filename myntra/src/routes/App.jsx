import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const { fetchingStart } = useSelector((store) => store.fetchstatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchingStart ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
