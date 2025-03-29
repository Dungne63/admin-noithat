import { UserActions, UserSelectors } from "@features/User/services/slice";
import { useAppDispatch, useAppSelector } from "@services/store";
import { useEffect } from "react";

export type ReceivedProps = Record<string, any>;

const useUser = (props: ReceivedProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(UserSelectors.users);
  console.log("users", users);

  useEffect(() => {
    console.log("Gọi API lấy danh sách users");
    dispatch(UserActions.getUsers({}));
  }, [dispatch]);

  return {
    users,
    ...props,
  };
};

export type Props = ReturnType<typeof useUser>;

export default useUser;
