import "./App.css";
import "./index.css";
import HomeContaienr from "./container/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./core/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Button, Center, LoadingOverlay } from "@mantine/core";

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <ApolloProvider client={client}>
          <HomeContaienr />
        </ApolloProvider>
      )}
      {!isAuthenticated && (
        <Center className="bg-slate-100 h-full">
        <Button onClick={loginWithRedirect} className="w-64">Log in</Button>
      </Center>
      )}
    </>
  );
}

export default App;
