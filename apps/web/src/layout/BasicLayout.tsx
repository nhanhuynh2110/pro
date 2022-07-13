import {
  Avatar,
  Burger,
  Container,
  Divider,
  Group,
  Menu,
  Tabs,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons";
import { FC, PropsWithChildren, useState } from "react";
import { ConmpanyIcon } from "../components/CompanyIcon";
import { NavBar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const BasicLayout: FC<PropsWithChildren> = () => {
  const [_, setUserMenuOpened] = useState(false);
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <div className="bg-slate-100">
      <header className="bg-stone-100 border-0 border-b-slate-200  border-solid border-b pt-4 sticky top-0 z-50">
        <Container>
          <Group className="flex gap-1">
            <Burger
              className="sm:hidden"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
            <ConmpanyIcon />

            <Menu
              size={260}
              placement="end"
              transition="pop-top-right"
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              control={
                <UnstyledButton
                  className="text-white p-4 border-r-2"
                  style={{ transition: "background-color 100ms ease" }}
                >
                  <Group spacing={7}>
                    <Avatar
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                      alt="Nhan huynh"
                      radius="xl"
                      size={20}
                    />
                    <Text
                      weight={500}
                      size="sm"
                      sx={{ lineHeight: 1 }}
                      mr={3}
                      className="text-black"
                    >
                      Nhan huynh
                    </Text>
                    <IconChevronDown size={12} className="text-black" />
                  </Group>
                </UnstyledButton>
              }
            >
              <Menu.Item
                icon={<IconHeart size={14} className="text-red-300" />}
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                icon={<IconStar size={14} className="text-yellow-500" />}
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                icon={<IconMessage size={14} className="text-blue-500" />}
              >
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size={14} />}>
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>

              <Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconPlayerPause size={14} />}>
                Pause subscription
              </Menu.Item>
              <Menu.Item color="red" icon={<IconTrash size={14} />}>
                Delete account
              </Menu.Item>
            </Menu>
          </Group>
        </Container>
        <Container>
          <NavBar />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
