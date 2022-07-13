import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Auth0Provider
        domain="dev-7sqoteuw.us.auth0.com"
        clientId="5vhAP9w5t47CuNAl5T7M2xXgRlpzGjBo"
        redirectUri="http://localhost:3001"
      >
        <App />
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
