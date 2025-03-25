import { FC } from "react";
import useDashboard, { Props, ReceivedProps } from "./hook";
import AppHeader from "@components/AppHeader";

const DashboardLayout: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <AppHeader pageTitle="Thống kê" />
    </div>
  );
};

const Dashboard: FC<ReceivedProps> = (props) => (
  <DashboardLayout {...useDashboard(props)} />
);

export default Dashboard;
