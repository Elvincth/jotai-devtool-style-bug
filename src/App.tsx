import { Button, MantineProvider, Menu } from "@mantine/core";
import { theme } from "./theme";
import { DevTools } from "jotai-devtools";
import { createStore } from "jotai";

const customStore = createStore();

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <DevTools store={customStore} />
      <Menu shadow="md" width={200} opened>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item>Gallery</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </MantineProvider>
  );
}
