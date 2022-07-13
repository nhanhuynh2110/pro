import { ApolloProvider } from "@apollo/client";
import { client } from "./core/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Button, Center, LoadingOverlay } from "@mantine/core";
import { BasicLayout } from "./layout/BasicLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./container/Home";
import OrderContainer from "./container/Order";

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <ApolloProvider client={client}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<BasicLayout />}>
                  <Route index element={<HomeContainer />} />
                <Route path="orders" element={<OrderContainer />} />
                <Route path="education" element={<HomeContainer />} />
                <Route path="community" element={<HomeContainer />} />
                <Route path="forums" element={<HomeContainer />} />
                <Route path="support" element={<HomeContainer />} />
                <Route path="account" element={<HomeContainer />} />
                <Route path="helpdesk" element={<HomeContainer />} />
                  </Route>
                
              </Routes>
            </BrowserRouter>
        </ApolloProvider>
      )}
      {!isAuthenticated && (
        <Center className="bg-slate-100 h-full">
          <Button onClick={loginWithRedirect} className="w-64">
            Log in
          </Button>
        </Center>
      )}
    </>
  );
}

export default App;
