import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../routes/ItemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchedDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        dispatch(sliceActions.initialData(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        fetch Done : {fetchStatus.fetchedDone}
        <br />
        currently fetching : {fetchStatus.fetchingStart}
      </div>
    </>
  );
};
export default FetchItems;
