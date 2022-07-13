import { Tabs } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const routes = [
  "",
  "orders",
  "education",
  "community",
  "forums",
  "support",
  "account",
  "helpdesk",
];

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Tabs
      variant="outline"
      className="hidden sm:block"
      classNames={{
        // root: classes.tabs,
        tabsListWrapper: "border-b-0",
        tabControl: "text-slate-600 font-semibold",
        tabActive: "text-black",
      }}
      onTabChange={(tabIndex) => {
        navigate(`/${routes[tabIndex]}`);
      }}
    >
      <Tabs.Tab label="Trang chủ" key="/home" />
      <Tabs.Tab label="Nhà Phố" />
      <Tabs.Tab label="Căn hộ" />
      <Tabs.Tab label="Phòng trọ" />
      <Tabs.Tab label="Đất vườn" />
      <Tabs.Tab label="Home stay" />
    </Tabs>
  );
};
