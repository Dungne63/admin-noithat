import { FC } from "react";
import useCategory, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";
import { Button } from "@heroui/react";

const CategoryLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader
        pageTitle="Quản lý danh mục sản phẩm"
        rightMenu={<Button color="primary">Thêm sản phẩm</Button>}
      />
    </div>
  );
};

const Category: FC<ReceivedProps> = (props) => (
  <CategoryLayout {...useCategory(props)} />
);

export default Category;
