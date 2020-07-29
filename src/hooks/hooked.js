import { useDispatch } from "react-redux";
import { useMemo } from "react";

const useActions = (action, args) => {
  const dispatch = useDispatch();
  return useMemo(
    () => () => dispatch(action(args)),
    [dispatch, action, args]
  );
};

export default useActions;