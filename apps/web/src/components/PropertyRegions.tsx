import {
  Box,
  Card,
  Container,
  Grid,
  Overlay,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { FC } from "react";

type CardRegionProp = {
  image: string;
  title: string;
  description: string;
};
const CardRegion: FC<CardRegionProp> = ({ image, title, description }) => {
  const theme = useMantineTheme();
  return (
    <Card
      radius="md"
      className="h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 30%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.15}
        zIndex={0}
      />

      <div>
        <Text size="lg" className="text-white font-bold">
          {title}
        </Text>

        <Text size="sm" className="text-white">
          {description}
        </Text>
      </div>
    </Card>
  );
};

export const PropertyRegions = () => {
  return (
    <Container size="lg" my="md" className="space-y-8">
      <Title className="!font-semibold text-primary text-2xl text-slate-800 text-center">
        Bất động sản theo địa điểm
      </Title>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Box className="h-[320px]">
          <CardRegion
            image="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
            title="Thành phố hồ chí minh"
            description="81389 tin đăng"
          />
        </Box>
        <Grid>
          <Grid.Col span={6}>
            <Box className="h-[150px]">
              <CardRegion
                image="https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-3.jpg"
                title="Hà nội"
                description="̃74107 tin đăng"
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className="h-[150px]">
              <CardRegion
                image="https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-3.jpg"
                title="Đà nẵng"
                description="̃7536 tin đăng"
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className="h-[150px]">
              <CardRegion
                image="https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-1.jpg"
                title="Đồng nai"
                description="5593 tin đăng"
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className="h-[150px]">
              <CardRegion
                image="https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-1.jpg"
                title="Bình Dương"
                description="9953 tin đăng"
              />
            </Box>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
