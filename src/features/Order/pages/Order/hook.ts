import { OrderActions, OrderSelectors } from "@features/Order/services/slice";
import { useAppDispatch, useAppSelector } from "@services/store";
import { useEffect } from "react";

export type ReceivedProps = Record<string, any>;

const useOrder = (props: ReceivedProps) => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(OrderSelectors.orders);

  useEffect(() => {
    dispatch(OrderActions.getOrders({}));
  }, [dispatch]);

  return {
    orders,
    ...props,
  };
};

export type Props = ReturnType<typeof useOrder>;

export default useOrder;
