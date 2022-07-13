import { Container, Title } from "@mantine/core";
import { CardWithFooter } from "./CarWithFooter";

export const RealEstateForYou = () => {
  return (
    <Container size="lg" className="space-y-8">
      <Title className="!font-semibold text-primary text-2xl text-slate-800 text-center">
        Bất động sản dành cho bạn
      </Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <CardWithFooter
          title="The Empire - Vinhomes Ocean park The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2022/07/07/20220707134957-da4a.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2020/10/21/hmcVYWuR/20201021092453-5470.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2020/10/13/hmcVYWuR/20201013133153-6a58.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2022/06/30/20220630111425-7aec.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2022/06/30/20220630111425-7aec.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2022/06/30/20220630111425-7aec.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2022/06/30/20220630111425-7aec.jpg"
          info="80m2 - 150ha"
        />
        <CardWithFooter
          title="The Empire"
          description="The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park The Empire - Vinhomes Ocean park"
          image="https://file4.batdongsan.com.vn/crop/260x146/2022/06/30/20220630111425-7aec.jpg"
          info="80m2 - 150ha"
        />
      </div>
    </Container>
  );
};
