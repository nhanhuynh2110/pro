import {
  Button,
  Container,
  DEFAULT_THEME,
  Overlay,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export const Banner = () => {
  return (
    <section
      style={{
        backgroundColor: "#11284b",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
    >
      <Container size="lg">
        <div className="flex justify-between">
          <div className="space-y-4">
            <Title
              className="text-white font-bold text-2xl md:text-5xl"
              style={{
                maxWidth: 500,
                lineHeight: 1.05,
                fontFamily: `Greycliff CF, ${DEFAULT_THEME.fontFamily}`,
              }}
            >
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                BẤT ĐỘNG SẢN
              </Text>{" "}
              hàng đầu VIỆT NAM
            </Title>

            <Text mt={30} className="text-white max-w-lg opacity-75">
              Build fully functional accessible web applications with ease –
              Mantine includes more than 100 customizable components and hooks
              to cover you in any situation
            </Text>

            <div className="flex w-full">
              <TextInput
                placeholder="Tìm nhanh..."
                className="flex-grow"
                classNames={{
                  input: "rounded-r-none",
                }}
              />
              <Button className="rounded-l-none">Tìm kiếm</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
