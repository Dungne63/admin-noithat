import { FC } from "react";
import useProduct, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";
import { Button } from "@heroui/react";

const ProductLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader
        pageTitle="Quản lý sản phẩm"
        rightMenu={<Button color="primary">Thêm sản phẩm</Button>}
      />
    </div>
  );
};

const Product: FC<ReceivedProps> = (props) => (
  <ProductLayout {...useProduct(props)} />
);

export default Product;
