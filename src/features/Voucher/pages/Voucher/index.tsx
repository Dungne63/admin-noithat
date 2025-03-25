import { FC } from "react";
import useVoucher, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";
import { Button } from "@heroui/react";

const VoucherLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader
        pageTitle="Quản lý khuyến mãi"
        rightMenu={<Button color="primary">Thêm khuyến mãi</Button>}
      />
    </div>
  );
};

const Voucher: FC<ReceivedProps> = (props) => (
  <VoucherLayout {...useVoucher(props)} />
);

export default Voucher;
