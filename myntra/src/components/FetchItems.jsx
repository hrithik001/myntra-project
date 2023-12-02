import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../routes/ItemSlice";
import { fetchActions } from "../routes/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchedDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchActions.setFetchStart());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.setFetchEnd());
        dispatch(fetchActions.setFetchDone());
        dispatch(sliceActions.initialData(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
