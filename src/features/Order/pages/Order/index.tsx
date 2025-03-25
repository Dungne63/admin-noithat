import { FC } from "react";
import useOrder, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";

const OrderLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader pageTitle="Quản lý đơn hàng" />
    </div>
  );
};

const Order: FC<ReceivedProps> = (props) => (
  <OrderLayout {...useOrder(props)} />
);

export default Order;
