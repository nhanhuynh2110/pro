import { Header } from "@mantine/core";
import { useAuthorAddedSubscription } from "../generated/apollo";

export const HeaderLayout = () => {
  const { data } = useAuthorAddedSubscription();
  return (
    <Header height="auto">
      <div>Layout</div>
    </Header>
  );
};
