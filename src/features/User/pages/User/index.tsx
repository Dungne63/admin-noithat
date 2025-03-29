import { FC } from "react";
import useUser, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";
import { Button } from "@heroui/react";
import UserTable from "@features/User/component/UserTable";

const UserLayout: FC<Props> = ({ users, ...props }) => {
  console.log("users:", users, Array.isArray(users));
  return (
    <div>
      <AppHeader
        pageTitle="Quản lý người dùng"
        rightMenu={<Button color="primary">Thêm người dùng</Button>}
      />
      <div className="bg-white rounded-2xl p-4 shadow-md m-4">
        <UserTable users={users?.data || []} />
      </div>
    </div>
  );
  
};

const User: FC<ReceivedProps> = (props) => <UserLayout {...useUser(props)} />;

export default User;
