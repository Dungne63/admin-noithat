import { FC } from "react";
import useUser, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";
import { Button } from "@heroui/react";

const UserLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader
        pageTitle="Quản lý người dùng"
        rightMenu={<Button color="primary">Thêm người dùng</Button>}
      />
    </div>
  );
};

const User: FC<ReceivedProps> = (props) => <UserLayout {...useUser(props)} />;

export default User;
